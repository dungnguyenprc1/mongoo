import KeyTokenModel, { IKeyToken } from '@src/models/keytoken.model'
import { Model } from 'mongoose'

class KeyTokenService {
  private readonly keyTokenModel: Model<IKeyToken>
  constructor() {
    this.keyTokenModel = KeyTokenModel
  }
  createKeyToken = async ({ userId, publicKey }: { userId: any; publicKey: any }) => {
    try {
      const publicKeyString = publicKey.toString()
      const tokens = await this.keyTokenModel.create({ user: userId, publicKey: publicKeyString })
      return tokens ? publicKeyString : null
    } catch (error) {
      return error
    }
  }
}

export default KeyTokenService
