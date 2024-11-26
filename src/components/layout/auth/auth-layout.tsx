import * as React from 'react';
import { Box, Container } from '@mui/material';

export interface ILayoutProps {
  children: React.ReactNode;
}

export function AuthLayout({ children }: ILayoutProps): React.JSX.Element {
  return (
    <Container>
      <Box py={2}>
        <Box component="img" src="/images/logo.jpg" height={60} sx={{ objectFit: 'cover' }} />
        {children}
      </Box>
    </Container>
  );
}
