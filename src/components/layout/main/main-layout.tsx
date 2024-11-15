import * as React from 'react';
import { Box, Container } from '@mui/material';

import Header from './header/header';

export interface ILayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: ILayoutProps): React.JSX.Element {
  return (
    <Box bgcolor="#F4F2EE" minHeight="100vh">
      <Header />
      <Container>
        <Box py={3}>{children}</Box>
      </Container>
    </Box>
  );
}
