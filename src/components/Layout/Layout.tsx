import { styled } from '@mui/joy';
import Stack from '@mui/joy/Stack';
import Breadcrumbs from 'components/Breadcrumbs';
import NavigationBar from 'components/NavigationBar';
import { useRouter } from 'next/router';

type TLayoutProps = {
  children: React.ReactNode;
};

const Container = styled(Stack)(({ theme }) => ({
  flexGrow: 1,
  height: '100%',
  padding: theme.spacing(2),
}));

const Layout = ({ children }: TLayoutProps) => {
  const router = useRouter();

  const isRootRoute = router.asPath === '/';
  return (
    <Container>
      {!isRootRoute && <Breadcrumbs />}
      {!isRootRoute && <NavigationBar />}
      {children}
    </Container>
  );
};

export default Layout;
