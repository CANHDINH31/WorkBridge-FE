'use client';

import { CURRENCY, DISCLOSURE, ROLE } from '@/utilities/contants';
import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { Control, Controller, FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

interface Props {
  control: Control<FieldValues, any>;
  role: string;
  errors: FieldErrors<FieldValues>;
  register: UseFormRegister<FieldValues>;
}

export default function TransactionHead({ control, role, errors, register }: Props) {
  return (
    <Box>
      <TextField
        fullWidth
        label="Transaction title"
        {...register('title', { required: 'Title is required' })}
        error={Boolean(errors.title)}
        helperText={errors?.title?.message?.toString()}
      />
      <Box mt={2} display="flex" gap={2}>
        <FormControl fullWidth>
          <InputLabel id="role">Role</InputLabel>
          <Controller
            name="role"
            control={control}
            defaultValue={ROLE[0].value}
            rules={{ required: 'Role is required' }}
            render={({ field }) => (
              <Select labelId="role" id="role" label="Role" {...field} error={Boolean(errors.role)}>
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
              <Select labelId="currency" id="currency" label="Currency" {...field} error={Boolean(errors.currency)}>
                {CURRENCY.map((c) => (
                  <MenuItem key={c.value} value={c.value}>
                    {c.label}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
        </FormControl>
        {role !== ROLE[2].value && (
          <TextField
            fullWidth
            label="Inspection period (days)"
            type="number"
            {...register('inspection_period', { required: 'Inspection period is required' })}
            error={Boolean(errors.inspection_period)}
            helperText={errors?.inspection_period?.message?.toString()}
          />
        )}
      </Box>
      {role === ROLE[2].value && (
        <Box mt={2} display="flex" gap={2}>
          <TextField
            fullWidth
            label="Inspection period (days)"
            type="number"
            {...register('inspection_period', { required: 'Inspection period is required' })}
            error={Boolean(errors.inspection_period)}
            helperText={errors?.inspection_period?.message?.toString()}
          />
          <FormControl fullWidth>
            <InputLabel id="currency">Transaction disclosure</InputLabel>

            <Controller
              name="disclosure"
              control={control}
              defaultValue={DISCLOSURE[0].value}
              rules={{ required: 'Disclosure is required' }}
              render={({ field }) => (
                <Select
                  labelId="disclosure"
                  id="disclosure"
                  label="Transaction disclosure"
                  {...field}
                  error={Boolean(errors.disclosure)}
                >
                  {DISCLOSURE?.map((d) => (
                    <MenuItem key={d.value} value={d.value}>
                      {d.label}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
          </FormControl>
        </Box>
      )}
    </Box>
  );
}
