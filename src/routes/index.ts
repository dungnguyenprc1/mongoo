import { Router } from 'express'
import AccessRoute from '@src/modules/access/access.route'

const routes = Router()
routes.use('/v1/api', AccessRoute)

export default routes
