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
import { Controller, useForm } from 'react-hook-form';

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
              <Box mt={4}>
                <TextField fullWidth size="medium" placeholder="Name" />
                <TextField fullWidth size="medium" placeholder="Email" sx={{ mt: 1 }} />
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
                />
                <TextField fullWidth size="medium" placeholder="Phone" sx={{ mt: 1 }} />
                <FormControl fullWidth sx={{ mt: 1 }}>
                  <InputLabel id="type">Type</InputLabel>
                  <Select
                    labelId="type"
                    id="type"
                    // value={age}
                    label="type"
                    // onChange={handleChange}
                  >
                    {type.map((t) => (
                      <MenuItem key={t.value} value={t.value}>
                        {t.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl sx={{ mt: 1 }}>
                  <RadioGroup row aria-labelledby="gender" name="gender">
                    {gender.map((g) => (
                      <FormControlLabel
                        key={g.value}
                        value={g.value}
                        control={<Radio size="small" />}
                        label={g.label}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              </Box>
              <Typography fontSize={12} mt={2}>
                Khi nhấp vào Đồng ý và tham gia hoặc Tiếp tục, bạn đồng ý với Thỏa thuận người dùng, Chính sách quyền
                riêng tư và Chính sách cookie của LinkedIn. Đồng ý và tham gia
              </Typography>
              <Box mt={2}>
                <Button variant="contained" fullWidth size="large" color="info">
                  Đăng kí
                </Button>
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
