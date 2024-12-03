'use client';

import { CURRENCY, DISCLOSURE, ITEM_CATEGORY, ROLE } from '@/utilities/contants';
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
import { Controller, useForm } from 'react-hook-form';

interface Props {}

function TransactionPageView(props: Props) {
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  const role = watch('role') ?? ROLE[0].value;

  const currency = watch('currency') ?? CURRENCY[0].value;

  const itemCategory = watch('item_category') ?? ITEM_CATEGORY[0];

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
                <Controller
                  name="role"
                  control={control}
                  defaultValue={ROLE[0].value}
                  rules={{ required: 'Role is required' }}
                  render={({ field }) => (
                    <Select labelId="role" id="role" label="Role" {...field} error={Boolean(errors.type)}>
                      {ROLE.map((r) => (
                        <MenuItem key={r.value} value={r.value}>
                          {r.label}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                />
              </FormControl>
              <FormControl fullWidth>
                <InputLabel id="currency">Currency</InputLabel>
                <Controller
                  name="currency"
                  control={control}
                  defaultValue={CURRENCY[0].value}
                  rules={{ required: 'Currency is required' }}
                  render={({ field }) => (
                    <Select labelId="currency" id="currency" label="Currency" {...field} error={Boolean(errors.type)}>
                      {CURRENCY.map((c) => (
                        <MenuItem key={c.value} value={c.value}>
                          {c.label}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                />
              </FormControl>
              {role !== ROLE[2].value && <TextField fullWidth label="Inspection period (days)" type="number" />}
            </Box>
            {role === ROLE[2].value && (
              <Box mt={2} display="flex" gap={2}>
                <TextField fullWidth label="Inspection period (days)" type="number" />
                <FormControl fullWidth>
                  <InputLabel id="currency">Transaction disclosure</InputLabel>
                  <Select labelId="currency" id="currency" label="Transaction disclosure">
                    {DISCLOSURE?.map((d) => (
                      <MenuItem key={d.value} value={d.value}>
                        {d.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            )}

            <Box mt={6}>
              <Typography fontSize={18} fontWeight={500} color="#4f5759">
                Transaction details
              </Typography>
              <Box mt={2} display="flex" gap={2}>
                <TextField label="Item name" fullWidth />
                <FormControl fullWidth>
                  <InputLabel htmlFor="outlined-adornment-amount">
                    Price ({currency === CURRENCY[0]?.value ? 'USD' : 'VND'})
                  </InputLabel>
                  <OutlinedInput
                    label="Price (USD)"
                    startAdornment={<InputAdornment position="start"> $</InputAdornment>}
                    fullWidth
                  />
                </FormControl>
              </Box>
              <Box mt={2}>
                <Controller
                  name="item_category"
                  control={control}
                  defaultValue={ITEM_CATEGORY[0]}
                  rules={{ required: 'Item category is required' }}
                  render={({ field, fieldState: { error } }) => (
                    <Autocomplete
                      {...field}
                      options={ITEM_CATEGORY}
                      getOptionLabel={(option) => option.label || ''}
                      isOptionEqualToValue={(option, value) => option.value === value?.value}
                      onChange={(_, data) => {
                        field.onChange(data);
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Item Category"
                          error={Boolean(error)}
                          helperText={error?.message}
                        />
                      )}
                    />
                  )}
                />
              </Box>
              {itemCategory !== ITEM_CATEGORY[0] && (
                <Box>
                  <Box mt={2} display="flex" gap={2}>
                    <TextField label="Make" fullWidth />
                    <TextField label="Model" fullWidth />
                  </Box>
                  <Box mt={2} display="flex" gap={2}>
                    <TextField label="Year" fullWidth />
                    <TextField label="Odometer" fullWidth />
                  </Box>
                  <Box mt={2}>
                    <TextField label="VIN" fullWidth />
                  </Box>
                </Box>
              )}

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
                  <FormControl fullWidth>
                    <InputLabel htmlFor="outlined-adornment-amount">
                      Price ({currency === CURRENCY[0]?.value ? 'USD' : 'VND'})
                    </InputLabel>
                    <OutlinedInput
                      label="Price (USD)"
                      startAdornment={<InputAdornment position="start"> $</InputAdornment>}
                      fullWidth
                    />
                  </FormControl>
                </FormControl>
              </Box>
              <Box mt={4} textAlign="center">
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
