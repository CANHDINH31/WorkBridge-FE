import type { Metadata } from 'next';

import { config } from '@/config';
import { MainLayout } from '@/components/layout/main/main-layout';
import TransactionPageView from '@/components/screens/transaction/transaction-page-view';

export const metadata = { title: `Transaction | ${config.site.name}` } satisfies Metadata;
export default function Page(): React.JSX.Element {
  return (
    <MainLayout>
      <TransactionPageView />
    </MainLayout>
  );
}
