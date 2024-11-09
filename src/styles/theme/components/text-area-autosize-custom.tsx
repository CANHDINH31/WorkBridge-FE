import * as React from 'react';
import styled from '@emotion/styled';
import { Stack, Typography } from '@mui/material';

import Visibility from '@/components/core/common/base/visibility';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error: boolean;
  isHovered: boolean;
}

const StyledTextArea = styled.textarea<TextAreaProps>`
  width: 100%;
  font: inherit;
  resize: vertical;
  padding: 8px;
  border: 1px solid ${(props) => (props.error ? 'red' : '#ccc')};
  border-color: ${(props) => (props.error ? 'red' : props.isHovered ? '#000' : '#ccc')};
  border-radius: 8px;
  transition: border-color 0.3s;

  &:focus {
    border-color: ${(props) => (props.error ? 'red' : '#ccc')};
  }
`;

export default function TextareaCustom({ error, errorMessage, value, onChange, ...props }: any) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Stack sx={{width: '100%'}}>
      <StyledTextArea
        error={error}
        isHovered={isHovered}
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
        value={value}
        onChange={onChange}
        {...props}
      />
      <Visibility visibility={error}>
        <Typography
          component="span"
          sx={{ color: 'red', fontSize: '0.875rem', fontWeight: 500, lineHeight: '28px', marginTop: '8px' }}
        >
          {errorMessage}
        </Typography>
      </Visibility>
    </Stack>
  );
}
