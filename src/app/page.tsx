import type { Metadata } from 'next';

import { config } from '@/config';
import { MainLayout } from '@/components/layout/main/main-layout';
import HomePageView from '@/components/screens/home/home-page-view';

export const metadata = { title: `HOME | ${config.site.name}` } satisfies Metadata;
export default function Page(): React.JSX.Element {
  return (
    <MainLayout>
      <HomePageView />;
    </MainLayout>
  );
}
