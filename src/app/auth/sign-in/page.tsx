import * as React from 'react';
import type { Metadata } from 'next';

import { config } from '@/config';

export const metadata = { title: `Sign In | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
  return <div>123</div>;
}
