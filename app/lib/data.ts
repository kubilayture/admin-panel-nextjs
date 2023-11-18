import { User } from './models'
import { connectToDB } from './utils'

export const fetchUsers = async (q: string) => {
  const regex = new RegExp(q, 'i')

  try {
    await connectToDB()
    const users = await User.find({ username: { $regex: regex } })
    return users
  } catch (err: any) {
    console.log(err)
    throw new Error('Failed to fetch users')
  }
}