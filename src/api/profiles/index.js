import { Router as router } from 'express'

/* Routes */
import createProfile from './createProfile'
import getProfiles from './getProfiles'
import getProfile from './getProfile'
import editProfile from './editProfile'

let api = router()

// create profile
api.post('/', createProfile)

// get profiles by limit & offset
api.get('/', getProfiles)

// get one profile
api.get('/:id', getProfile)

// edit profile
api.put('/:id', editProfile)

export default api
