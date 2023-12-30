import { config as envConfig} from 'dotenv'
envConfig()

const config = {
    nodeEnv: process.env.NODE_ENV || 'development',
    mongoDB: {
        url: process.env.MONGO_DB_URL,
        dbName: process.env.MONGO_DB_NAME
      }
}

export default config