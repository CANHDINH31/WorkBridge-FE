import type { Metadata } from 'next';

import { config } from '@/config';
import { MainLayout } from '@/components/layout/main/main-layout';
import TransactionsPageView from '@/components/screens/transactions/transactions-page-view';
import { Typography } from '@mui/material';

export const metadata = { title: `Transactions | ${config.site.name}` } satisfies Metadata;
export default function Page(): React.JSX.Element {
  return (
    <MainLayout>
      <Typography component="span" color="#02416a" fontSize="36px" fontWeight="600">My Transactions</Typography>
      <TransactionsPageView />
    </MainLayout>
  );
}
