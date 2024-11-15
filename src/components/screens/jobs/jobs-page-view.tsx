import React from 'react';
import { Box } from '@mui/material';

import JobsLeft from './jobs-left';

interface Props {}

function JobPageView(props: Props) {
  return (
    <Box display="flex" justifyContent="space-between" gap={4}>
      <Box flex={1}>
        <JobsLeft />
      </Box>
      <Box flex={2}>456</Box>
      <Box flex={1}>789</Box>
    </Box>
  );
}

export default JobPageView;
