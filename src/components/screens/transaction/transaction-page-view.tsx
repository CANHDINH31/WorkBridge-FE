'use client';

import {
  Autocomplete,
  Box,
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Paper,
  Select,
  Switch,
  TextField,
  Typography,
} from '@mui/material';

interface Props {}

function TransactionPageView(props: Props) {
  return (
    <Box width="100%">
      <Paper elevation={3}>
        <Box py={5} px={10}>
          <Typography fontSize={24} fontWeight={500} color="#01426a" lineHeight={1.33}>
            Start Transaction
          </Typography>
          <Box py={2} width="100%">
            <Divider
              sx={{
                bgcolor: '#08f',
              }}
            />
          </Box>
          <Box>
            <TextField fullWidth label="Transaction title" />
            <Box mt={2} display="flex" gap={2}>
              <FormControl fullWidth>
                <InputLabel id="role">Role</InputLabel>
                <Select labelId="role" id="role" label="Role">
                  <MenuItem value={10}>Buyer</MenuItem>
                  <MenuItem value={20}>Seller</MenuItem>
                  <MenuItem value={30}>Broker</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel id="currency">Currency</InputLabel>
                <Select labelId="currency" id="currency" label="Currency">
                  <MenuItem value={10}>USD</MenuItem>
                  <MenuItem value={20}>VND</MenuItem>
                </Select>
              </FormControl>
              <TextField fullWidth label="Inspection period (days)" type="number" />
            </Box>
            <Box mt={6}>
              <Typography fontSize={18} fontWeight={500} color="#4f5759">
                Transaction details
              </Typography>
              <Box mt={2} display="flex" gap={2}>
                <TextField label="Item name" fullWidth />
                <FormControl fullWidth>
                  <InputLabel htmlFor="outlined-adornment-amount">Price (USD)</InputLabel>
                  <OutlinedInput
                    label="Price (USD)"
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    fullWidth
                  />
                </FormControl>
              </Box>
              <Box mt={2}>
                <Autocomplete
                  options={[
                    { label: 'The Shawshank Redemption', year: 1994 },
                    { label: 'The Godfather', year: 1972 },
                  ]}
                  fullWidth
                  renderInput={(params) => <TextField {...params} label="Item Category" />}
                />
              </Box>
              <Box mt={2}>
                <FormControlLabel control={<Switch defaultChecked />} label="Set transaction items as milestones" />
              </Box>
              <Box mt={2} display="flex" gap={2}>
                <FormControl fullWidth>
                  <InputLabel id="shipping_method">Shipping method</InputLabel>
                  <Select labelId="shipping_method" id="shipping_method" label="Shipping method">
                    <MenuItem value={10}>Standard Shipping</MenuItem>
                    <MenuItem value={20}>Cargo Shipping</MenuItem>
                    <MenuItem value={20}>No Shipping</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel id="shipping_fee_paid_by">Shipping fee paid by</InputLabel>
                  <Select labelId="shipping_fee_paid_by" id="shipping_fee_paid_by" label="Shipping fee paid by">
                    <MenuItem value={10}>Buyer</MenuItem>
                    <MenuItem value={20}>Seller</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel htmlFor="outlined-adornment-amount">Price (USD)</InputLabel>
                  <OutlinedInput
                    label="Price (USD)"
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    fullWidth
                  />
                </FormControl>
              </Box>
              <Box mt={4} textAlign="end">
                <Button variant="contained">Add Item</Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}

export default TransactionPageView;
