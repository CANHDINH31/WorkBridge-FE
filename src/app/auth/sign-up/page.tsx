import * as React from 'react';
import type { Metadata } from 'next';

import { config } from '@/config';
import SignUpView from '@/components/screens/auth/sign-up/sign-up-view';

export const metadata = { title: `Sign Up | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
  return <SignUpView />;
}
