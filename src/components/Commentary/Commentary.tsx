import { styled } from '@mui/joy/styles';
import Box from '@mui/joy/Box';

type TCommentaryProps = {
  children: React.ReactNode;
};

const Commentary = ({ children }: TCommentaryProps) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Commentary;

const Wrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  backgroundColor: theme.vars.palette.success[600],
  borderRadius: theme.spacing(1),
}));
