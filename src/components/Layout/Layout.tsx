import { styled } from '@mui/joy';
import Stack from '@mui/joy/Stack';
import { Box } from '@mui/system';
import Breadcrumbs from 'components/Breadcrumbs';
import NavigationBar from 'components/NavigationBar';
import { useRouter } from 'next/router';

type TLayoutProps = {
  children: React.ReactNode;
  isSarga: boolean;
};

const Container = styled(Stack)(({ theme }) => ({
  flexGrow: 1,
  height: '100%',
  justifyContent: 'space-between',
  display: 'grid',
  gridTemplateRows: '1fr min-content',
}));

const PageContainer = styled(Box)(({ theme }) => ({
  height: '100%',
  padding: theme.spacing(2),
}));

const Layout = ({ children, isSarga }: TLayoutProps) => {
  const router = useRouter();

  const isRootRoute = router.asPath === '/';
  return (
    <Container>
      <PageContainer>{children}</PageContainer>
      {!isRootRoute && <NavigationBar isSarga={isSarga} />}
    </Container>
  );
};

export default Layout;
