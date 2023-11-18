import { User } from './models'
import { connectToDB } from './utils'

export const fetchUsers = async () => {
  try {
    await connectToDB()
    const users = await User.find()
    return users
  } catch (err: any) {
    console.log(err)
    throw new Error('Failed to fetch users')
  }
}