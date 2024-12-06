import * as React from 'react';
import type { Viewport } from 'next';

import '@/styles/global.css';

import { getServerAuthSession } from '@/server/auth';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';

import { authService } from '@/lib/api';
import NextAuthProvider from '@/contexts/next-auth-provider';
import { LocalizationProvider } from '@/components/core/localization-provider';
import { ReactQueryClientProvider } from '@/components/core/react-query-client-provider';
import { ThemeProvider } from '@/components/core/theme-provider/theme-provider';

export const viewport = { width: 'device-width', initialScale: 1 } satisfies Viewport;

interface ILayoutProps {
  children: React.ReactNode;
}

export default async function Layout({ children }: ILayoutProps): Promise<React.JSX.Element> {
  const session = await getServerAuthSession();

  return (
    <html lang="en">
      <body>
        <LocalizationProvider>
          <NextAuthProvider session={session}>
            <ReactQueryClientProvider>
              <ThemeProvider>{children}</ThemeProvider>
              <Toaster />
              <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-left" />
            </ReactQueryClientProvider>
          </NextAuthProvider>
        </LocalizationProvider>
      </body>
    </html>
  );
}
