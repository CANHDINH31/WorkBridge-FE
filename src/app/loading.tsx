import * as React from 'react';
import { CircularProgress, Stack } from '@mui/material';

export default function loading(): React.JSX.Element {
  return (
    <Stack component='div' justifyContent='center' alignItems='center' sx={{height: '100%', width: '100%'}}>
      <CircularProgress />
    </Stack>
  );
}
