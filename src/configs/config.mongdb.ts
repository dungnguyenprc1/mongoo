const dev = {
  app: {
    port: 3000
  },
  db: {
    host: 'localhost',
    port: 27017,
    name: 'dbDev'
  }
}
const pro = {
  app: {
    port: 3000
  },
  db: {
    host: 'localhost',
    port: 27017,
    name: 'dbProduct'
  }
}

const config: any = { dev, pro }
const env: string = process.env.NODE_ENV || 'dev'

export default config[env]
