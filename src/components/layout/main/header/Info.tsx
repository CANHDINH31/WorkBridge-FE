import { useState } from 'react';
import { Box, Button, Collapse, Divider, Paper, Typography } from '@mui/material';

import { primary } from '@/styles/theme/colors';
import Link from 'next/link';
import { paths } from '@/paths';

interface Props {
  signOut: () => void;
  character: string;
}

function HeaderInfo({ signOut, character }: Props) {
  const [isCheck, setIsCheck] = useState<boolean>(false);
  return (
    <Box position="relative">
      <Box
        onClick={() => {
          setIsCheck(!isCheck);
        }}
        width={32}
        height={32}
        sx={{ borderRadius: '50%', cursor: 'pointer' }}
        bgcolor={primary}
        display="flex"
        justifyContent="center"
        alignItems="center"
        color="white"
        fontWeight={600}
      >
        {character}
      </Box>
      <Collapse in={isCheck} sx={{ position: 'absolute', left: -10 }}>
        <Paper sx={{ mt: 2, p: 2, minWidth: 200, width: 'max-content' }} elevation={4}>
          <Typography fontSize={14} fontWeight={600}>
            Account
          </Typography>
          <Typography fontSize={12} mt={1}>
            Settings & Privacy
          </Typography>
          <Typography fontSize={12} mt={1}>
            Help
          </Typography>
          <Typography fontSize={12} mt={1}>
            Language
          </Typography>
          <Typography fontSize={12} mt={1}>
            <Link href={paths.transactions}>
            My transactions
            </Link>
          </Typography>
          <Box my={2}>
            <Divider />
          </Box>
          <Typography fontSize={14} fontWeight={600}>
            Manage
          </Typography>
          <Typography fontSize={12} mt={1}>
            Post & Activity
          </Typography>
          <Typography fontSize={12} mt={1}>
            Job Posting Account
          </Typography>
          <Box my={2}>
            <Divider />
          </Box>
          <Button size="small" onClick={signOut}>
            Sign Out
          </Button>
        </Paper>
      </Collapse>
    </Box>
  );
}

export default HeaderInfo;
