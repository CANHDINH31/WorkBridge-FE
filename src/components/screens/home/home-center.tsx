import React from 'react';
import { CalendarDaysIcon, DocumentChartBarIcon, PhotoIcon } from '@heroicons/react/24/solid';
import { Box, Button, Paper, Stack, TextField, Typography } from '@mui/material';

interface Props {}

export default function HomeCenter(props: Props) {
  return (
    <Stack gap={2}>
      <Welcome />
      <StartPost />
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

function StartPost() {
  return (
    <Paper elevation={1}>
      <Box py={2} px={1.5}>
        <Box display="flex" alignItems="center" gap={2}>
          <Box
            borderRadius="50%"
            width={50}
            height={50}
            component="img"
            src="https://media.licdn.com/dms/image/v2/D4D03AQHt-5xaPvavOw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1703069041306?e=1736985600&v=beta&t=RS1q8ZPBb9by_W3iAk_LOHwt4gAH4-uOprrprBwbv4k"
          />
          <TextField
            size="medium"
            fullWidth
            placeholder="Start a post, try writing with AI"
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '120px',
              },
              '& input': {
                '&::placeholder': {
                  opacity: 0.8,
                  fontSize: 14,
                  fontWeight: 600,
                },
              },
            }}
          />
        </Box>
        <Box mt={2} display="flex" alignItems="center" gap={2} justifyContent="space-around">
          <Box display="flex" alignItems="center" gap={0.5}>
            <PhotoIcon height={24} color="#378FE9" />
            <Typography fontSize={14} fontWeight={600}>
              Media
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={0.5}>
            <CalendarDaysIcon height={24} color="#C37D16" />
            <Typography fontSize={14} fontWeight={600}>
              Event
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={0.5}>
            <DocumentChartBarIcon height={24} color="#E06747" />
            <Typography fontSize={14} fontWeight={600}>
              Write article
            </Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}
