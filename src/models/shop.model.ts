import { Schema, model } from 'mongoose'

const DOCUMENT_NAME = 'Shop'
const COLLECTION_NAME = 'Shops'

export interface IShop {
  name: string
  email: string
  password: string
  status: string
  verify: boolean
  roles: string[] | undefined[]
}
const shopSchema = new Schema<IShop>(
  {
    name: {
      type: String,
      trim: true,
      maxLength: 150
    },
    email: {
      type: String,
      trim: true,
      maxLength: 150
    },
    password: {
      type: String,
      require: true
    },
    status: {
      type: String,
      enum: ['active', 'inactive'],
      default: 'inactive'
    },
    verify: {
      type: Schema.Types.Boolean,
      trim: true,
      maxLength: 150
    },
    roles: {
      type: Schema.Types.Array,
      default: []
    }
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME
  }
)

//Export the model
const ShopModel = model<IShop>(DOCUMENT_NAME, shopSchema)

export default ShopModel
