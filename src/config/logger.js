import winston from 'winston'

import config from '@config/service'

export default winston.createLogger({
	level: config.isProd ? 'info' : 'debug',
	format: winston.format.combine(
		winston.format.colorize(),
		winston.format.timestamp({
			format: 'DD-MM-YYYY HH:mm:ss'
		}),
		winston.format.simple(),
		winston.format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
	),
	transports: [new winston.transports.Console()]
})
