'use client';

import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { clearToken } from '@/utilities/jwt';
import { BellAlertIcon, HomeIcon, UserGroupIcon } from '@heroicons/react/24/solid';
import { Badge, Box, Button, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { signOut, useSession } from 'next-auth/react';

import { paths } from '@/paths';

interface Props {}

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
  const [active, setActive] = useState<number>(0);

  const handleSignOut = async () => {
    clearToken();
    await signOut();
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
        {session.data?.info?.email ? (
          <Box
            onClick={handleSignOut}
            component="img"
            src="https://media.licdn.com/dms/image/v2/D4D03AQHt-5xaPvavOw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1703069041306?e=1736985600&v=beta&t=kJuH_aqS8tY9IC3yIvErOTYcE5KRs3Af5VhtxMzUrwo"
            width={32}
            sx={{ objectFit: 'contain', borderRadius: '50%' }}
          />
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
