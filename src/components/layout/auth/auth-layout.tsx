import * as React from 'react';
import { Box } from '@mui/material';

export interface ILayoutProps {
  children: React.ReactNode;
}

export function AuthLayout({ children }: ILayoutProps): React.JSX.Element {
  return <Box minHeight="100vh">{children}</Box>;
}
