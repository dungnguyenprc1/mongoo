import mongoose from 'mongoose'
// import configDB from '@src/configs/config.mongdb'

// const dev = {
//   app: {
//     port: 3000
//   },
//   db: {
//     host: 'localhost',
//     port: 27017,
//     name: 'dbDev'
//   }
// }

// const { app, db } = configDB

const connectString = `mongodb://127.0.0.1/`

class Database {
  static instance: any
  constructor() {
    this.connect()
  }
  connect(type = 'mongodb') {
    if (true) {
      mongoose.set('debug', true)
      mongoose.set('debug', { color: true })
    }
    mongoose
      .connect(connectString)
      .then((_) => {
        console.log('Connect Mongodb Success')
      })
      .catch((err) => {
        console.log(err)
      })
  }
  static getInstance() {
    if (!Database.instance) {
      Database.instance = this
    }
    return Database.instance
  }
}

const instanceMongodb = new Database()

export default instanceMongodb
