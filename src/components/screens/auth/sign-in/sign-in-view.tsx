import * as React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { EyeIcon } from '@heroicons/react/24/outline';
import { Box, Button, Divider, InputAdornment, Paper, Stack, TextField, Typography } from '@mui/material';

import { config } from '@/config';
import { paths } from '@/paths';
import { AuthLayout } from '@/components/layout/auth/auth-layout';

export const metadata = { title: `Sign In | ${config.site.name}` } satisfies Metadata;

export default function SignInView(): React.JSX.Element {
  return (
    <AuthLayout>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Stack>
          <Paper elevation={3}>
            <Box padding={3} width="350px">
              <Typography fontSize={32} fontWeight={600}>
                Đăng nhập
              </Typography>
              <Typography fontSize={12}>Luôn cập nhật về thế giới nghề nghiệp của bạn.</Typography>
              <Box mt={4}>
                <TextField fullWidth size="medium" placeholder="Email" />
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
              </Box>
              <Typography mt={2} color="#0073b1" fontSize={14} fontWeight={600}>
                Quên mật khẩu ?
              </Typography>
              <Box mt={2}>
                <Button variant="contained" fullWidth size="large" color="info">
                  Đăng nhập
                </Button>
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
                <Button fullWidth variant="contained" size="large" color="error">
                  Đăng nhập với Google
                </Button>
                <Button fullWidth variant="contained" size="large" sx={{ mt: 1 }}>
                  Đăng nhập với Facebook
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
