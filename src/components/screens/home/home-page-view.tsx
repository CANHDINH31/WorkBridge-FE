'use client';

import { Box } from '@mui/material';

import HomeCenter from './home-center';
import HomeLeft from './home-left';
import HomeRight from './home-right';

interface Props {}

function HomePageView(props: Props) {
  return (
    <Box display="flex" justifyContent="space-between" gap={4}>
      <Box flex={1}>
        <HomeLeft />
      </Box>
      <Box flex={2}>
        <HomeCenter />
      </Box>
      <Box flex={1}>
        <HomeRight />
      </Box>
    </Box>
  );
}

export default HomePageView;
