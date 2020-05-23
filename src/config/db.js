module.exports = {
	development: {
		username: 'meniedri',
		password: process.env.DB_PASSWORD,
		database: 'simpo',
		host: '0.0.0.0',
		dialect: 'postgres'
	},
	integration: {
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME,
		host: process.env.DB_HOSTNAME,
		dialect: 'postgres'
	},
	staging: {
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME,
		host: process.env.DB_HOSTNAME,
		dialect: 'postgres'
	},
	production: {
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME,
		host: process.env.DB_HOSTNAME,
		dialect: 'postgres'
	}
}
