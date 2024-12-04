'use client';

import { Box, Divider, TextField, Typography } from '@mui/material';

export default function SellerDetail() {
  return (
    <Box>
      <Typography fontSize={16} fontWeight={600} color="#4f5759">
        Seller Detail
      </Typography>

      <Box mt={2} display="flex" gap={2}>
        <TextField label="Email" fullWidth />
        <TextField label="Phone" fullWidth />
      </Box>
      <Box m={2}>
        <Divider />
      </Box>
    </Box>
  );
}
