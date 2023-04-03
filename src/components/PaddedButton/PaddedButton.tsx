import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { styled, useTheme } from '@mui/joy';
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
  svgString: string;
};

const StyledButton = styled(Button, { shouldForwardProp: (prop) => prop !== 'svgString' })<TStyledButtonProps>(
  ({ theme, svgString }) => {
    return {
      width: '100%',
      textTransform: 'capitalize',
      justifyContent: 'flex-start',
      padding: `${theme.spacing(4)} ${theme.spacing(2)}`,
      backgroundImage: `url("data:image/svg+xml,${svgString}")`,
    };
  }
);

const Text = styled(Typography)<TTypography>(({ theme }) => ({
  fontSize: '1.25rem',
  color: theme.vars.palette.custom.paddedButton,
  fontWeight: '700',
}));

const PaddedButton = ({ children, href, kanda }: TPadButtonProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const theme = useTheme();

  const Icon = KANDA_ICONS_MAP[kanda];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  let svgString = '';

  if (isMounted) {
    svgString = getSvgStringFromComponent(<Icon size={24} color={theme.palette.custom.paddedButtonIcon} />);
  }

  return (
    // <HydrationResolver>
    <StyledButton variant="soft" component={Link} href={href} kanda={kanda} svgString={svgString}>
      <Text level="h2" component="p">
        {children}
      </Text>
    </StyledButton>
    // </HydrationResolver>
  );
};

export default PaddedButton;
