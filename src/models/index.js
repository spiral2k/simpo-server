/*eslint no-console: 0*/
'use strict'

import fs from 'fs'
import path from 'path'
import Sequelize from 'sequelize'
import Logger from '@helpers/logger'

const basename = path.basename(module.filename)
const env = process.env.NODE_ENV || 'development'
const configDB = require('@config/db')[env]

let db = {}

if (!configDB.host || !configDB.username) {
	throw new Error(`Please check your DB configuration for ${env} environment (src/config/db.js)`)
}

let sequelize = new Sequelize(configDB.database, configDB.username, configDB.password, {
	host: configDB.host,
	dialect: configDB.dialect
})

fs.readdirSync(__dirname)
	.filter(function(file) {
		return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
	})
	.forEach(function(file) {
		let model = sequelize['import'](path.join(__dirname, file))
		db[model.name] = model
	})

Object.keys(db).forEach(function(modelName) {
	if (db[modelName].associate) {
		db[modelName].associate(db)
	}
})

sequelize
	.authenticate()
	.then(() => Logger.debug('Connection to the DB has been established successfully.'))
	.catch(err => Logger.error('WOW! Unable to connect to the database:', err))

module.exports = db
