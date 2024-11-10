import type { Metadata } from 'next';

import { config } from '@/config';
import { AuthLayout } from '@/components/layout/auth/auth-layout';

export const metadata = { title: `HOME | ${config.site.name}` } satisfies Metadata;
export default function Page(): React.JSX.Element {
  return <AuthLayout>HOME</AuthLayout>;
}
