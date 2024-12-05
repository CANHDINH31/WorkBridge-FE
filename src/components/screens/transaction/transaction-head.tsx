'use client';

import { CURRENCY, DISCLOSURE, ROLE } from '@/utilities/contants';
import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { Control, Controller, FieldErrors, FieldValues } from 'react-hook-form';

interface Props {
  control: Control<FieldValues, any>;
  role: string;
  errors: FieldErrors<FieldValues>;
}

export default function TransactionHead({ control, role, errors }: Props) {
  return (
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
    </Box>
  );
}
