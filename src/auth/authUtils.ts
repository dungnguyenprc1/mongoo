import jwt from 'jsonwebtoken'

export const createTokenPair = async (payload: any, publicKey: any, privateKey: any) => {
  try {
    const accessToken = await jwt.sign(payload, privateKey, {
      algorithm: 'RS256',
      expiresIn: '2 days'
    })

    const refreshToken = await jwt.sign(payload, privateKey, {
      algorithm: 'RS256',
      expiresIn: '7 days'
    })
    jwt.verify(accessToken, publicKey, (err: any, decode: any) => {
      if (err) {
        console.error('error', err)
      } else {
        console.log('decode verify', decode)
      }
    })
    return {
      accessToken,
      refreshToken
    }
  } catch (error) {
    // console.log(error)
  }
}
