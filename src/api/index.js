import { Router as router } from 'express'

/* Routes */
import profilesAPI from '@api/profiles'

let api = router()

api.use('/profiles', profilesAPI)

export default api
