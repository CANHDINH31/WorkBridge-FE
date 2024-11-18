import * as React from 'react';
import type { Viewport } from 'next';

import '@/styles/global.css';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';

import { UserProvider } from '@/contexts/user-context/user-provider';
import { LocalizationProvider } from '@/components/core/localization-provider';
import { ReactQueryClientProvider } from '@/components/core/react-query-client-provider';
import { ThemeProvider } from '@/components/core/theme-provider/theme-provider';

export const viewport = { width: 'device-width', initialScale: 1 } satisfies Viewport;

interface ILayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayoutProps): React.JSX.Element {
  return (
    <html lang="en">
      <body>
        <LocalizationProvider>
          <ReactQueryClientProvider>
            <UserProvider>
              <ThemeProvider>{children}</ThemeProvider>
              <Toaster />
            </UserProvider>
            <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-left" />
          </ReactQueryClientProvider>
        </LocalizationProvider>
      </body>
    </html>
  );
}
