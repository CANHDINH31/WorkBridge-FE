import * as React from 'react';
import type { Metadata } from 'next';

import { config } from '@/config';
import ForgotPasswordView from '@/components/screens/auth/forgot-password/forgot-password-view';

export const metadata = { title: `Forgot Password | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
  return <ForgotPasswordView />;
}
