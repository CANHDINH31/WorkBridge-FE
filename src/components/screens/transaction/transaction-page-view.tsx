'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ITEM_CATEGORY, ITEM_CATEGORY_TYPE_1, ItemCategory, ROLE } from '@/utilities/contants';
import { DocumentArrowDownIcon } from '@heroicons/react/24/outline';
import { Box, Button, Checkbox, Divider, Paper, Typography } from '@mui/material';
import { FieldValues, useForm } from 'react-hook-form';

import SellerBuyerDetail from './seller-buyer-detail';
import TransactionDetail from './transaction-detail';
import TransactionHead from './transaction-head';
import TransactionItem from './transaction-item';
import TransactionSummary from './transaction-summary';

interface Props {}

function TransactionPageView(props: Props) {
  const [isAddItem, setIsAddItem] = useState<boolean>(true);
  const [isCheck, setIsCheck] = useState<boolean>(false);

  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  const role = watch('role') ?? ROLE[0].value;
  const category: ItemCategory = watch('category') ?? ITEM_CATEGORY[0];
  const showCategoryType1 = ITEM_CATEGORY_TYPE_1.map((item) => item.value).includes(category.value);

  const onSubmit = (data: FieldValues) => {
    console.log(data, 'data');
    if (isAddItem) {
      setIsAddItem(false);
    }
  };

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
          <Box component="form" onSubmit={handleSubmit(onSubmit)}>
            <TransactionHead control={control} role={role} errors={errors} register={register} />

            <Box mt={6}>
              <Typography fontSize={16} fontWeight={600} color="#4f5759">
                Transaction details
              </Typography>

              <Box mt={2}>
                {isAddItem ? (
                  <TransactionItem watch={watch} control={control} errors={errors} register={register} />
                ) : (
                  <TransactionDetail watch={watch} setIsAddItem={setIsAddItem} />
                )}
              </Box>
            </Box>

            <Box mt={6}>{!isAddItem ? <TransactionSummary watch={watch} control={control} /> : null}</Box>

            {!isAddItem && (
              <Box mt={6}>
                <SellerBuyerDetail role={role} errors={errors} register={register} />
              </Box>
            )}

            {isAddItem ? (
              <Box mt={4} display="flex" justifyContent="flex-end" gap={2}>
                {/* {showCategoryType1 ? (
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
                ) : null} */}

                <Button variant="contained" size="large" type="submit">
                  Add Item
                </Button>
              </Box>
            ) : (
              <Box mt={4} textAlign="center">
                <Box mb={2} display="flex" gap={0.5} alignItems="center" justifyContent="center">
                  <Checkbox
                    checked={isCheck}
                    onChange={() => {
                      setIsCheck(!isCheck);
                    }}
                  />
                  <Typography>
                    I have read and agree to the{' '}
                    <Link href="/" style={{ textDecoration: 'none', color: '#1976d2' }}>
                      General Escrow Instructions
                    </Link>{' '}
                    and
                    <Link href="/" style={{ textDecoration: 'none', color: '#1976d2' }}>
                      {' '}
                      Privacy Policy.
                    </Link>
                  </Typography>
                </Box>
                <Button
                  size="large"
                  variant="contained"
                  sx={{ minWidth: '40%' }}
                  color="success"
                  type="submit"
                  disabled={!isCheck}
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
