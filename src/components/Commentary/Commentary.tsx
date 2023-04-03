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
  padding: theme.spacing(2),
  backgroundColor: theme.vars.palette.custom.commentaryBg,
  borderRadius: theme.spacing(1),
  '& p': {
    marginTop: 0,
    marginBottom: 0,
    textAlign: 'justify',
  },
}));
