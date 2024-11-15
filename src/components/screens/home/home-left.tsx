import React from 'react';
import { BookmarkIcon, PlusIcon, UserPlusIcon } from '@heroicons/react/24/solid';
import { Box, Divider, Paper, Stack, Typography } from '@mui/material';

interface Props {}

export default function HomeLeft(props: Props) {
  return (
    <Stack gap={2}>
      <Genneral />
      <Discover />
    </Stack>
  );
}

function Genneral() {
  return (
    <Paper elevation={1} sx={{ width: '100%' }}>
      <Box position="relative" minHeight={75}>
        <Box
          component="img"
          src="https://static.licdn.com/aero-v1/sc/h/55k1z8997gh8dwtihm11aajyq"
          width="100%"
          sx={{
            objectFit: 'cover',
            borderTopLeftRadius: '8px',
            borderTopRightRadius: '8px',
            height: '50px',
          }}
        />
        <Box
          sx={{ transform: 'translateX(-50%)' }}
          top={25}
          left="50%"
          position="absolute"
          border="2px solid #fff"
          width={72}
          height={72}
          borderRadius="50%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            width={70}
            height={70}
            borderRadius="50%"
            component="img"
            src="https://media.licdn.com/dms/image/v2/D4D03AQHt-5xaPvavOw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1703069041306?e=1736985600&v=beta&t=kJuH_aqS8tY9IC3yIvErOTYcE5KRs3Af5VhtxMzUrwo"
          />
        </Box>
      </Box>
      <Box pt={4} pb={2} textAlign="center">
        <Typography fontWeight={600} fontSize="14px">
          Pham Canh Dinh
        </Typography>
        <Typography color="#666">--</Typography>
      </Box>
      <Divider />
      <Box py={2} px={1.5} display="flex" justifyContent="space-between" alignItems="center">
        <Box>
          <Typography fontSize={12} fontWeight={500} color="#666">
            Connections
          </Typography>
          <Typography fontSize={12} fontWeight={600}>
            Don&apos;t miss connections
          </Typography>
        </Box>
        <Box>
          <UserPlusIcon height={20} />
        </Box>
      </Box>
      <Divider />
      <Box py={2} px={1.5}>
        <Typography fontSize={12} fontWeight={500} color="#666">
          Access exclusive tools & insights
        </Typography>
        <Box display="flex" alignItems="center">
          <Typography fontSize={12} fontWeight={600}>
            Try free a month
          </Typography>
        </Box>
      </Box>
      <Divider />
      <Box py={2} px={1.5}>
        <Box display="flex" alignItems="center" gap={1}>
          <BookmarkIcon height={20} color="#666" />
          <Typography fontSize={12} fontWeight={600}>
            Saved Items
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
}

function Discover() {
  return (
    <Paper elevation={1} sx={{ width: '100%' }}>
      <Box py={2} px={1.5} display="flex" justifyContent="space-between" alignItems="center">
        <Stack gap={1}>
          <Typography color="#0a66c2" fontSize={12} fontWeight={600}>
            Groups
          </Typography>
          <Typography color="#0a66c2" fontSize={12} fontWeight={600}>
            Events
          </Typography>
          <Typography color="#0a66c2" fontSize={12} fontWeight={600}>
            Followed Hashtags
          </Typography>
        </Stack>
        <PlusIcon height={24} />
      </Box>
      <Divider />
      <Box py={2} px={1} textAlign="center">
        <Typography color="#666" fontWeight={600} fontSize={14}>
          Discover more
        </Typography>
      </Box>
    </Paper>
  );
}
