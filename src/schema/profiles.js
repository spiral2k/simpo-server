module.exports = DataTypes => ({
	id: {
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
		type: DataTypes.INTEGER
	},
	uuid: {
		type: DataTypes.UUID,
		allowNull: false,
		unique: true,
		defaultValue: DataTypes.UUIDV4,
		validate: {
			isUUID: 4
		}
	},
	name: {
		type: DataTypes.STRING,
		allowNull: true
	},
	bio: {
		type: DataTypes.STRING,
		allowNull: true
	},
	facebook_id: {
		type: DataTypes.STRING,
		allowNull: true
	},
	updated_at: DataTypes.DATE,
	created_at: DataTypes.DATE
})
