import * as _ from 'lodash'

export const getInfoData = ({ fields = [], object = {} }: { fields: string[]; object: any }) => {
  return _.pick(object, fields)
}
