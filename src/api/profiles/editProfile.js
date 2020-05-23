/* Models */
import { Profiles } from '@models'

/* Helpers */
import response from '@helpers/response'

export default async (req, res) => {
	try {
		// check existence
		const profile = await Profiles.findOne({ where: { uuid: req.params.id } })

		// if not profile -> return 404
		if (!profile) return response.notFound({ res, reason: `profile ${req.body.id} not found` })

		// go update the profile
		await profile.update(req.body)

		// elvis has left the building
		return response.success({ res, payload: profile })
	} catch (err) {
		return response.generalError({ res, err })
	}
}
