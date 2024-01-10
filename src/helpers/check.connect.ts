import mongoose from 'mongoose'

export const countConnect = () => {
  const numConnection = mongoose.connections.length
  console.log(`Number of : ${numConnection}`)
}
