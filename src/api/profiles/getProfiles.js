import config from '@config/service'

/* Models */
import { Profiles } from '@models'

/* Helpers */
import response from '@helpers/response'

export default async (req, res) => {
	try {
		// offset & limit for efficiency
		const { limit, offset } = req.query

		const profiles = await Profiles.findAll({
			attributes: [['uuid', 'id'], 'name'],
			whare: {
				is_active: true
			},
			offset: offset || 0,
			limit: limit || config.query.limit,
			order: [['created_at', 'DESC']]
		})

		return response.success({ res, payload: profiles })
	} catch (err) {
		return response.generalError({ res, err })
	}
}
