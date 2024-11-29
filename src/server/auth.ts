import { getServerSession, type DefaultSession, type NextAuthOptions } from 'next-auth';
import { type JWT } from 'next-auth/jwt';
import CredentialsProvider from 'next-auth/providers/credentials';

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: {
      id: string;
    } & DefaultSession['user'];
  }
}

export const authOptions: NextAuthOptions = {
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        // eslint-disable-next-line no-param-reassign
        token = user as unknown as JWT;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.token = token.id as string;
        session.info = token.user;
      }
      return session;
    },
  },

  pages: {
    signIn: '/auth/sign-in',
  },

  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 24 * 365,
    updateAge: 24 * 60 * 60,
  },

  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        data: {},
      },
      async authorize(credentials) {
        if (credentials) {
          const data = JSON.parse(credentials.data);
          return {
            id: data._id,
            user: data,
          };
        }
        return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

export const getServerAuthSession = () => getServerSession(authOptions);
