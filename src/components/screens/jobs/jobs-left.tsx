import React from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';
import { Box, Button, Divider, Paper, Stack, Typography } from '@mui/material';

interface Props {}

export default function JobsLeft(props: Props) {
  return (
    <Stack gap={2}>
      <Genneral />
    </Stack>
  );
}

function Genneral() {
  return (
    <Paper elevation={1} sx={{ width: '100%', paddingBottom: '16px' }}>
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
          top={25}
          left="12px"
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
      <Box px={1.5} pt={4} pb={2} textAlign="left">
        <Typography fontWeight={600} fontSize="14px">
          Pham Canh Dinh
        </Typography>
        <Typography color="#666" fontSize={11}>
          Hanoi, hanoi
        </Typography>
      </Box>
      <Box px={1.5}>
        <Button variant="outlined" fullWidth startIcon={<PlusIcon height={20} />}>
          Experience
        </Button>
      </Box>
    </Paper>
  );
}
