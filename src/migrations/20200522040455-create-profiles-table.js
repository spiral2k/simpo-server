'use strict'
const schema = require('../schema/profiles')

module.exports = {
	up: function(queryInterface, Sequelize) {
		return queryInterface.createTable('profiles', schema(Sequelize), {
			hooks: {
				beforeCreate: function(profile, options, fn) {
					profile.createdAt = new Date()
					profile.updatedAt = new Date()
					fn(null, profile)
				},
				beforeUpdate: function(profile, options, fn) {
					profile.updatedAt = new Date()
					fn(null, profile)
				}
			}
		})
	},
	down: function(queryInterface) {
		return queryInterface.dropTable('profiles')
	}
}
