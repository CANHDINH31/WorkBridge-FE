/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import { ClockIcon } from '@heroicons/react/24/outline';
import { Box, Stack, Typography } from '@mui/material';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);
dayjs.extend(timezone);

export default function TransactionDetailHistory() {
  const date = dayjs.tz('2024-12-17 09:31', 'Asia/Bangkok');
  const formattedDate = date.format('MMMM D, YYYY, h:mm A [GMT]Z');
  return (
    <Box bgcolor="#eef7fe" border={1} borderColor="#e0e0e0" borderRadius={2} padding={3}>
      <Stack direction="column" justifyContent="start" alignItems="start" spacing={3}>
        <Stack direction="row" alignItems="start" width="100%" spacing={2}>
          <ClockIcon height={22} color="#225cab" />
          <Typography fontSize={16} color="#225cab" fontWeight={600}>
            History
          </Typography>
        </Stack>
      </Stack>
      <Stack direction="column" alignItems="start" marginTop={3}>
        <Typography fontSize={14} color="#444444" fontWeight={600}>
          {formattedDate}
        </Typography>
        <Typography fontSize={14} color="#444444">
          Buyer initiates the transaction
        </Typography>
      </Stack>
    </Box>
  );
}
