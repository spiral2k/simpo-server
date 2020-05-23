/*eslint no-console: 0, no-unused-vars: 0*/
import http from 'http'
import express from 'express'
import config from '@config/service'
import api from '@api'
import Logger from '@helpers/logger'
import util from 'util'

/* Middlewares */
import cors from 'cors'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import accessLog from '@middlewares/accessLog'
import fakeLatency from '@middlewares/fakeLatency'

const app = express()

app.use(helmet())
app.use(bodyParser.json({ limit: config.bodyLimit }))
app.use(cors())
app.use(accessLog)
app.use(fakeLatency)

app.use('/api', api)

http
	.createServer(app)
	.listen(process.env.PORT || config.webServer.port, () =>
		Logger.debug(`${config.serviceName} has started, server url: ${config.webServer.host}:${config.webServer.port} env: ${process.env.NODE_ENV}`)
	)

process.on('unhandledRejection', (reason, p) => {
	Logger.error(reason)
	Logger.error(util.inspect(p))
})

export default app
