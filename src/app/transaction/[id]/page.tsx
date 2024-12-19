import type { Metadata } from 'next';

import { config } from '@/config';
import TransactionDetailPageView from '@/components/screens/transaction-detail/transaction-detail-page-view';
import { MainLayout } from '@/components/layout/main/main-layout';

export const metadata = { title: `Transaction detail | ${config.site.name}` } satisfies Metadata;

export default function page({ params }: { params: { id: number } }) {
  return (
    <MainLayout>
      <TransactionDetailPageView id={params.id} />
    </MainLayout>
  );
}
