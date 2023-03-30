import { Button, styled, Typography } from '@mui/joy';
import { TKanda } from 'interface/kanda';
import Link from 'next/link';
import React from 'react';

type TPadButtonProps = {
  children: React.ReactNode;
  href: string;
  kanda: TKanda;
};

type TTypography = {
  component: React.ElementType;
};

type TStyledButtonProps = {
  href: string;
  kanda: TKanda;
  component: React.ElementType;
};

const StyledButton = styled(Button)<TStyledButtonProps>(({ theme, kanda }) => ({
  width: '100%',
  textTransform: 'capitalize',
  justifyContent: 'flex-start',
  padding: `${theme.spacing(4)} ${theme.spacing(2)}`,
}));

const Text = styled(Typography)<TTypography>(({ theme }) => ({
  fontSize: '1.25rem',
  color: theme.palette.mode === 'light' ? theme.vars.palette.primary[600] : theme.vars.palette.primary[100],
  fontWeight: '700',
}));

const PaddedButton = ({ children, href, kanda }: TPadButtonProps) => {
  return (
    <StyledButton variant="soft" component={Link} href={href} kanda={kanda}>
      <Text level="h2" component="p">
        {children}
      </Text>
    </StyledButton>
  );
};

export default PaddedButton;
