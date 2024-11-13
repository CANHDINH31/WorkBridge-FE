'use client';

import React, { useState } from 'react';
import {
  BellAlertIcon,
  BriefcaseIcon,
  ChatBubbleLeftEllipsisIcon,
  HomeIcon,
  UserGroupIcon,
} from '@heroicons/react/24/solid';
import { Badge, Box, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

interface Props {}

interface IMenuItem {
  icon?: React.ElementType;
  title: string;
  amount?: number;
  active?: boolean;
}

const listMenu: IMenuItem[] = [
  {
    icon: HomeIcon,
    title: 'Home',
  },
  { icon: UserGroupIcon, title: 'My Network' },
  { icon: BriefcaseIcon, title: 'Jobs' },
  { icon: ChatBubbleLeftEllipsisIcon, title: 'Messaging' },
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
  const [active, setActive] = useState<number>(0);
  return (
    // Margin bottom === py of layout
    <Box display="flex" alignItems="center" marginBottom="-8px">
      <Box display="flex" alignItems="center" gap={4}>
        {listMenu?.map((menu, index) => (
          <Box
            key={Number(index)}
            onClick={() => {
              setActive(index);
            }}
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="4px"
          >
            <MenuItem {...menu} active={active === index} />
            <Box
              height="2px"
              bgcolor="rgb(0 0 0 / .9)"
              display={active === index ? 'block' : 'none'}
              sx={{ width: 'calc(100% + 16px)' }}
            />
          </Box>
        ))}
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
