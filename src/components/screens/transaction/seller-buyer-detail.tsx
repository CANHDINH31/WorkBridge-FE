'use client';

import { useState } from 'react';
import { ROLE } from '@/utilities/contants';
import { Box, Checkbox, Divider, TextField, Typography } from '@mui/material';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

interface Props {
  role: string;
  errors: FieldErrors<FieldValues>;
  register: UseFormRegister<FieldValues>;
}

export default function SellerBuyerDetail({ role, errors, register }: Props) {
  const [isCheck, setIsCheck] = useState<boolean>(false);
  return (
    <Box>
      <Typography fontSize={16} fontWeight={600} color="#4f5759">
        {role === ROLE?.[0]?.value && ' Seller Detail'}
        {role === ROLE?.[1]?.value && ' Buyer Detail'}
      </Typography>
      {role === ROLE?.[1]?.value && (
        <Box mt={2} display="flex" gap={0.5} alignItems="center">
          <Checkbox
            checked={isCheck}
            onChange={() => {
              setIsCheck(!isCheck);
            }}
          />
          <Typography>I have a buyer for this transaction</Typography>
        </Box>
      )}

      {role === ROLE?.[1]?.value && isCheck ? (
        <Box mt={2} display="flex" gap={2}>
          <TextField
            label="Email"
            fullWidth
            {...register('email', { required: 'Email is required' })}
            error={Boolean(errors.email)}
            helperText={errors?.email?.message?.toString()}
          />
          <TextField
            label="Phone"
            fullWidth
            {...register('phone', { required: 'Phone is required' })}
            error={Boolean(errors.phone)}
            helperText={errors?.phone?.message?.toString()}
          />
        </Box>
      ) : null}

      {role === ROLE?.[0]?.value ? (
        <Box mt={2} display="flex" gap={2}>
          <TextField
            label="Email"
            fullWidth
            {...register('email', { required: 'Email is required' })}
            error={Boolean(errors.email)}
            helperText={errors?.email?.message?.toString()}
          />
          <TextField
            label="Phone"
            fullWidth
            {...register('phone', { required: 'Phone is required' })}
            error={Boolean(errors.phone)}
            helperText={errors?.phone?.message?.toString()}
          />
        </Box>
      ) : null}

      <Box m={2}>
        <Divider />
      </Box>
    </Box>
  );
}
