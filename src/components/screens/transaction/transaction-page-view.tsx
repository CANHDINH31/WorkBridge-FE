'use client';

import { useState } from 'react';
import { CURRENCY, DISCLOSURE, ITEM_CATEGORY, ITEM_CATEGORY_TYPE_1, ItemCategory, ROLE } from '@/utilities/contants';
import { DocumentArrowDownIcon } from '@heroicons/react/24/outline';
import {
  Box,
  Button,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';

import SellerBuyerDetail from './seller-buyer-detail';
import TransactionDetail from './transaction-detail';
import TransactionItem from './transaction-item';
import TransactionSummary from './transaction-summary';

interface Props {}

function TransactionPageView(props: Props) {
  const [isAddItem, setIsAddItem] = useState<boolean>(true);
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  const role = watch('role') ?? ROLE[0].value;
  const itemCategory: ItemCategory = watch('item_category') ?? ITEM_CATEGORY[0];
  const showCategoryType1 = ITEM_CATEGORY_TYPE_1.map((item) => item.value).includes(itemCategory.value);

  return (
    <Box width="100%">
      <Paper elevation={3}>
        <Box py={5} px={10}>
          <Typography fontSize={24} fontWeight={500} color="#01426a" lineHeight={1.33}>
            Start Transaction
          </Typography>
          <Box py={2} width="100%">
            <Divider
              sx={{
                bgcolor: '#08f',
              }}
            />
          </Box>
          <Box>
            <TextField fullWidth label="Transaction title" />
            <Box mt={2} display="flex" gap={2}>
              <FormControl fullWidth>
                <InputLabel id="role">Role</InputLabel>
                <Controller
                  name="role"
                  control={control}
                  defaultValue={ROLE[0].value}
                  rules={{ required: 'Role is required' }}
                  render={({ field }) => (
                    <Select labelId="role" id="role" label="Role" {...field} error={Boolean(errors.type)}>
                      {ROLE.map((r) => (
                        <MenuItem key={r.value} value={r.value}>
                          {r.label}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                />
              </FormControl>
              <FormControl fullWidth>
                <InputLabel id="currency">Currency</InputLabel>
                <Controller
                  name="currency"
                  control={control}
                  defaultValue={CURRENCY[0].value}
                  rules={{ required: 'Currency is required' }}
                  render={({ field }) => (
                    <Select labelId="currency" id="currency" label="Currency" {...field} error={Boolean(errors.type)}>
                      {CURRENCY.map((c) => (
                        <MenuItem key={c.value} value={c.value}>
                          {c.label}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                />
              </FormControl>
              {role !== ROLE[2].value && <TextField fullWidth label="Inspection period (days)" type="number" />}
            </Box>
            {role === ROLE[2].value && (
              <Box mt={2} display="flex" gap={2}>
                <TextField fullWidth label="Inspection period (days)" type="number" />
                <FormControl fullWidth>
                  <InputLabel id="currency">Transaction disclosure</InputLabel>
                  <Select labelId="currency" id="currency" label="Transaction disclosure">
                    {DISCLOSURE?.map((d) => (
                      <MenuItem key={d.value} value={d.value}>
                        {d.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            )}

            <Box mt={6}>
              <Typography fontSize={16} fontWeight={600} color="#4f5759">
                Transaction details
              </Typography>

              <Box mt={2}>
                {isAddItem ? (
                  <TransactionItem watch={watch} control={control} errors={errors} />
                ) : (
                  <TransactionDetail />
                )}
              </Box>
            </Box>

            <Box mt={6}>{!isAddItem ? <TransactionSummary /> : null}</Box>

            {!isAddItem && (
              <Box mt={6}>
                <SellerBuyerDetail role={role} />
              </Box>
            )}

            {isAddItem ? (
              <Box mt={4} display="flex" justifyContent="flex-end" gap={2}>
                {showCategoryType1 ? (
                  <>
                    <Button color="success" size="large">
                      Download csv template
                    </Button>
                    <Button
                      color="success"
                      size="large"
                      variant="outlined"
                      endIcon={<DocumentArrowDownIcon height={24} />}
                    >
                      Bulk upload by csv
                    </Button>
                  </>
                ) : null}

                <Button
                  variant="contained"
                  size="large"
                  onClick={() => {
                    setIsAddItem(!isAddItem);
                  }}
                >
                  Add Item
                </Button>
              </Box>
            ) : (
              <Box mt={4} textAlign="center">
                <Button
                  size="large"
                  variant="contained"
                  sx={{ minWidth: '40%' }}
                  onClick={() => {
                    setIsAddItem(!isAddItem);
                  }}
                  color="success"
                >
                  Start Transaction
                </Button>
              </Box>
            )}
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}

export default TransactionPageView;
