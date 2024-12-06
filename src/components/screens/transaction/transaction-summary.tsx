'use client';

import { useState } from 'react';
import { WB_FEE, WORKBRIDGE_FEE } from '@/utilities/contants';
import { Box, Button, Divider, MenuItem, Select, Typography } from '@mui/material';
import { Control, Controller, FieldValues, UseFormWatch } from 'react-hook-form';

import BasicModal from '@/components/core/common/basic-modal';

interface Props {
  watch: UseFormWatch<FieldValues>;
  control: Control<FieldValues, any>;
}
export default function TransactionSummary({ watch, control }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const price = Number(watch('price')).toFixed(2);
  const feePrice = Number(watch('fee_price')).toFixed(2) ?? 0;
  const feeWorkBridge = Number(WORKBRIDGE_FEE).toFixed(2);

  const feeWB = watch('fee_workbridge');

  const buyerPrice =
    feeWB === WB_FEE[0].value
      ? (Number(price) + Number(feePrice) + Number(feeWorkBridge)).toFixed(2)
      : feeWB === WB_FEE[1].value
        ? (Number(price) + Number(feePrice)).toFixed(2)
        : (Number(price) + Number(feePrice) + Number(feeWorkBridge) / 2).toFixed(2);

  const sellerProceeds = (Number(buyerPrice) - Number(feeWorkBridge)).toFixed(2);

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
          <Typography>${price}</Typography>
        </Box>
        {watch('fee_price') && (
          <Box display="flex" justifyContent="space-between" mt={1}>
            <Typography>Shipping fee:</Typography>
            <Typography>${feePrice}</Typography>
          </Box>
        )}

        <Box display="flex" justifyContent="space-between" mt={1}>
          <Box display="flex" gap={1} alignItems="center">
            <Typography>WorkBridge fee paid by:</Typography>
            <Controller
              name="fee_workbridge"
              control={control}
              defaultValue={WB_FEE[0].value}
              render={({ field }) => (
                <Select
                  labelId="fee_workbridge"
                  id="fee_workbridge"
                  label="WorkBridge fee paid by"
                  {...field}
                  variant="standard"
                >
                  {WB_FEE.map((w) => (
                    <MenuItem key={w.value} value={w.value}>
                      {w.label}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
          </Box>

          <Typography>${feeWorkBridge}</Typography>
        </Box>
        <Box mt={1}>
          <Divider />
        </Box>
        <Box display="flex" justifyContent="space-between" mt={1}>
          <Typography>Buyer price:</Typography>
          <Typography>${buyerPrice}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" mt={1}>
          <Typography>Seller proceeds:</Typography>
          <Typography>${sellerProceeds}</Typography>
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
