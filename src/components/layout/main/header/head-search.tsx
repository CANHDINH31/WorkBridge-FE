'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Box, InputAdornment, TextField } from '@mui/material';

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
      <TextField
        placeholder="Search ...."
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <MagnifyingGlassIcon height={18} />
            </InputAdornment>
          ),
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            background: '#EDF3F8',
          },
          '& input': {
            '&::placeholder': {
              color: '#5F6163',
              opacity: 1,
              fontSize: 14,
            },
          },
        }}
      />
    </Box>
  );
}
