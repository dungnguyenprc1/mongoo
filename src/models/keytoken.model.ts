import { Schema, model } from 'mongoose'

const DOCUMENT_NAME = 'Key'
const COLLECTION_NAME = 'Keys'

export interface IKeyToken {
  user: any
  publicKey: string
  refreshToken: string[] | undefined[]
}
const keyTokenShema = new Schema<IKeyToken>(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Shop'
    },
    publicKey: {
      type: String
    },
    refreshToken: {
      type: Array,
      default: []
    }
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME
  }
)

//Export the model
const KeyTokenModel = model<IKeyToken>(DOCUMENT_NAME, keyTokenShema)
export default KeyTokenModel
