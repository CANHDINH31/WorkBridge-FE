'use client';

import { Box, Typography } from '@mui/material';
import { FieldValues, UseFormWatch } from 'react-hook-form';

interface Props {
  watch: UseFormWatch<FieldValues>;
}

export default function TransactionDetail({ watch }: Props) {
  return (
    <Box
      p={2.5}
      borderRadius={0.8}
      sx={{ borderRadius: '6px', border: '1px solid rgba(0,0,0,0.2)', cursor: 'pointer' }}
    >
      <Box display="flex" justifyContent="space-between">
        <Typography fontWeight={600}>{watch('name')}</Typography>
        <Typography>${watch('price')}</Typography>
      </Box>
      <Typography fontStyle="italic">Website</Typography>
      <Typography>{watch('description')}</Typography>
      {watch('item_inspection_period') && (
        <Typography>Inspection Period: {watch('item_inspection_period')} Day(s)</Typography>
      )}
    </Box>
  );
}
