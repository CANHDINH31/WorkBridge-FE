import { Box, Container } from '@mui/material';

import HeadSearch from './head-search';
import HeaderMenu from './header-menu';

export default function Header(): React.JSX.Element {
  return (
    <Box bgcolor="#FFFFFF" py="8px">
      <Container>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <HeadSearch />
          <HeaderMenu />
        </Box>
      </Container>
    </Box>
  );
}
