import jwt from 'jsonwebtoken'

export const createTokenPair = async (payload: any, publicKey: string, privateKey: any) => {
  try {
    const accessToken = await jwt.sign(payload, privateKey, {
      algorithm: 'RS256',
      expiresIn: '1d'
    })

    const refreshToken = await jwt.sign(payload, privateKey, {
      algorithm: 'RS256',
      expiresIn: '7d'
    })
    jwt.verify(accessToken, publicKey, (err, decode) => {
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
    console.log(error)
  }
}
