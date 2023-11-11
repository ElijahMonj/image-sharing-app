import NextAuth,{ AuthOptions} from 'next-auth'
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from "next-auth/providers/credentials";
import {PrismaAdapter} from "@next-auth/prisma-adapter"
import prisma from "@/app/libs/prismadb";
import bcrypt from 'bcrypt';
import FacebookProvider from "next-auth/providers/facebook";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),

  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
     
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" }
      },
      async authorize(credentials) {
        
        if (!credentials?.email||!credentials?.password){
        
          throw new Error('Invalid Credentials');
        }
        //if no credentials recieved, throw error
        const user = await prisma.user.findUnique({
          where:{
              email: credentials.email
          }
        });
        //find user in db using email
        if(!user||!user?.password){
          
          throw new Error('Invalid Credentials');
        }
        //if the user has no password or no user found, no account created using credentials
        const isCorrectPassword=await bcrypt.compare(
          credentials.password,
          user.password
        );
        //compare password
        if(!isCorrectPassword){
         
          throw new Error('Invalid Credentials');
        }
        //check if password matches using bcrypt
       
        return user;
        //finally authorize user
      }
    }),
  
  ],
    pages: {
      signIn:"/"  
    },
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
};

