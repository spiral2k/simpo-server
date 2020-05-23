/* Models */
import { Profiles } from '@models'

/* Helpers */
import response from '@helpers/response'

export default async (req, res) => {
	try {
		const { id } = req.params

		const profile = await Profiles.findOne({
			attributes: [['uuid', 'id'], 'name', 'bio', 'facebook_id'],
			where: {
				uuid: id
			}
		})

		return response.success({ res, payload: profile })
	} catch (err) {
		return response.generalError({ res, err })
	}
}
