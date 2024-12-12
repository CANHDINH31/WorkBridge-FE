'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Box, Button, Stack, Typography } from '@mui/material';
import * as CopyToClipboard from 'react-copy-to-clipboard';
import QRCode from 'react-qr-code';

import { text } from '@/styles/theme/colors';

interface Props {
  id: string;
}

export default function TransactionQr({ id }: Props) {
  const [isCopy, setIsCopy] = useState<boolean>(false);
  const url = `${process.env.NEXT_PUBLIC_DOMAIN_WEB}/transaction/${id}`;
  return (
    <Stack alignItems="center">
      <Typography fontWeight={600} fontSize={24} color={text}>
        Transaction Created!
      </Typography>
      <Typography fontSize={14} maxWidth="80%" textAlign="center" mt={2}>
        Your transaction has been created, waiting for both parties to agree. Share the transaction via the URL or QR
        code so that the Seller can agree to the terms.
      </Typography>
      <Box minWidth={150} mt={4}>
        <QRCode
          size={128}
          style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
          value={url}
          viewBox="0 0 256 256"
        />
      </Box>
      <Box mt={4} width="60%">
        <Typography fontSize={14}>Share</Typography>
        <Box display="flex" px={2} justifyContent="space-around" mt={2}>
          <Stack gap={1} alignItems="center" sx={{ cursor: 'pointer' }}>
            <Box component="img" src="/images/social/email.png" width={40} />
            <Typography fontSize={12}>Email</Typography>
          </Stack>
          <Stack gap={1} alignItems="center" sx={{ cursor: 'pointer' }}>
            <Box component="img" src="/images/social/messenger.png" width={40} />
            <Typography fontSize={12}>Messenger</Typography>
          </Stack>
          <Stack gap={1} alignItems="center" sx={{ cursor: 'pointer' }}>
            <Box component="img" src="/images/social/x.png" width={40} />
            <Typography fontSize={12}>X</Typography>
          </Stack>
          <Stack gap={1} alignItems="center" sx={{ cursor: 'pointer' }}>
            <Box component="img" src="/images/social/whats-app.png" width={40} />
            <Typography fontSize={12}>WhatsApp</Typography>
          </Stack>
        </Box>
      </Box>
      <Box mt={4} width="60%">
        <Typography fontSize={14}>URL</Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center" p={1} bgcolor="#f5f7f9" mt={1}>
          <Link href={url}>
            <Typography color="#08f" sx={{ textDecoration: 'none !important' }} fontSize={14}>
              {url}
            </Typography>
          </Link>
          {/* @ts-ignore */}
          <CopyToClipboard
            text={url}
            onCopy={() => {
              setIsCopy(!isCopy);
            }}
          >
            <Button>{isCopy ? 'Copied' : 'Copy link'}</Button>
          </CopyToClipboard>
        </Box>
      </Box>
      <Box mt={4} minWidth="40%">
        <Button fullWidth variant="contained" size="large">
          View transaction
        </Button>
      </Box>
    </Stack>
  );
}
