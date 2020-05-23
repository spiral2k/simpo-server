const env = process.env.NODE_ENV || 'development';
const isDev = env === 'development';
const isProd = env === 'production';

module.exports = {
	isDev,
	isProd,
	serviceName: 'simpo-test',
	webServer: {
		port: process.env.PORT || 5001,
		host: '0.0.0.0',
	},
	query: {
		limit: 10,
	},
};
