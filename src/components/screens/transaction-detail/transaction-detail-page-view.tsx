'use client';

import React from 'react';
import copyToClipboard from '@/utilities/copy-clipboard';
import { ClipboardDocumentIcon, ClockIcon, DocumentTextIcon, TagIcon } from '@heroicons/react/24/outline';
import { Box, Button, Chip, Grid, Stack, Step, StepLabel, Stepper, Typography } from '@mui/material';

import TransactionDetailHistory from './transaction-detail-history';

interface IProps {
  id: string | number;
}

const DEFINE_STEPS = ['Agreement', 'Payment', 'Domain Transfer', 'Inspection', 'Closed'];

const DATA_MOCK = {
  name: 'test transaction title',
  email: 'test@gmail.com',
  emailDomain: 'domain@gmail.com',
};

const ITEM_DETAIL = {
  name: 'test transaction',
  description: 'test',
};

function IntroductionTransaction({ id }: { id: string | number }) {
  const copyBtn = (
    <ClipboardDocumentIcon
      height={20}
      style={{
        cursor: 'pointer',
        userSelect: 'none',
      }}
      onClick={() => {
        copyToClipboard(id.toString());
      }}
    />
  );

  return (
    <Box bgcolor="white" border={1} borderColor="#e0e0e0" borderRadius={2} padding={3}>
      <Stack direction="column" justifyContent="start" alignItems="start" spacing="12px">
        <Typography fontSize={24} color="rgb(0, 29, 66)" fontWeight={600}>
          {DATA_MOCK.name}
        </Typography>
        <Stack direction="row" alignItems="start" width="100%" justifyContent="start" spacing={1}>
          <Typography>Transaction #{id}</Typography>
          {copyBtn}
        </Stack>
        <Typography>
          <Typography
            color="blue"
            marginRight="4px"
            component="a"
            sx={{
              '&:hover': {
                cursor: 'pointer',
                textDecoration: 'underline',
              },
            }}
          >
            {DATA_MOCK.email}
          </Typography>
          is buying a
          <Typography component="span" fontWeight={600} mx="4px">
            domain name
          </Typography>
          from
          <Typography
            mx="4px"
            color="blue"
            component="a"
            sx={{
              '&:hover': {
                cursor: 'pointer',
                textDecoration: 'underline',
              },
            }}
          >
            {DATA_MOCK.emailDomain}.
          </Typography>
          The inspection period for this transaction is 1 calendar day.
        </Typography>
        <Chip
          label="● Awaiting Agreement"
          style={{
            backgroundColor: '#fff1a8',
            display: 'flex',
            justifyContent: 'end',
            padding: 12,
            fontWeight: 'bold',
            marginBottom: '24px',
          }}
        />
        <Stepper
          sx={{
            width: '100%',
          }}
          activeStep={0}
          alternativeLabel
        >
          {DEFINE_STEPS.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Box marginTop="36px !important" border={1} borderColor="#225cab" padding={3} width="100%" borderRadius={1}>
          <Stack direction="column" justifyContent="start" alignItems="start">
            <Typography component="p" color="#225cab" fontSize={16} fontWeight={600}>
              Waiting for the seller to review and agree to the transaction
            </Typography>
            <Typography component="p" color="#444444" fontSize={14} marginTop={1}>
              Waiting for the seller to review and agree to the transaction
            </Typography>
            <Typography component="p" fontWeight={600} fontSize={14} marginTop={2}>
              No action is required from you for now.
            </Typography>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}

function TransactionDetailItem() {
  return (
    <Box bgcolor="white" border={1} borderColor="#e0e0e0" borderRadius={2} padding={3}>
      <Stack direction="column" justifyContent="start" alignItems="start" spacing="12px">
        <Stack direction="row" justifyContent="start" alignItems="start" spacing={1}>
          <DocumentTextIcon height={20} color="#225cab" />
          <Typography fontSize={16} color="#225cab" fontWeight={600}>
            Item details
          </Typography>
        </Stack>
        <Stack direction="row" width="100%" justifyContent="space-between" justifyItems="start">
          <Stack direction="column" justifyContent="start" alignItems="start">
            <Typography fontSize={14} fontWeight={600}>
              {ITEM_DETAIL.name}
            </Typography>
            <Typography fontSize={14} color="#444444">
              {ITEM_DETAIL.description}
            </Typography>
          </Stack>
          <Typography fontSize={14}>$12.00</Typography>
        </Stack>
        <Stack direction="row" width="100%" justifyContent="space-between" justifyItems="start">
          <Typography fontSize={14} color="#444444">
            Subtotal
          </Typography>
          <Typography fontSize={14}>$12.00</Typography>
        </Stack>
        <Stack direction="row" width="100%" justifyContent="space-between" justifyItems="start">
          <Typography fontSize={14} color="#444444">
            Escrow fee
          </Typography>
          <Typography fontSize={14}>$50.00</Typography>
        </Stack>
        <Stack direction="row" width="100%" justifyContent="space-between" justifyItems="start">
          <Typography fontSize={14} fontWeight={600} color="#444444">
            Total (USD)
          </Typography>
          <Typography fontSize={14} fontWeight={600}>
            $62.00
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}

function TransactionDetailPaymentProcess() {
  return (
    <Box bgcolor="white" border={1} borderColor="#e0e0e0" borderRadius={2} padding={3}>
      <Stack direction="column" justifyContent="start" alignItems="start" spacing="12px">
        <Stack direction="row" justifyContent="start" alignItems="start" spacing={1}>
          <TagIcon height={20} color="#225cab" />
          <Typography fontSize={16} color="#225cab" fontWeight={600}>
            Payment processing fees
          </Typography>
        </Stack>
        <Typography fontSize={14} color="#444444">
          Depending on the payment method you will use, there may be additional processing fees as outlined below.
        </Typography>
        <Stack direction="row" width="100%" justifyContent="space-between" justifyItems="start">
          <Typography fontSize={14} color="#444444">
            International wire transfer
          </Typography>
          <Typography fontSize={14}>+ $25.00</Typography>
        </Stack>
      </Stack>
    </Box>
  );
}

export default function TransactionDetailPageView({ id }: IProps) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <Stack spacing={2} direction="column">
          <IntroductionTransaction id={id} />
          <TransactionDetailItem />
          <TransactionDetailPaymentProcess />
          <Button variant='text' color='error'>
            Cancel transaction
          </Button>
        </Stack>
      </Grid>
      <Grid item xs={4}>
        <TransactionDetailHistory />
      </Grid>
    </Grid>
  );
}
