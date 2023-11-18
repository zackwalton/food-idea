import { prisma } from '@/lib/prisma';
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from 'next-auth';
import type { NextAuthOptions } from 'next-auth'
import GoogleProvider from "next-auth/providers/google";


export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),  // add prisma adapter for next-auth
    providers: [  // add google oauth
        GoogleProvider({
            clientId: process.env.GOOGLE_ID!,
            clientSecret: process.env.GOOGLE_SECRET!,
        })
    ]
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }