'use client';

import * as React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { Box, Button, Divider, InputAdornment, Paper, Stack, TextField, Typography } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { signIn } from 'next-auth/react';
import { FieldValues, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { ISignInParams } from '@/types';
import { config } from '@/config';
import { paths } from '@/paths';
import { authService } from '@/lib/api';
import { AuthLayout } from '@/components/layout/auth/auth-layout';

export const metadata = { title: `Sign In | ${config.site.name}` } satisfies Metadata;

export default function SignInView(): React.JSX.Element {
  const router = useRouter();
  const [isHidePw, setIsHidePw] = React.useState<boolean>(true);

  const { mutate, isPending } = useMutation({
    mutationFn: authService.signIn,
    onSuccess: async (res) => {
      const decoded = await authService.verifyToken(res.data.token);
      await signIn('credentials', { data: JSON.stringify(decoded?.data), redirect: false });
      await authService.setCookiesByNextServer(res.data.token);
      toast.success(res.message);
      reset();
      router.push('/');
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data: FieldValues) => {
    mutate(data as ISignInParams);
  };

  const hanldeLoginGoogle = async () => {
    await signIn('google', { redirect: false });
  };

  return (
    <AuthLayout>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Stack>
          <Paper elevation={3}>
            <Box padding={3} width="350px">
              <Box component="form" onSubmit={handleSubmit(onSubmit)}>
                <Typography fontSize={32} fontWeight={600}>
                  Đăng nhập
                </Typography>
                <Typography fontSize={12}>Luôn cập nhật về thế giới nghề nghiệp của bạn.</Typography>
                <Box mt={4}>
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
                  />
                  <TextField
                    fullWidth
                    size="medium"
                    placeholder="Password"
                    type={isHidePw ? 'password' : 'text'}
                    sx={{ mt: 2 }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Box
                            onClick={() => {
                              setIsHidePw(!isHidePw);
                            }}
                            sx={{ cursor: 'pointer' }}
                          >
                            {isHidePw ? <EyeSlashIcon height={18} /> : <EyeIcon height={18} />}
                          </Box>
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
                  />
                </Box>
                <Button
                  sx={{ marginTop: 1, fontSize: 14, fontWeight: 600 }}
                  color="info"
                  href={paths.auth.forgotPassword}
                >
                  Quên mật khẩu ?
                </Button>
                <Box mt={2}>
                  <Button variant="contained" fullWidth size="large" color="info" type="submit" disabled={isPending}>
                    Đăng nhập
                  </Button>
                </Box>
              </Box>

              <Box mt={2} />
              <Divider>
                <Typography fontSize={14} color="#666">
                  hoặc
                </Typography>
              </Divider>
              <Typography fontSize={12} mt={2}>
                Khi nhấp vào Tiếp tục, bạn đồng ý với Thỏa thuận người dùng, Chính sách quyền riêng tư và Chính sách
                cookie của WorkBridge.
              </Typography>
              <Box mt={2}>
                <Button
                  fullWidth
                  variant="outlined"
                  size="large"
                  color="error"
                  startIcon={<Box component="img" src="/images/google.png" />}
                  onClick={hanldeLoginGoogle}
                >
                  Đăng nhập với Google
                </Button>
              </Box>
            </Box>
          </Paper>
          <Box mt={2} display="flex" justifyContent="center" gap={1}>
            <Typography fontSize={14}>Bạn chưa có tài khoản?</Typography>
            <Link href={paths.auth.signUp}>
              <Typography fontSize={14} fontWeight={600} color="primary" sx={{ textDecoration: 'none' }}>
                Tham gia
              </Typography>
            </Link>
          </Box>
        </Stack>
      </Box>
    </AuthLayout>
  );
}
