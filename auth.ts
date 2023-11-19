import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { connectToDB } from './app/lib/utils'
import { authConfig } from './auth.config'
import { User } from './app/lib/models'
import bcrypt from 'bcrypt'

const login = async (credentials: any) => {
  try {
    await connectToDB()
    const user = await User.findOne({ username: credentials.username })

    if (!user) throw new Error("Wrong credentials!!!")

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    )

    if (!isPasswordCorrect) throw new Error("Wrong credentials!")

    return user
  } catch (err) {
    console.log(err)
    throw new Error("Failed to login!")
  }
}

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials)
          return user
        }
        catch (err) {
          return null
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token.username = user.username
        token.img = user.img
      }
      return token
    },
    async session({ session, token }: any) {
      if (token) {
        session.user.username = token.username
        session.user.img = token.img
      }
      return session
    }
  }
})
