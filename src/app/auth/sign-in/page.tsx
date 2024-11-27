import * as React from 'react';
import type { Metadata } from 'next';

import { config } from '@/config';
import SignInView from '@/components/screens/auth/sign-in/sign-in-view';

export const metadata = { title: `Sign In | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
  return <SignInView />;
}
