import type { Metadata } from 'next';

import { config } from '@/config';
import JobPageView from '@/components/screens/jobs/jobs-page-view';

export const metadata = { title: `JOBS | ${config.site.name}` } satisfies Metadata;
export default function Page(): React.JSX.Element {
  return <JobPageView />;
}
