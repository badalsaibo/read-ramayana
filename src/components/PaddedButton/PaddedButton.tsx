import { Button, styled, Typography } from '@mui/joy';
import Link from 'next/link';
import React from 'react';

type TPadButtonProps = {
  children: React.ReactNode;
  href: string;
};

type TTypography = {
  component: React.ElementType;
};

type TStyledButtonProps = {
  component: React.ElementType;
  href: string;
};

const StyledButton = styled(Button)<TStyledButtonProps>(({ theme }) => ({
  width: '100%',
  textTransform: 'capitalize',
  justifyContent: 'flex-start',
  padding: `${theme.spacing(4)} ${theme.spacing(2)}`,
}));

const Text = styled(Typography)<TTypography>(({ theme }) => ({
  fontSize: '1.25rem',
  color: theme.vars.palette.primary[600],
  fontWeight: '700',
}));

const PaddedButton = ({ children, href }: TPadButtonProps) => {
  return (
    <StyledButton variant="soft" component={Link} href={href}>
      <Text level="h1" component="p">
        {children}
      </Text>
    </StyledButton>
  );
};

export default PaddedButton;
