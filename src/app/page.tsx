import type { Metadata } from 'next';

import { config } from '@/config';

export const metadata = { title: `HOME | ${config.site.name}` } satisfies Metadata;
export default function Page(): React.JSX.Element {
  return <div>HOME</div>;
}
