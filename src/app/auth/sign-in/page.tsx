import * as React from 'react';
import type { Metadata } from 'next';
import { EyeIcon } from '@heroicons/react/24/outline';
import { Box, Button, Divider, InputAdornment, Paper, TextField, Typography } from '@mui/material';

import { config } from '@/config';
import { AuthLayout } from '@/components/layout/auth/auth-layout';

export const metadata = { title: `Sign In | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
  return (
    <AuthLayout>
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Paper elevation={3}>
          <Box padding={3} width="350px">
            <Typography fontSize={32} fontWeight={600}>
              Đăng nhập
            </Typography>
            <Typography fontSize={12}>Luôn cập nhật về thế giới nghề nghiệp của bạn.</Typography>
            <Box mt={4}>
              <TextField fullWidth size="medium" placeholder="Email or phone" />
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
              cookie của LinkedIn.
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
      </Box>
    </AuthLayout>
  );
}
