import { Box, Chip, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import dayjs from 'dayjs';
import * as React from 'react'
import TransactionFilter from '../_components/transaction-filter';

const rows = [
  {
    id: 13070433,
    transactionTitle: {
      name: 'test transaction title',
      subScription: 'Domain Name',
    },
    created: dayjs().format('MMM D, YYYY'),
    amount: {
      value: 62,
      unit: 'USD',
    },
    role: 'Buyer',
    status: (
      <Stack direction="column" justifyContent="start" alignItems="end" spacing={1}>
        <Chip label="● Awaiting Agreement" style={{backgroundColor: '#fff1a8', display: "flex", justifyContent: "end", padding: 12}}/>
        <Chip label="● Requires Seller's Action" style={{backgroundColor: '#ebebeb', display: "flex", justifyContent: "end", padding: 12}}/>
      </Stack>
    ),
  },
];

export default function OpenTab() {
  return (
    <Box bgcolor="white" borderRadius="8px" width="100%" boxShadow={12}>
      <TransactionFilter
        numberTransactions={1}
        onChange={(text: string | undefined) => {
          console.log(text);
        }}
        onApplyFilter={({ transactionType, price, roles }) => {
          console.log('🚀 ~ AllTab ~ { transactionType, price, roles, }:', { transactionType, price, roles });
        }}
      />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead
            sx={{
              backgroundColor: '#f4f2ff',
            }}
          >
            <TableRow
              sx={{
                height: '60px',
              }}
            >
              <TableCell sx={{ width: '120px' }}>ID</TableCell>
              <TableCell sx={{ minWidth: '280px' }} align="left">TRANSACTION TYPE</TableCell>
              <TableCell align="left">CREATED</TableCell>
              <TableCell align="left">AMOUNT</TableCell>
              <TableCell align="left">ROLE</TableCell>
              <TableCell align="right">
                STATUS
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0} }}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="left">
                  <Stack direction="column">
                    <Typography fontWeight={600} fontSize={14}>
                      {row.transactionTitle.name}
                    </Typography>
                    <Typography fontWeight={400} fontSize={12}>
                      {row.transactionTitle.subScription}
                    </Typography>
                  </Stack>
                </TableCell>
                <TableCell sx={{fontWeight: "600"}} align="left">{row.created}</TableCell>
                <TableCell align="left">
                  <Stack>
                    <Typography fontWeight={600} fontSize={14}>$ {row.amount.value}</Typography>
                    <Typography fontWeight={400} fontSize={12}>{row.amount.unit}</Typography>
                  </Stack>
                </TableCell>
                <TableCell sx={{fontWeight: "600"}} align="left">{row.role}</TableCell>
                <TableCell align="left">{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
