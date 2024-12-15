'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { Box, Button, Paper, Stack, TextField, Typography } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { FieldValues, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { paths } from '@/paths';
import { authService } from '@/lib/api';
import { AuthLayout } from '@/components/layout/auth/auth-layout';

export default function ForgotPasswordView(): React.JSX.Element {
  const router = useRouter();

  const { mutate, isPending } = useMutation({
    mutationFn: authService.forgotPassword,
    onSuccess: async (res) => {
<<<<<<< HEAD
      console.log(res);
=======
>>>>>>> a5decaeef4503245b7a1d9d59cbf7543df2a4a83
      toast.success(res.message);
      reset();
      router.push(paths.auth.signIn);
    },
<<<<<<< HEAD
    onError: (err: any) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      toast.error(err.response.data.message);
      reset();
=======
    onError: (err) => {
      // @ts-ignore
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      toast.error(err?.response?.data?.message);
>>>>>>> a5decaeef4503245b7a1d9d59cbf7543df2a4a83
    },
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data: FieldValues) => {
<<<<<<< HEAD
    mutate(data as { email: string });
=======
    mutate(data.email as string);
>>>>>>> a5decaeef4503245b7a1d9d59cbf7543df2a4a83
  };

  return (
    <AuthLayout>
      <Box display="flex" justifyContent="center" alignItems="center" minHeight={'70vh'}>
        <Stack>
          <Paper elevation={3}>
            <Box padding={3} width="350px">
              <Box component="form" onSubmit={handleSubmit(onSubmit)}>
                <Typography fontSize={32} fontWeight={600}>
                  Quên mật khẩu
                </Typography>
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
                </Box>
                <Typography fontSize={12} mt={2}>
                  Chúng tôi sẽ gửi mã xác minh tới email này nếu nó khớp với tài khoản Workbridge hiện có.
                </Typography>
                <Box mt={2}>
                  <Button variant="contained" fullWidth size="large" color="info" type="submit" disabled={isPending}>
<<<<<<< HEAD
                    Tiếp theo
=======
                    Quên mật khẩu
>>>>>>> a5decaeef4503245b7a1d9d59cbf7543df2a4a83
                  </Button>
                  <Button href={paths.auth.signIn} fullWidth color="info" sx={{ marginTop: 1 }}>
                    Trở lại
                  </Button>
                </Box>
              </Box>
            </Box>
          </Paper>
        </Stack>
      </Box>
    </AuthLayout>
  );
}
