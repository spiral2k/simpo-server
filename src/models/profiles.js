const schema = require('@schema/profiles')

module.exports = function(sequelize, DataTypes) {
	let Profiles = sequelize.define('Profiles', schema(DataTypes), {
		freezeTableName: true,
		tableName: 'profiles',
		underscored: true
	})

	return Profiles
}
