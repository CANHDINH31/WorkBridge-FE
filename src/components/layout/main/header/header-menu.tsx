'use client';

import { usePathname, useRouter } from 'next/navigation';
import { BellAlertIcon, HomeIcon, UserGroupIcon } from '@heroicons/react/24/solid';
import { Badge, Box, Button, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { signOut, useSession } from 'next-auth/react';

import { paths } from '@/paths';
import { authService } from '@/lib/api';
import { primary } from '@/styles/theme/colors';

interface IMenuItem {
  icon?: React.ElementType;
  title: string;
  amount?: number;
  active?: boolean;
  href?: string;
}

const listMenu: IMenuItem[] = [
  {
    icon: HomeIcon,
    title: 'Home',
    href: '/',
  },
  { icon: UserGroupIcon, title: 'Transaction', href: '/transaction' },
  { icon: BellAlertIcon, title: 'Notifications', amount: 6 },
];

const Item = styled(Stack)({
  alignItems: 'center',
  gap: '4px',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '& svg, & p': {
    color: '#00000099',
  },
  '&:hover svg, &:hover p': {
    color: '#000000e6',
  },
  '&.active': {
    '& svg, & p': {
      color: '#000000e6',
      fontWeight: 500,
    },
  },
});

function HeaderMenu() {
  const session = useSession();
  const router = useRouter();
  const pathname = usePathname();

  const handleSignOut = async () => {
    await signOut();
    await authService.removeCookiesByNextServer();
  };

  return (
    // Margin bottom === py of layout
    <Box display="flex" alignItems="center" marginBottom="-8px">
      <Box display="flex" alignItems="center" gap={4}>
        {listMenu?.map((menu, index) => (
          <Box
            key={Number(index)}
            onClick={() => {
              router.push(menu?.href ?? '');
            }}
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="4px"
          >
            <MenuItem {...menu} active={pathname === menu.href} />
            <Box
              height="2px"
              bgcolor="rgb(0 0 0 / .9)"
              display={pathname === menu.href ? 'block' : 'none'}
              sx={{ width: 'calc(100% + 16px)' }}
            />
          </Box>
        ))}
        {session.data?.user?.email ? (
          <Box
            onClick={handleSignOut}
            width={32}
            height={32}
            sx={{ borderRadius: '50%', cursor: 'pointer' }}
            bgcolor={primary}
            display="flex"
            justifyContent="center"
            alignItems="center"
            color="white"
            fontWeight={600}
          >
            {session.data?.user?.email?.charAt(0)?.toUpperCase()}
          </Box>
        ) : (
          <Button
            variant="outlined"
            size="medium"
            onClick={() => {
              router.push(paths.auth.signIn);
            }}
          >
            Sign In
          </Button>
        )}
      </Box>
    </Box>
  );
}

export default HeaderMenu;

function MenuItem(props: IMenuItem) {
  const IconComponent = props.icon;
  return (
    <Item className={props.active ? 'active' : ''}>
      {IconComponent ? (
        <Badge
          badgeContent={props?.amount}
          color="error"
          sx={{
            '& .MuiBadge-badge': {
              top: 4,
              right: 4,
            },
          }}
        >
          <IconComponent height={24} />
        </Badge>
      ) : null}
      <Typography fontSize={12}>{props.title}</Typography>
    </Item>
  );
}
