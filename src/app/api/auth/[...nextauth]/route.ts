import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Discord from "next-auth/providers/discord";
import Twitter from "next-auth/providers/twitter";

export const authOptions = {
    providers: [
        Discord({
            clientId: process.env.DISCORD_CLIENT_ID ?? "",
            clientSecret: process.env.DISCORD_CLIENT_SECRET ?? ""
        }),
        Twitter({
            clientId: process.env.TWITTER_ID ?? "",
            clientSecret: process.env.TWITTER_SECRET ?? "",
            version: "2.0"
        })
    ],
    secret: process.env.NEXTAUTH_SECRET
}

export const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }