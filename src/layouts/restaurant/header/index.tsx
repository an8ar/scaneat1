import React from 'react';

import { Box, styled } from '@mui/material';

import { Logo } from '~/assets/logo';

export function LogoHeader() {
  return (
    <BoxStyle>
      <Logo />
    </BoxStyle>
  );
}
export const BoxStyle = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  position: 'fixed',
  width: '100%',
  top: 0,
  zIndex: theme.zIndex.appBar,
  justifyContent: 'start',
  alignItems: 'center',
  backgroundColor: theme.palette.common.white,
  color: theme.palette.grey[300],
  minHeight: 56,
  paddingLeft: theme.spacing(2),
  borderBottom: '1px solid #E0E0E0',
}));
