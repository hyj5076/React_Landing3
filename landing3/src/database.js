

/* const client = await MongoClient.connect('DB접속URL~~', { useNewUrlParser: true })
const db = client.db("forum")
db.collection().어쩌구~  */



/* import { MongoClient } from 'mongodb'
const url = 'DB접속URL~~'
const options = { useNewUrlParser: true }
let connectDB

if (process.env.NODE_ENV === 'development') {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect()
  }
  connectDB = global._mongo
} else {
  connectDB = new MongoClient(url, options).connect()
}
export { connectDB } */