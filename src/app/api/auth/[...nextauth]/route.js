import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()
export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const user = { id: "1", name: credentials.username, email: credentials.password }

        if (user) {
          return user
        } else {
          return null
        }
      }
    })
  ],
  secret : process.env.NEXTAUTH_SECRET,
  session : {
    strategy : 'jwt'
  },
  pages : {
    signIn : '/login',
  },
  debug : process.env.NODE_ENV === 'development',
  callbacks: {
    async jwt({ token, account, profile }) {
      console.log("JWT Callback")
      console.log('Token :-', token)
      console.log('Account :-', account)
      console.log('Profile :-', profile)
      return token
    },
    async session({ session, token, user }) {
      console.log("Session Callback")
      console.log('Session :-', session)
      console.log('Token :-', token)
      console.log('User :-', user)
      return session
    }
  }

}
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }