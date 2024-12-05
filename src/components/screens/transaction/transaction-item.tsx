'use client';

import {
  CURRENCY,
  ITEM_CATEGORY,
  ITEM_CATEGORY_TYPE_2,
  ITEM_CATEGORY_TYPE_3,
  ItemCategory,
  SHIPPING_METHOD,
  SHIPPING_PAID_BY,
} from '@/utilities/contants';
import {
  Autocomplete,
  Box,
  FormControl,
  FormControlLabel,
  FormHelperText,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Switch,
  TextField,
} from '@mui/material';
import { Control, Controller, FieldErrors, FieldValues, UseFormRegister, UseFormWatch } from 'react-hook-form';

interface Props {
  watch: UseFormWatch<FieldValues>;
  control: Control<FieldValues, any>;
  errors: FieldErrors<FieldValues>;
  register: UseFormRegister<FieldValues>;
}

export default function TransactionItem({ watch, control, errors, register }: Props) {
  const currency = watch('currency') ?? CURRENCY[0].value;
  const category: ItemCategory = watch('category') ?? ITEM_CATEGORY[0];
  const shippingMethod = watch('shipping_method') ?? SHIPPING_METHOD[0]?.value;
  const shippingFeePaidBy = watch('shipping_fee_paid_by') ?? SHIPPING_PAID_BY[0]?.value;
  const milestones = watch('milestones') ?? false;

  const showCategoryType2 = ITEM_CATEGORY_TYPE_2.map((item) => item.value).includes(category.value);
  const showCategoryType3 = ITEM_CATEGORY_TYPE_3.map((item) => item.value).includes(category.value);
  return (
    <>
      <Box display="flex" gap={2}>
        <TextField
          label="Item name"
          fullWidth
          {...register('name', { required: 'Name is required' })}
          error={Boolean(errors.name)}
          helperText={errors?.name?.message?.toString()}
        />
        <FormControl fullWidth>
          <InputLabel htmlFor="outlined-adornment-amount">
            Price ({currency === CURRENCY[0]?.value ? 'USD' : 'VND'})
          </InputLabel>
          <OutlinedInput
            label="Price (USD)"
            startAdornment={<InputAdornment position="start"> $</InputAdornment>}
            {...register('price', { required: 'Price is required' })}
            error={Boolean(errors.price)}
          />
          {errors.price ? <FormHelperText error>{errors?.price?.message?.toString()}</FormHelperText> : null}
        </FormControl>
      </Box>
      <Box mt={2}>
        <Controller
          name="category"
          control={control}
          defaultValue={ITEM_CATEGORY[0]}
          rules={{ required: 'Category is required' }}
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
                <TextField {...params} label="Item Category" error={Boolean(error)} helperText={error?.message} />
              )}
            />
          )}
        />
      </Box>

      <Box mt={2}>
        <TextField
          fullWidth
          label="Item description"
          multiline
          rows={3}
          {...register('description', { required: 'Description is required' })}
          error={Boolean(errors.description)}
          helperText={errors?.description?.message?.toString()}
        />
      </Box>

      {showCategoryType2 ? (
        <Box>
          <Box mt={2} display="flex" gap={2}>
            <TextField
              label="Make"
              fullWidth
              {...register('make', { required: 'Make is required' })}
              error={Boolean(errors.make)}
              helperText={errors?.make?.message?.toString()}
            />
            <TextField
              label="Model"
              fullWidth
              {...register('model', { required: 'Model is required' })}
              error={Boolean(errors.model)}
              helperText={errors?.model?.message?.toString()}
            />
          </Box>
          <Box mt={2} display="flex" gap={2}>
            <TextField
              label="Year"
              fullWidth
              type="number"
              {...register('year', { required: 'Year is required' })}
              error={Boolean(errors.year)}
              helperText={errors?.year?.message?.toString()}
            />
            <TextField
              label="Odometer"
              fullWidth
              {...register('odometerear', { required: 'Odometer is required' })}
              error={Boolean(errors.odometerear)}
              helperText={errors?.odometerear?.message?.toString()}
            />
          </Box>
          <Box mt={2}>
            <TextField
              label="VIN"
              fullWidth
              {...register('vin', { required: 'VIN is required' })}
              error={Boolean(errors.vin)}
              helperText={errors?.vin?.message?.toString()}
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
                    error={Boolean(errors.shipping_method)}
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
            {shippingMethod !== SHIPPING_METHOD[2].value && (
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
                        {...register('fee_price', { required: 'Price is required' })}
                        error={Boolean(errors.fee_price)}
                      />
                      {errors.fee_price ? (
                        <FormHelperText error>{errors?.fee_price?.message?.toString()}</FormHelperText>
                      ) : null}
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
                    error={Boolean(errors.shipping_method)}
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
                        {...register('fee_price', { required: 'Price is required' })}
                        error={Boolean(errors.fee_price)}
                      />
                      {errors.fee_price ? (
                        <FormHelperText error>{errors?.fee_price?.message?.toString()}</FormHelperText>
                      ) : null}
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
          <TextField
            label="Item inspection period (days)"
            fullWidth
            type="number"
            {...register('item_inspection_period', { required: 'Item inspection period is required' })}
            error={Boolean(errors.item_inspection_period)}
            helperText={errors?.item_inspection_period?.message?.toString()}
          />
        </Box>
      ) : null}
    </>
  );
}
