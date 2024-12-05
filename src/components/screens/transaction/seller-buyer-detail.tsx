'use client';

import { useState } from 'react';
import { ROLE } from '@/utilities/contants';
import { Box, Checkbox, Divider, TextField, Typography } from '@mui/material';

interface Props {
  role: string;
}

export default function SellerBuyerDetail({ role }: Props) {
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
          <TextField label="Email" fullWidth />
          <TextField label="Phone" fullWidth />
        </Box>
      ) : null}

      {role === ROLE?.[0]?.value ? (
        <Box mt={2} display="flex" gap={2}>
          <TextField label="Email" fullWidth />
          <TextField label="Phone" fullWidth />
        </Box>
      ) : null}

      <Box m={2}>
        <Divider />
      </Box>
    </Box>
  );
}
