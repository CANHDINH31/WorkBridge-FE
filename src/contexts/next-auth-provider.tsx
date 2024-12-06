'use client';

import { useEffect } from 'react';
import cookiesStore from '@/utilities/cookies-store';
import type { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

import { authService } from '@/lib/api';

export default function NextAuthProvider({
  session,
  children,
}: {
  session: Session | null;
  children: React.ReactNode;
}) {
  useEffect(() => {
    const accesstoken = cookiesStore.get('access_token');
    const checkLoginGoogle = async () => {
      if (!accesstoken && session?.user?.image) {
        const res = await authService.loginGoogle({
          name: session?.user?.name ?? '',
          email: session?.user?.email ?? '',
        });

        cookiesStore.set('access_token', res.token);
      }
    };
    void (session?.user?.image && checkLoginGoogle());
  }, []);

  return <SessionProvider session={session}>{children}</SessionProvider>;
}
