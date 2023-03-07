import { Box, styled } from '@mui/joy';

type TLayoutProps = {
  children: React.ReactNode;
};

const Container = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
}));

const Layout = ({ children }: TLayoutProps) => {
  return <Container>{children}</Container>;
};

export default Layout;
