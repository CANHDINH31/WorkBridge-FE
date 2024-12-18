import * as React from 'react';
import { Box, Paper, Stack, Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

import NoThingComponent from '../_components/nothing-component';
import TransactionFilter from '../_components/transaction-filter';

export default function ActionRequiredTab() {
  return (
    <Stack direction="column" justifyContent="start" alignItems="center" spacing={5}>
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
                <TableCell sx={{ minWidth: '280px' }} align="left">
                  TRANSACTION TYPE
                </TableCell>
                <TableCell align="left">CREATED</TableCell>
                <TableCell align="left">AMOUNT</TableCell>
                <TableCell align="left">ROLE</TableCell>
                <TableCell align="right">STATUS</TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
      </Box>
      <NoThingComponent />
    </Stack>
  );
}
