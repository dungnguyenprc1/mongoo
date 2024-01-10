import bcrypt from 'bcrypt'
import crypto from 'crypto'
import { Model } from 'mongoose'
import KeyTokenService from '../keytoken/keyToken.service'
import { createTokenPair } from '@src/auth/authUtils'
import ShopModel, { IShop } from '@src/models/shop.model'

const RolesShop = {
  SHOP: 'SHOP',
  WRITER: 'WRITER',
  ADMIN: 'ADMIN'
}
class AccessService {
  private readonly shopModel: Model<IShop>
  private keyTokenService: KeyTokenService
  constructor() {
    this.shopModel = ShopModel
    this.keyTokenService = new KeyTokenService()
  }

  async signUp({ name, email, password }: IShop) {
    try {
      const shop = await this.shopModel.findOne({ email }).lean()
      if (shop) {
        throw new Error('Email already exists')
      }
      const passwordHash = await bcrypt.hash(password, 10)
      const newShop = await this.shopModel.create({ name, email, password: passwordHash, roles: [RolesShop.SHOP] })
      if (newShop) {
        //created privateKey, publicKey
        const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
          modulusLength: 4096
        })
        const publicKeyString = await this.keyTokenService.createKeyToken({ userId: newShop._id, publicKey })
        if (!publicKeyString) {
          return {
            code: 'xxxx',
            message: 'error create key'
          }
        }
        //create token pair
        const tokens = await createTokenPair({ userId: newShop._id, email }, publicKeyString, privateKey)
        console.log(`Created Token Success::`, tokens)
        return {
          code: 201,
          metadata: {
            shop: newShop,
            tokens
          }
        }
      }
      return {
        code: 200,
        metadata: null
      }
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}

export default AccessService
