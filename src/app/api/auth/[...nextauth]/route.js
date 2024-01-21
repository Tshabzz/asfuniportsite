import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google'

const authOptions = {
    providers: [
        GoogleProvider({
            clientId: '253082600109-2rbmhk4hdn5l7hgslcofqt17l11m6k7q.apps.googleusercontent.com',
            clientSecret: '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'
        })
    ],
    session: {
        strategy: 'jwt'
    },
    callbacks: {
        async signIn({profile}) {
            console.log(profile)
            return true
        }
    }
}

const handler = NextAuth(authOptions)
export  {handler as GET, handler as POST}