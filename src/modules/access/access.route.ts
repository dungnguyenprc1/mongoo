import { Router } from 'express'
import AccessController from './access.controller'
import AccessService from './access.service'

const accessService = new AccessService()
const accessController = new AccessController(accessService)
const AccessRoute = Router()
AccessRoute.post('/shop/signup', accessController.signUp)

export default AccessRoute
