import { NextFunction, Request, Response } from 'express'
import AccessService from './access.service'

export default class AccessController {
  private accessService: AccessService
  constructor(accessService: AccessService) {
    this.accessService = accessService
  }

  signUp = async (req: Request, res: Response, next: NextFunction) => {
    try {
      return res.status(201).json(await this.accessService.signUp(req.body))
    } catch (error) {
      next(error)
    }
  }
}
