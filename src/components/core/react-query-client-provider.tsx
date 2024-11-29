'use client';

import { ReactNode } from 'react';
import queryClient from '@/utilities/react-query';
import { QueryClientProvider } from '@tanstack/react-query';

export function ReactQueryClientProvider({ children }: { children: ReactNode }) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
