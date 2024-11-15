import { Box, Stack, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Stack gap={1}>
      <Box display="flex" justifyContent="space-evenly">
        <Typography fontSize="12px" fontWeight={500} color="#666">
          About
        </Typography>
        <Typography fontSize="12px" fontWeight={500} color="#666">
          Accessibility
        </Typography>
        <Typography fontSize="12px" fontWeight={500} color="#666">
          Help Center
        </Typography>
      </Box>
      <Box display="flex" justifyContent="space-evenly">
        <Typography fontSize="12px" fontWeight={500} color="#666">
          Privacy & Terms
        </Typography>
        <Typography fontSize="12px" fontWeight={500} color="#666">
          Ad Choices
        </Typography>
      </Box>
      <Box display="flex" justifyContent="space-evenly">
        <Typography fontSize="12px" fontWeight={500} color="#666">
          Advertising
        </Typography>
        <Typography fontSize="12px" fontWeight={500} color="#666">
          Business Services
        </Typography>
      </Box>
      <Box display="flex" justifyContent="space-evenly">
        <Typography fontSize="12px" fontWeight={500} color="#666">
          Get the LinkedIn app
        </Typography>
        <Typography fontSize="12px" fontWeight={500} color="#666">
          More
        </Typography>
      </Box>
      <Typography fontWeight={500} fontSize={14} color="#666" mt={2} textAlign="center">
        LinkedIn Corporation © 2024
      </Typography>
    </Stack>
  );
}
