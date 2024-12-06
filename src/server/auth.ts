import { getServerSession, type DefaultSession, type NextAuthOptions } from 'next-auth';
import { type JWT } from 'next-auth/jwt';
// eslint-disable-next-line import/no-named-as-default
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

import { paths } from '@/paths';

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: {
      id: string;
    } & DefaultSession['user'];
  }
}

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: paths.auth.signIn,
  },

  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 24 * 365,
    updateAge: 24 * 60 * 60,
  },

  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID ?? '',
      clientSecret: process.env.AUTH_GOOGLE_SECRET ?? '',
      authorization: {
        params: { scope: 'profile email', prompt: 'select_account' },
      },
    }),

    CredentialsProvider({
      name: 'credentials',
      credentials: {
        data: {},
      },
      async authorize(credentials) {
        if (credentials) {
          const data = JSON.parse(credentials.data);
          return { id: data.id, name: data.name, email: data.email };
        }
        return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

export const getServerAuthSession = () => getServerSession(authOptions);
