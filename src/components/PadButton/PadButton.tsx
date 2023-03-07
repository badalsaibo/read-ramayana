import { Button, styled, Typography } from '@mui/joy';

type TPadButtonProps = {
  children: React.ReactNode;
};

const StyledButton = styled(Button)(({ theme }) => ({
  textTransform: 'capitalize',
  width: '100%',
  padding: theme.spacing(5),
}));

const PadButton = ({ children }: TPadButtonProps) => {
  return (
    <StyledButton variant="soft">
      <Typography>{children}</Typography>
    </StyledButton>
  );
};

export default PadButton;
