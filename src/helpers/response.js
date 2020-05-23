import Logger from '@helpers/logger'
import stringify from 'json-stringify-safe'

module.exports = {
	success: ({ res, payload }) => {
		res.status(200).send(payload || {})
	},
	successNoContent: ({ res }) => {
		res.status(204).send()
	},
	badRequest: ({ res }) => {
		res.status(400).json({ code: 'Bad request' })
	},
	unauthorized: ({ res }) => {
		res.status(401).json({ code: 'Unauthorized' })
	},
	forbidden: ({ res }) => {
		res.status(403).json({ code: 'Forbidden' })
	},
	notFound: ({ res, reason }) => {
		Logger.error(stringify(reason))
		res.status(404).json({ code: 'Not Found' })
	},
	generalError: ({ res, err }) => {
		Logger.error(stringify(err))
		res.status(500).json({ code: 'Internal Server Error' })
	},
}
