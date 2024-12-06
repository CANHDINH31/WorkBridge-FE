'use client';

import { Dispatch, SetStateAction } from 'react';
import { PencilSquareIcon } from '@heroicons/react/24/outline';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { FieldValues, UseFormWatch } from 'react-hook-form';

interface Props {
  watch: UseFormWatch<FieldValues>;
  setIsAddItem: Dispatch<SetStateAction<boolean>>;
}

const Wrapper = styled('div')({
  padding: 20,
  borderRadius: 6,
  border: '1px solid rgba(0,0,0,0.2)',
  cursor: 'pointer',
  position: 'relative',
  '&:hover .overlay': {
    display: 'flex',
  },
});

const Overlay = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0,0,0,0.3)',
  zIndex: 2,
  display: 'none',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
});

export default function TransactionDetail({ watch, setIsAddItem }: Props) {
  const category = watch('category');
  return (
    <Wrapper>
      <Box display="flex" justifyContent="space-between">
        <Typography fontWeight={600}>{watch('name')}</Typography>
        <Typography>${watch('price')}</Typography>
      </Box>
      <Typography fontStyle="italic">{category?.label}</Typography>
      {watch('year') && <Typography>{`${watch('year')}  ${watch('make')}  ${watch('model')}`}</Typography>}
      <Typography>{watch('description')}</Typography>
      {watch('inspection_period') && (
        <Typography mt={1}>Inspection Period: {watch('inspection_period')} Day(s)</Typography>
      )}

      <Overlay
        className="overlay"
        onClick={() => {
          setIsAddItem(true);
        }}
      >
        <PencilSquareIcon height={30} color="white" />
        <Typography color="white" fontWeight={600} fontSize={20} mt={1}>
          Edit Transaction
        </Typography>
      </Overlay>
    </Wrapper>
  );
}
