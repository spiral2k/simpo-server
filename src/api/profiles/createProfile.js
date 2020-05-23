/* Models */
import { Profiles } from '@models'

/* Helpers */
import response from '@helpers/response'

export default async (req, res) => {
	try {
		const { name, bio, facebook_id } = req.body

		const { uuid } = await Profiles.create({
			name,
			bio,
			facebook_id
		})

		// 200 & returning profile with the new id
		return response.success({ res, payload: { id: uuid, name, bio, facebook_id } })
	} catch (err) {
		return response.generalError({ res, err })
	}
}
