'use client';

import * as React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { gender, type } from '@/utilities/contants';
import { EyeIcon } from '@heroicons/react/24/outline';
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  InputAdornment,
  InputLabel,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { Controller, FieldValues, useForm } from 'react-hook-form';

import { config } from '@/config';
import { paths } from '@/paths';
import { AuthLayout } from '@/components/layout/auth/auth-layout';

export const metadata = { title: `Sign Up | ${config.site.name}` } satisfies Metadata;

export default function SignUpView(): React.JSX.Element {
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <AuthLayout>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Stack>
          <Paper elevation={3}>
            <Box padding={3} width="350px">
              <Typography fontSize={32} fontWeight={600}>
                Đăng kí
              </Typography>
              <Typography fontSize={12}>Tận dụng tối đa cuộc sống nghề nghiệp của bạn.</Typography>
              <Box mt={4} component="form" onSubmit={handleSubmit(onSubmit)}>
                <Box>
                  <TextField
                    fullWidth
                    size="medium"
                    placeholder="Name"
                    {...register('name', { required: 'Name is required' })}
                    error={Boolean(errors.name)}
                    helperText={errors?.name?.message?.toString()}
                  />

                  <TextField
                    fullWidth
                    size="medium"
                    placeholder="Email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Invalid email address',
                      },
                    })}
                    error={Boolean(errors.email)}
                    helperText={errors?.email?.message?.toString()}
                    sx={{ mt: 1 }}
                  />

                  <TextField
                    fullWidth
                    size="medium"
                    placeholder="Password"
                    type="password"
                    sx={{ mt: 2 }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <EyeIcon height={18} />
                        </InputAdornment>
                      ),
                    }}
                    {...register('password', {
                      required: 'Password is required',
                      minLength: {
                        value: 6,
                        message: 'Password must be at least 6 characters',
                      },
                    })}
                    error={Boolean(errors.password)}
                    helperText={errors?.password?.message?.toString()}
                  />

                  <TextField
                    fullWidth
                    size="medium"
                    placeholder="Phone"
                    {...register('phone', {
                      required: 'Phone number is required',
                      pattern: {
                        value: /^\d{10}$/,
                        message: 'Phone number must be 10 digits',
                      },
                    })}
                    error={Boolean(errors.phone)}
                    helperText={errors?.phone?.message?.toString()}
                    sx={{ mt: 1 }}
                  />

                  <FormControl fullWidth sx={{ mt: 1 }}>
                    <InputLabel id="type">Type</InputLabel>
                    <Controller
                      name="type"
                      control={control}
                      defaultValue={type[0].value}
                      rules={{ required: 'Type is required' }}
                      render={({ field }) => (
                        <Select labelId="type" id="type" label="Type" {...field} error={Boolean(errors.type)}>
                          {type.map((t) => (
                            <MenuItem key={t.value} value={t.value}>
                              {t.label}
                            </MenuItem>
                          ))}
                        </Select>
                      )}
                    />
                  </FormControl>

                  <FormControl sx={{ mt: 1 }}>
                    <Controller
                      name="gender"
                      control={control}
                      defaultValue={gender[0].value}
                      rules={{ required: 'Gender is required' }}
                      render={({ field }) => (
                        <RadioGroup row {...field} aria-labelledby="gender">
                          {gender.map((g) => (
                            <FormControlLabel
                              key={g.value}
                              value={g.value}
                              control={<Radio size="small" />}
                              label={g.label}
                            />
                          ))}
                        </RadioGroup>
                      )}
                    />
                  </FormControl>
                </Box>

                <Typography fontSize={12} mt={2}>
                  Khi nhấp vào Đồng ý và tham gia hoặc Tiếp tục, bạn đồng ý với Thỏa thuận người dùng, Chính sách quyền
                  riêng tư và Chính sách cookie của LinkedIn. Đồng ý và tham gia
                </Typography>
                <Box mt={2}>
                  <Button variant="contained" fullWidth size="large" color="info" type="submit">
                    Đăng kí
                  </Button>
                </Box>
              </Box>

              <Box mt={2} display="flex" justifyContent="center" gap={1}>
                <Typography fontSize={14}>Bạn chưa có tài khoản?</Typography>
                <Link href={paths.auth.signIn}>
                  <Typography fontSize={14} fontWeight={600} color="primary" sx={{ textDecoration: 'none' }}>
                    Đăng nhập
                  </Typography>
                </Link>
              </Box>
            </Box>
          </Paper>
        </Stack>
      </Box>
    </AuthLayout>
  );
}
