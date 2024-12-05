'use client';

import { useState } from 'react';
import { Box, Button, Divider, Typography } from '@mui/material';

import BasicModal from '@/components/core/common/basic-modal';

export default function TransactionSummary() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography fontSize={16} fontWeight={600} color="#4f5759">
          Transaction summary
        </Typography>
        <Button
          onClick={() => {
            setIsOpen(true);
          }}
        >
          How to totals are calculated
        </Button>
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

      {/* Modal */}
      <BasicModal
        open={isOpen}
        handleClose={() => {
          setIsOpen(false);
        }}
      >
        <Typography fontSize={16} fontWeight={600} color="#4f5759">
          How are the totals calculated?
        </Typography>
        <Box mt={2}>
          <Typography fontSize={14} color="#4f5759" fontWeight={600}>
            Buyer price:
          </Typography>
          <Typography fontSize={14}>
            This is the estimated amount that the buyer will pay for inclusive of fees.
          </Typography>
          <Typography mt={2} fontSize={14} color="#4f5759" fontWeight={600}>
            Seller proceeds:
          </Typography>
          <Typography fontSize={14}>This is the estimated amount that the seller will receive minus fees.</Typography>
        </Box>
        <Box mt={2} textAlign="end">
          <Button
            onClick={() => {
              setIsOpen(false);
            }}
          >
            Got it
          </Button>
        </Box>
      </BasicModal>
    </Box>
  );
}
