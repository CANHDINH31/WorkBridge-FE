import React from 'react';
import { useRouter } from 'next/navigation';
import { Button, Stack, Typography } from '@mui/material';

import { paths } from '@/paths';

export default function NoThingComponent() {
  const router = useRouter();

  return (
    <Stack direction="column" justifyContent="start" alignItems="center" spacing={3}>
      <img
        style={{
          height: '140px',
        }}
        src="/svg/transaction.svg"
        alt="no thing here"
      />
      <Typography fontWeight={600} fontSize={16} color="#6e6893">
        There’s nothing here yet. Click below to start a new transaction.
      </Typography>
      <Button
        sx={{
          px: 5,
          py: 1,
          backgroundColor: 'green !important',
          display: 'flex',
          color: 'white',
          justifyContent: 'center',
          alignItems: 'center',
          '&:hover': {
            backgroundColor: '#29a329 !important',
          },
        }}
        onClick={() => {
          router.push(paths.transaction);
        }}
      >
        Start a New Transaction
      </Button>
    </Stack>
  );
}
