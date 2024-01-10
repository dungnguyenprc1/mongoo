import KeyTokenModel, { IKeyToken } from '@src/models/keytoken.model'
import { Model } from 'mongoose'

class KeyTokenService {
  private readonly keyTokenModel: Model<IKeyToken>
  constructor() {
    this.keyTokenModel = KeyTokenModel
  }
  createKeyToken = async ({ userId, publicKey, privateKey }: { userId: any; publicKey: any; privateKey: any }) => {
    try {
      const tokens = await this.keyTokenModel.create({ user: userId, publicKey, privateKey })
      return tokens ? tokens.publicKey : null
    } catch (error) {
      return error
    }
  }
}

export default KeyTokenService
