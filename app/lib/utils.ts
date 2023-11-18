import mongoose from 'mongoose'
const mongoconnect = process.env.MONGODB!

export const connectToDB = async () => {
  const connection: any = {}

  try {
    if (connection.isConnected) return
    const db = await mongoose.connect(mongoconnect)
    connection.isConnected = db.connections[0].readyState
  } catch (err: any) {
    console.log(err)
    throw new Error(err)
  }
}