'use client';

import {
  CURRENCY,
  DISCLOSURE,
  ITEM_CATEGORY,
  ITEM_CATEGORY_TYPE_1,
  ITEM_CATEGORY_TYPE_2,
  ITEM_CATEGORY_TYPE_3,
  ItemCategory,
  ROLE,
  SHIPPING_METHOD,
  SHIPPING_PAID_BY,
} from '@/utilities/contants';
import { DocumentArrowDownIcon } from '@heroicons/react/24/outline';
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
  const itemCategory: ItemCategory = watch('item_category') ?? ITEM_CATEGORY[0];
  const shippingMethod = watch('shipping_method') ?? SHIPPING_METHOD[0]?.value;
  const shippingFeePaidBy = watch('shipping_fee_paid_by') ?? SHIPPING_PAID_BY[0]?.value;
  const milestones = watch('milestones') ?? false;

  const showCategoryType1 = ITEM_CATEGORY_TYPE_1.map((item) => item.value).includes(itemCategory.value);
  const showCategoryType2 = ITEM_CATEGORY_TYPE_2.map((item) => item.value).includes(itemCategory.value);
  const showCategoryType3 = ITEM_CATEGORY_TYPE_3.map((item) => item.value).includes(itemCategory.value);

  console.log(milestones);

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

              <Box mt={2}>
                <TextField fullWidth label="Item description" multiline rows={3} />
              </Box>

              {showCategoryType2 ? (
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
                  <Box mt={2} display="flex" gap={2}>
                    <FormControl fullWidth>
                      <InputLabel id="shipping_method">Shipping Method</InputLabel>
                      <Controller
                        name="shipping_method"
                        control={control}
                        defaultValue={SHIPPING_METHOD[0].value}
                        rules={{ required: 'Shipping method is required' }}
                        render={({ field }) => (
                          <Select
                            labelId="shipping_method"
                            id="shipping_method"
                            label="Shipping method"
                            {...field}
                            error={Boolean(errors.type)}
                          >
                            {SHIPPING_METHOD.map((s) => (
                              <MenuItem key={s.value} value={s.value}>
                                {s.label}
                              </MenuItem>
                            ))}
                          </Select>
                        )}
                      />
                    </FormControl>
                    {shippingMethod !== SHIPPING_METHOD[1].value && (
                      <>
                        <FormControl fullWidth>
                          <InputLabel id="shipping_fee_paid_by">Shipping fee paid by</InputLabel>
                          <Controller
                            name="shipping_fee_paid_by"
                            control={control}
                            defaultValue={SHIPPING_PAID_BY[0].value}
                            render={({ field }) => (
                              <Select
                                labelId="shipping_fee_paid_by"
                                id="shipping_fee_paid_by"
                                label="Shipping fee paid by"
                                {...field}
                                error={Boolean(errors.type)}
                              >
                                {SHIPPING_PAID_BY.map((s) => (
                                  <MenuItem key={s.value} value={s.value}>
                                    {s.label}
                                  </MenuItem>
                                ))}
                              </Select>
                            )}
                          />
                        </FormControl>
                        {shippingFeePaidBy === SHIPPING_PAID_BY[0]?.value && (
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
                        )}
                      </>
                    )}
                  </Box>
                </Box>
              ) : null}

              {showCategoryType3 ? (
                <>
                  <Box mt={2}>
                    <Controller
                      name="milestones"
                      control={control}
                      defaultValue={false}
                      render={({ field }) => (
                        <FormControlLabel
                          control={<Switch {...field} checked={field.value} />}
                          label="Set transaction items as milestones"
                        />
                      )}
                    />
                  </Box>
                  <Box mt={2} display="flex" gap={2}>
                    <FormControl fullWidth>
                      <InputLabel id="shipping_method">Shipping Method</InputLabel>
                      <Controller
                        name="shipping_method"
                        control={control}
                        defaultValue={SHIPPING_METHOD[0].value}
                        rules={{ required: 'Shipping method is required' }}
                        render={({ field }) => (
                          <Select
                            labelId="shipping_method"
                            id="shipping_method"
                            label="Shipping method"
                            {...field}
                            error={Boolean(errors.type)}
                          >
                            {SHIPPING_METHOD.map((s) => (
                              <MenuItem key={s.value} value={s.value}>
                                {s.label}
                              </MenuItem>
                            ))}
                          </Select>
                        )}
                      />
                    </FormControl>
                    {shippingMethod !== SHIPPING_METHOD[1].value && (
                      <>
                        <FormControl fullWidth>
                          <InputLabel id="shipping_fee_paid_by">Shipping fee paid by</InputLabel>
                          <Controller
                            name="shipping_fee_paid_by"
                            control={control}
                            defaultValue={SHIPPING_PAID_BY[0].value}
                            render={({ field }) => (
                              <Select
                                labelId="shipping_fee_paid_by"
                                id="shipping_fee_paid_by"
                                label="Shipping fee paid by"
                                {...field}
                                error={Boolean(errors.type)}
                              >
                                {SHIPPING_PAID_BY.map((s) => (
                                  <MenuItem key={s.value} value={s.value}>
                                    {s.label}
                                  </MenuItem>
                                ))}
                              </Select>
                            )}
                          />
                        </FormControl>
                        {shippingFeePaidBy === SHIPPING_PAID_BY[0]?.value && (
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
                        )}
                      </>
                    )}
                  </Box>
                </>
              ) : null}
              {milestones ? (
                <Box mt={2}>
                  <TextField label="Item inspection period (days)" fullWidth />
                </Box>
              ) : null}

              <Box mt={4} display="flex" justifyContent="flex-end" gap={2}>
                {showCategoryType1 ? (
                  <>
                    <Button color="success" size="large">
                      Download csv template
                    </Button>
                    <Button
                      color="success"
                      size="large"
                      variant="outlined"
                      endIcon={<DocumentArrowDownIcon height={24} />}
                    >
                      Bulk upload by csv
                    </Button>
                  </>
                ) : null}

                <Button variant="contained" size="large">
                  Add Item
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}

export default TransactionPageView;
