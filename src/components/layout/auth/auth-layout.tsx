'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { Box, Container } from '@mui/material';

export interface ILayoutProps {
  children: React.ReactNode;
}

export function AuthLayout({ children }: ILayoutProps): React.JSX.Element {
  const router = useRouter();
  return (
    <Container>
      <Box py={2}>
        <Box
          component="img"
          src="/images/logo.jpg"
          height={60}
          sx={{ objectFit: 'cover' }}
          onClick={() => {
            router.push('/');
          }}
        />
        {children}
      </Box>
    </Container>
  );
}
