require('module-alias/register')
import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import * as dotenv from 'dotenv'
import instanceMongodb from './dbs/init.mongodb'
import routes from './routes'
import AccessRoute from './modules/access/access.route'

dotenv.config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('combined'))
app.use(helmet())
instanceMongodb.connect()

app.use('/v1/api', AccessRoute)

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`)
// })

const startServer = async () => {
  try {
    const port = process.env.PORT || 3000
    app.listen(port, async () => {
      console.log(`
🚀 Server ready at: http://localhost:${port}`)
    })
  } catch (error) {
    console.log(error)
    throw error
  }
}

startServer()
