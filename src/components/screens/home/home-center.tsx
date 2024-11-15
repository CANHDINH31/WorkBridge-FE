import React from 'react';
import { TrophyIcon } from '@heroicons/react/24/outline';
import { Box, Button, Paper, Stack, Typography } from '@mui/material';

interface Props {}

export default function HomeCenter(props: Props) {
  return (
    <Stack gap={2}>
      <Welcome />
    </Stack>
  );
}

function Welcome() {
  return (
    <Paper elevation={1} sx={{ width: '100%', bgcolor: '#fff', padding: '16px 12px' }}>
      <Box display="flex" flexDirection="column" gap={1} alignItems="center">
        <Box
          width={120}
          height={120}
          borderRadius="50%"
          component="img"
          src="https://media.licdn.com/dms/image/v2/D4D03AQHt-5xaPvavOw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1703069041306?e=1736985600&v=beta&t=kJuH_aqS8tY9IC3yIvErOTYcE5KRs3Af5VhtxMzUrwo"
        />
        <Typography fontSize={18} letterSpacing={0.4} fontWeight={400}>
          Hi Pham, are you hiring ?
        </Typography>
        <Typography fontSize={14} color="#666">
          Discover free and easy ways to find a great hire, fast.
        </Typography>
        <Box display="flex" alignItems="center" gap={2} width="100%">
          <Button variant="outlined" fullWidth>
            Yes, I&apos;m hiring
          </Button>
          <Button variant="outlined" fullWidth>
            No, not right now
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}
