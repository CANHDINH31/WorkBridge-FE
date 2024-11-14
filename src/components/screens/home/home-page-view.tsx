import React from 'react';
import { Box } from '@mui/material';

import { MainLayout } from '@/components/layout/main/main-layout';

import HomeCenter from './home-center';
import HomeLeft from './home-left';
import HomeRight from './home-right';

interface Props {}

function HomePageView(props: Props) {
  return (
    <Box display="flex" justifyContent="space-between">
      <HomeLeft />
      <HomeCenter />
      <HomeRight />
    </Box>
  );
}

export default HomePageView;
