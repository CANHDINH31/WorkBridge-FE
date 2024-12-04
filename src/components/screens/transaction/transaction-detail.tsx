'use client';

import { Box, Typography } from '@mui/material';

export default function TransactionDetail() {
  return (
    <Box
      p={2.5}
      borderRadius={0.8}
      sx={{ borderRadius: '6px', border: '1px solid rgba(0,0,0,0.2)', cursor: 'pointer' }}
    >
      <Box display="flex" justifyContent="space-between">
        <Typography fontWeight={600}>Item name</Typography>
        <Typography>$99.99</Typography>
      </Box>
      <Typography fontStyle="italic">Website</Typography>
      <Typography>Item description</Typography>
      <Typography>Inspection Period: 1 Day</Typography>
    </Box>
  );
}
