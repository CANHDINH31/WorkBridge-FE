import * as React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { EyeIcon } from '@heroicons/react/24/outline';
import { DatePicker } from '@mui/lab';
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
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

import { config } from '@/config';
import { paths } from '@/paths';
import { AuthLayout } from '@/components/layout/auth/auth-layout';

export const metadata = { title: `Sign In | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
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
                  <InputLabel id="role">Role</InputLabel>
                  <Select
                    labelId="role"
                    id="demo-simple-select"
                    // value={age}
                    label="role"
                    // onChange={handleChange}
                  >
                    <MenuItem value="1">Buyer</MenuItem>
                    <MenuItem value="2">Seller</MenuItem>
                    <MenuItem value="3">Broker</MenuItem>
                  </Select>
                </FormControl>

                <FormControl sx={{ mt: 1 }}>
                  <RadioGroup row aria-labelledby="gender" name="gender">
                    <FormControlLabel value="female" control={<Radio size="small" />} label="Female" />
                    <FormControlLabel value="male" control={<Radio size="small" />} label="Male" />
                    <FormControlLabel value="other" control={<Radio size="small" />} label="Other" />
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
