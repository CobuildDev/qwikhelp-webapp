import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
  throw new Error('⚠️ MONGODB_URI is not defined in .env.local')
}

interface MongooseCache {
  conn?: typeof mongoose
  promise?: Promise<typeof mongoose>
}

declare global {
  var _mongooseCache: MongooseCache
}

const globalCache = global._mongooseCache || {}

async function connectDB(): Promise<typeof mongoose> {
  if (globalCache.conn) {
    return globalCache.conn
  }

  if (!globalCache.promise) {
    globalCache.promise = mongoose
      .connect(MONGODB_URI, {
        dbName: 'qwikhelp',
        bufferCommands: false,
      })
      .then((mongooseInstance) => {
        globalCache.conn = mongooseInstance
        return mongooseInstance
      })
  }

  global._mongooseCache = globalCache

  return globalCache.promise
}

export default connectDB
