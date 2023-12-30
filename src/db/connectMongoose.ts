import mongoose from 'mongoose'
import config from '../config'
import logger from '../logger'

class MongooseService {
  static async init () {
    const url = config.mongoDB.url
    const db = mongoose.connection

    db.on('connected', () => {
      logger.info('connected to MongoDB')
    })
    db.on('error', (e) => {
      console.error('MongoDB connect error')
      logger.error(e)
    })
    db.once('open', () => {
      logger.info('Mongo DB connecet')
    })

    try {
      await mongoose.connect(`${url}/${config.mongoDB.dbName}`)
    } catch (e) {
      logger.info('Mongo connection error')
      logger.error(e)
    }
  }

  static async disconnect () {
    try {
      await mongoose.disconnect()
      logger.info('Disconnected from MongoDB')
    } catch (e) {
      logger.error('MongoDB disconnection error')
      logger.error(e)
    }
  }
}

export default MongooseService