import { Box, Container } from '@mui/material';

import HeadSearch from './head-search';

export default function Header(): React.JSX.Element {
  return (
    <Box bgcolor="#FFFFFF" py="4px">
      <Container>
        <HeadSearch />
      </Container>
    </Box>
  );
}
