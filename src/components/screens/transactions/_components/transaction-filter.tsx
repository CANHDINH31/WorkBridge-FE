import * as React from 'react';
import { AdjustmentsHorizontalIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputAdornment,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Popover,
  Radio,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

interface Props {
  numberTransactions: number;
  onChange: (text: string | undefined) => void;
  onApplyFilter: ({
    transactionType,
    price,
    roles,
  }: {
    transactionType: string[];
    price: string;
    roles: string[];
  }) => void;
}

const DEFINE_TRANSACTION_TYPE = [
  'Domain Name',
  'Domain Name Holding',
  'Motor Vehicle',
  'General Merchandise',
  'Milestone',
];

const DEFINE_PRICE_RANGE = [
  {
    label: 'Any Price',
    value: '',
  },
  {
    label: '< 3,000',
    value: '< 3,000',
  },
  {
    label: '3,000 - 10,000',
    value: '3,000 - 10,000',
  },
  {
    label: '10,000 - 15,000',
    value: '10,000 - 15,000',
  },
  {
    label: '> 50,000',
    value: '> 50,000',
  },
];

const DEFINE_ROLE = ['Buyer', 'Seller', 'Broker'];

export default function TransactionFilter({ numberTransactions, onChange, onApplyFilter }: Props) {
  const [searchText, setSearchText] = React.useState<string>('');
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const [transactionType, setTransactionType] = React.useState<string[]>([]);
  const [price, setPrice] = React.useState<string>('');
  const [roles, setRoles] = React.useState<string[]>([]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Box padding={2} display="flex" justifyContent="space-between" alignItems="center">
      <Stack direction="row" justifyContent="start" alignItems="center" spacing={2}>
        <TextField
          sx={{
            '& .MuiOutlinedInput-root': {
              background: '#f4f2ff',
            },
            '& input': {
              '&::placeholder': {
                color: '#5F6163',
                opacity: 1,
                fontSize: 14,
              },
            },
            'mui-jnltum-MuiOutlinedInput-notchedOutline': {
              border: 'none !important',
            },
            minWidth: 460,
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MagnifyingGlassIcon height={18} />
              </InputAdornment>
            ),
          }}
          placeholder="Search transaction"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            onChange(e.target.value);
          }}
        />
        <Button
          sx={{
            border: '1px solid',
            borderColor: '#c6c2de',
            color: '#5d5a6e',
            fontWeight: 'bold',
            borderRadius: 1,
            height: 54,
          }}
          onClick={handleClick}
        >
          <InputAdornment position="start">
            <AdjustmentsHorizontalIcon height={18} />
          </InputAdornment>
          Filter
        </Button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
          <Box padding={3}>
            <Stack direction="column" justifyContent="start" alignItems="start" spacing={2}>
              <Stack>
                <Typography fontSize={12}>Transaction Type</Typography>
                <FormControl sx={{ m: 1, width: 300 }}>
                  <InputLabel sx={{ fontSize: 14 }}>Select A Transaction Type</InputLabel>
                  <Select
                    multiple
                    value={transactionType}
                    onChange={(e) => {
                      const { value } = e.target;
                      setTransactionType(
                        // On autofill we get a stringified value.
                        typeof value === 'string' ? value.split(',') : value
                      );
                    }}
                    input={<OutlinedInput label="Select A Transaction Type" />}
                    renderValue={(selected) => <Typography sx={{ fontSize: 14 }}>{selected.join(', ')}</Typography>}
                  >
                    {DEFINE_TRANSACTION_TYPE.map((_item) => (
                      <MenuItem key={_item} value={_item}>
                        <ListItemText primary={_item} />
                        <Checkbox checked={transactionType.includes(_item)} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Stack>
              <Stack>
                <Typography fontSize={12}>Price Range</Typography>
                <FormControl sx={{ m: 1, width: 300 }}>
                  <InputLabel sx={{ fontSize: 14 }}>Select A Price Range</InputLabel>
                  <Select
                    value={price}
                    onChange={(e) => {
                      setPrice(e.target.value);
                    }}
                    input={<OutlinedInput label="Select A Price Range" />}
                    renderValue={(selected) => <Typography sx={{ fontSize: 14 }}>{selected}</Typography>}
                  >
                    {DEFINE_PRICE_RANGE.map((_item) => (
                      <MenuItem key={_item.value} value={_item.value}>
                        <FormControlLabel
                          value={_item}
                          control={<Radio />}
                          label={_item.label}
                          checked={_item.value === price}
                        />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Stack>
              <Stack>
                <Typography fontSize={12}>Role</Typography>
                <FormControl sx={{ m: 1, width: 300 }}>
                  <InputLabel sx={{ fontSize: 14 }}>Select A Role</InputLabel>
                  <Select
                    multiple
                    value={roles}
                    onChange={(e) => {
                      const { value } = e.target;
                      setRoles(
                        // On autofill we get a stringified value.
                        typeof value === 'string' ? value.split(',') : value
                      );
                    }}
                    input={<OutlinedInput label="Select A Role" />}
                    renderValue={(selected) => <Typography sx={{ fontSize: 14 }}>{selected.join(', ')}</Typography>}
                  >
                    {DEFINE_ROLE.map((_item) => (
                      <MenuItem key={_item} value={_item}>
                        <ListItemText primary={_item} />
                        <Checkbox checked={roles.includes(_item)} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Stack>
              <Stack width="100%" direction="row" justifyContent="space-between">
                {transactionType.length || price || roles.length ? (
                  <Button
                    sx={{
                      color: '#7069d0',
                      '&:hover': {
                        textDecoration: 'underline',
                      },
                    }}
                    onClick={() => {
                      setTransactionType([]);
                      setPrice('');
                      setRoles([]);
                    }}
                  >
                    Clear
                  </Button>
                ) : (
                  <div />
                )}

                <Button
                  sx={{
                    padding: '10px 20px',
                    fontWeight: 'bold',
                    minWidth: 120,
                    fontSize: 12,
                    borderRadius: 1,
                    backgroundColor: '#7069d0',
                    color: '#fff',
                    '&:hover': {
                      backgroundColor: '#867feb',
                    },
                  }}
                  onClick={() => {
                    onApplyFilter({
                      transactionType,
                      price,
                      roles,
                    });
                  }}
                >
                  Apply
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Popover>
      </Stack>
      <Typography component="span" color="#756f98" fontSize={14}>
        You are viewing {numberTransactions} transaction
      </Typography>
    </Box>
  );
}
