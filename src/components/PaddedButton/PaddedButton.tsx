import { Button, styled, Typography } from '@mui/joy';

type TPadButtonProps = {
  children: React.ReactNode;
};

type TTypography = {
  component: React.ElementType;
};

const StyledButton = styled(Button)(({ theme }) => ({
  width: '100%',
  textTransform: 'capitalize',
  justifyContent: 'flex-start',
  padding: `${theme.spacing(4)} ${theme.spacing(2)}`,
}));

const StyledType = styled(Typography)<TTypography>(({ theme }) => ({
  fontSize: '1.25rem',
  color: theme.vars.palette.primary[600],
  fontWeight: '700',
}));

const PaddedButton = ({ children }: TPadButtonProps) => {
  return (
    <StyledButton variant="soft">
      <StyledType level="h1" component="p">
        {children}
      </StyledType>
    </StyledButton>
  );
};

export default PaddedButton;
