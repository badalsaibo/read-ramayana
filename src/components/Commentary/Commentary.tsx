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
  backgroundColor: theme.palette.mode === 'light' ? 'hsl(215deg 50% 79% / 40%)' : 'hsl(247deg 31% 46% / 40%)',
  borderRadius: theme.spacing(1),
  '& p': {
    marginTop: 0,
    marginBottom: 0,
    textAlign: 'justify',
  },
}));
