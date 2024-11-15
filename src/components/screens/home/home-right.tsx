import React from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';
import { Box, Button, Paper, Stack, Typography } from '@mui/material';

import Footer from '@/components/layout/footer/footer';

interface Props {}

export default function HomeRight(props: Props) {
  return (
    <Stack gap={2}>
      <AddYourFeed />
      <Hiring />
      <Try />
      <Footer />
    </Stack>
  );
}

function AddYourFeed() {
  return (
    <Paper elevation={1} sx={{ width: '100%', bgcolor: '#fff', padding: '16px 12px' }}>
      <Typography fontSize="16px" letterSpacing={0.4} fontWeight={600}>
        Add to your feed
      </Typography>
      <Stack mt={2} gap={1}>
        <Box display="flex" gap={1}>
          <Box
            width={48}
            height={48}
            borderRadius="50%"
            component="img"
            src="https://media.licdn.com/dms/image/v2/D5603AQHv6LsdiUg1kw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1695167344576?e=1736985600&v=beta&t=GDSbwX-XooNgSty2Dz2GHtQV2QuMuyhyKpA6TrWHg4M"
          />
          <Stack>
            <Typography fontSize="14px" fontWeight={600}>
              Bill gates
            </Typography>
            <Typography fontSize={12} color="#666">
              Chair, Gates Foundation and Founder, Breakthrough Energy
            </Typography>
            <Button
              variant="outlined"
              size="small"
              sx={{ width: 'min-content', marginTop: '4px' }}
              startIcon={<PlusIcon height={18} />}
            >
              Follow
            </Button>
          </Stack>
        </Box>
        <Box display="flex" gap={1}>
          <Box
            width={48}
            height={48}
            borderRadius="50%"
            component="img"
            src="https://media.licdn.com/dms/image/v2/D5603AQHv6LsdiUg1kw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1695167344576?e=1736985600&v=beta&t=GDSbwX-XooNgSty2Dz2GHtQV2QuMuyhyKpA6TrWHg4M"
          />
          <Stack>
            <Typography fontSize="14px" fontWeight={600}>
              Bill gates
            </Typography>
            <Typography fontSize={12} color="#666">
              Chair, Gates Foundation and Founder, Breakthrough Energy
            </Typography>
            <Button
              variant="outlined"
              size="small"
              sx={{ width: 'min-content', marginTop: '4px' }}
              startIcon={<PlusIcon height={18} />}
            >
              Follow
            </Button>
          </Stack>
        </Box>
        <Box display="flex" gap={1}>
          <Box
            width={48}
            height={48}
            borderRadius="50%"
            component="img"
            src="https://media.licdn.com/dms/image/v2/D5603AQHv6LsdiUg1kw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1695167344576?e=1736985600&v=beta&t=GDSbwX-XooNgSty2Dz2GHtQV2QuMuyhyKpA6TrWHg4M"
          />
          <Stack>
            <Typography fontSize="14px" fontWeight={600}>
              Bill gates
            </Typography>
            <Typography fontSize={12} color="#666">
              Chair, Gates Foundation and Founder, Breakthrough Energy
            </Typography>
            <Button
              variant="outlined"
              size="small"
              sx={{ width: 'min-content', marginTop: '4px' }}
              startIcon={<PlusIcon height={18} />}
            >
              Follow
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Paper>
  );
}

function Hiring() {
  return (
    <Box
      component="img"
      src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
      width="100%"
      sx={{ objectFit: 'contain', borderRadius: '8px' }}
    />
  );
}

function Try() {
  return (
    <Paper elevation={1} sx={{ width: '100%', bgcolor: '#fff', padding: '16px 12px' }}>
      <Box display="flex" alignItems="center" gap={1}>
        <Box bgcolor="#fce3dc" fontSize={14} fontWeight={500} padding={0.2} borderRadius="2px">
          TIP
        </Box>
        <Typography fontSize={12} color="#666" fontWeight={500}>
          Try LinkedIn on the Windows App
        </Typography>
      </Box>
    </Paper>
  );
}
