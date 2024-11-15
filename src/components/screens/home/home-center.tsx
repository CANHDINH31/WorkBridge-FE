import React from 'react';
import { ChatBubbleBottomCenterIcon, FlagIcon, HandThumbUpIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';
import {
  CalendarDaysIcon,
  DocumentChartBarIcon,
  EllipsisHorizontalIcon,
  GlobeAmericasIcon,
  PhotoIcon,
  PlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid';
import { Box, Button, Divider, Paper, Stack, TextField, Typography } from '@mui/material';

interface Props {}

export default function HomeCenter(props: Props) {
  return (
    <Stack gap={2}>
      <Welcome />
      <StartPost />
      <ListPost />
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

function ListPost() {
  return (
    <Stack gap={1}>
      <Post />
      <Post />
      <Post />
    </Stack>
  );
}

function Post() {
  return (
    <Paper elevation={1}>
      <Box pb={2} px={1.5}>
        <Box pt={2} pb={1} display="flex" justifyContent="space-between" alignItems="center">
          <Typography fontSize={12} fontWeight={600} color="#666">
            Suggested
          </Typography>
          <Box display="flex" alignItems="center" gap={0.5}>
            <EllipsisHorizontalIcon height={20} />
            <XMarkIcon height={20} />
          </Box>
        </Box>
        <Divider />
        <Box py={2}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box display="flex" gap={1}>
              <Box
                width={48}
                height={48}
                borderRadius="50%"
                component="img"
                src="https://media.licdn.com/dms/image/v2/D4E03AQEwGKYio-75dw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1706401267836?e=1736985600&v=beta&t=hjxNH3hLm1TfTzOYMSglJhmOW30W4iRSc5rIE8uNwko"
              />
              <Stack>
                <Box display="flex" alignItems="center">
                  <Typography fontSize="12px" fontWeight="bold">
                    Akshet Patel 🤖
                  </Typography>
                  <Typography fontSize="12px" color="#666">
                    • 3rd+
                  </Typography>
                </Box>
                <Typography fontSize="12px">Master of Digital Growth 🌱 | Let&apos;s Catapult Your Success!</Typography>
                <Box display="flex" alignItems="center" gap={0.5}>
                  <Typography fontSize="12px">2d</Typography>
                  <Box component="span" fontSize="12px">
                    •
                  </Box>
                  <GlobeAmericasIcon color="#666" height={12} />
                </Box>
              </Stack>
            </Box>
            <Box display="flex" alignItems="center" gap={0.5} sx={{ cursor: 'pointer' }}>
              <PlusIcon height={16} color="#004182" />
              <Typography fontSize={14} color="#004182">
                Follow
              </Typography>
            </Box>
          </Box>
          <Box mt={2}>
            <Typography fontSize="14px">
              As a leading sales house, we connect creators and buyers, providing your company with exceptional products
              to achieve extraordinary accomplishments.
            </Typography>
          </Box>
          <Box mt={2} marginX={-1.5}>
            <Box
              sx={{ objectFit: 'contain' }}
              width="100%"
              component="img"
              src="https://media.licdn.com/dms/image/v2/D4E22AQFaK2KxQBd3NQ/feedshare-shrink_800/feedshare-shrink_800/0/1702422951635?e=1734566400&v=beta&t=lQMX-EnB1r1f4RnAW4vxW0ONODj7zZysMV1EEa87pyk"
            />
          </Box>
          <Box mt={1} display="flex" justifyContent="space-between">
            <Box display="flex" gap={0.5} alignItems="flex-start">
              <Box display="flex" alignItems="center">
                <Box component="img" src="https://static.licdn.com/aero-v1/sc/h/8ekq8gho1ruaf8i7f86vd1ftt" />
                <Box component="img" src="https://static.licdn.com/aero-v1/sc/h/cpho5fghnpme8epox8rdcds22" />
                <Box component="img" src="https://static.licdn.com/aero-v1/sc/h/b1dl5jk88euc7e9ri50xy5qo8" />
              </Box>
              <Typography fontSize="12px" color="#666">
                10,077
              </Typography>
            </Box>

            <Typography fontSize="14px" color="#666">
              272 comments • 151 reposts
            </Typography>
          </Box>
          <Box mt={1}>
            <Divider />
          </Box>
        </Box>
        <Box display="flex" justifyContent="space-around">
          <Box display="flex" alignItems="center" gap={0.5} sx={{ cursor: 'pointer' }}>
            <HandThumbUpIcon height={20} />
            <Typography fontSize="14px" fontWeight={500}>
              Like
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={0.5} sx={{ cursor: 'pointer' }}>
            <ChatBubbleBottomCenterIcon height={20} />
            <Typography fontSize="14px" fontWeight={500}>
              Comment
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={0.5} sx={{ cursor: 'pointer' }}>
            <FlagIcon height={20} />
            <Typography fontSize="14px" fontWeight={500}>
              Report
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={0.5} sx={{ cursor: 'pointer' }}>
            <PaperAirplaneIcon height={20} />
            <Typography fontSize="14px" fontWeight={500}>
              Send
            </Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}
