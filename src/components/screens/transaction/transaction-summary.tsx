'use client';

import { Box, Button, Divider, Typography } from '@mui/material';

export default function TransactionSummary() {
  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography fontSize={16} fontWeight={600} color="#4f5759">
          Transaction summary
        </Typography>
        <Button>How to totals are calculated</Button>
      </Box>

      <Box mt={2}>
        <Box display="flex" justifyContent="space-between">
          <Typography>Subtotal:</Typography>
          <Typography>$55.00</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" mt={1}>
          <Typography>Escrow fee paid by:</Typography>
          <Typography>$88.00</Typography>
        </Box>
        <Box mt={1}>
          <Divider />
        </Box>
        <Box display="flex" justifyContent="space-between" mt={1}>
          <Typography>Buyer price:</Typography>
          <Typography>$25.00</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" mt={1}>
          <Typography>Seller proceeds:</Typography>
          <Typography>$35.00</Typography>
        </Box>
        <Typography mt={1} textAlign="center" fontStyle="italic">
          All prices are in USD. Taxes may apply.
        </Typography>
      </Box>
    </Box>
  );
}
