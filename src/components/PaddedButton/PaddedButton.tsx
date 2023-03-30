import React from 'react';
import Link from 'next/link';

import { styled } from '@mui/joy';
import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';

import { TKanda } from 'interface/kanda';
import { KANDA_ICONS_MAP } from 'constant/kanda';

import { getSvgStringFromComponent } from 'utils';

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

const StyledButton = styled(Button)<TStyledButtonProps>(({ theme, kanda }) => {
  const Icon = KANDA_ICONS_MAP[kanda];

  const svgString = getSvgStringFromComponent({ component: <Icon size={24} /> });

  return {
    width: '100%',
    textTransform: 'capitalize',
    justifyContent: 'flex-start',
    padding: `${theme.spacing(4)} ${theme.spacing(2)}`,
    backgroundImage: `url("data:image/svg+xml,${svgString}")`,
  };
});

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
