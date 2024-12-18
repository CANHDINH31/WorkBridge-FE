'use client';

import * as React from 'react';
import { Box, Tab, Tabs } from '@mui/material';

import ActionRequiredTab from './tabs/action-required-tab';
import AllTab from './tabs/all-tab';
import ClosedTab from './tabs/closed-tab';
import OpenTab from './tabs/open-tab';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const DEFINE_LIST_TABS = [
  {
    label: 'All',
    value: 0,
    component: <AllTab />,
  },
  {
    label: 'Action Required',
    value: 1,
    component: <ActionRequiredTab />,
  },
  {
    label: 'Open',
    value: 2,
    component: <OpenTab />,
  },
  {
    label: 'Closed',
    value: 3,
    component: <ClosedTab />,
  },
];

export default function TransactionsPageView() {
  const [value, setValue] = React.useState(DEFINE_LIST_TABS[0].value);

  const handleChange = (_: React.SyntheticEvent, newValue: typeof value) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', marginBottom: '40px' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          sx={{
            'button.Mui-selected': {
              color: '#02416a !important',
            },
            button: {
              color: '#6f6994 !important',
              minWidth: '48px !important',
              fontWeight: "500"
            },
          }}
          TabIndicatorProps={{
            sx: {
              backgroundColor: '#02416a',
            },
          }}
        >
          {DEFINE_LIST_TABS.map((tab) => (
            <Tab
              key={tab.value}
              sx={{ textTransform: 'none', fontSize: '14px' }}
              label={tab.label}
              {...a11yProps(tab.value)}
            />
          ))}
        </Tabs>
      </Box>
      {DEFINE_LIST_TABS.map((tab) => (
        <CustomTabPanel key={tab.value} value={value} index={tab.value}>
          {tab.component}
        </CustomTabPanel>
      ))}
    </Box>
  );
}
