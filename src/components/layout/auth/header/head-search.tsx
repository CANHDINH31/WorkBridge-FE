'use client';

import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const Input = styled('input')({});

export default function HeadSearch(): React.JSX.Element {
  return (
    <Box display="flex" alignItems="center" gap="6px">
      <Box component="img" src="/images/logo.png" alt="logo" height={36} sx={{ objectFit: 'contain' }} />
      <Search />
    </Box>
  );
}

function Search(): React.JSX.Element {
  return (
    <Box>
      <Input placeholder="Search" />
    </Box>
  );
}
