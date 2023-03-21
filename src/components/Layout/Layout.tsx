import { Box, styled } from '@mui/joy';
import Breadcrumbs from 'components/Breadcrumbs';

type TLayoutProps = {
  children: React.ReactNode;
};

const Container = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
}));

const Layout = ({ children }: TLayoutProps) => {
  return (
    <Container>
      <Breadcrumbs />
      {children}
    </Container>
  );
};

export default Layout;
