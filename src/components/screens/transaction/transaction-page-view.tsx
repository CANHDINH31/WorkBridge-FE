import { Box } from '@mui/material';

interface Props {}

function TransactionPageView(props: Props) {
  return (
    <Box display="flex" justifyContent="space-between" gap={4}>
      <Box flex={2}>456</Box>
      <Box flex={1}>789</Box>
    </Box>
  );
}

export default TransactionPageView;
