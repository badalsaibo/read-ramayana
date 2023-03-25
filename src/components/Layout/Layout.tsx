import { Box, Stack, styled } from '@mui/joy';
import Breadcrumbs from 'components/Breadcrumbs';
import ChaptersSidebar from 'components/ChaptersSidebar';
import Sidebar from 'components/Sidebar';
import KandaProvider from 'provider/KandaProvider';

type TLayoutProps = {
  children: React.ReactNode;
};

const Container = styled(Stack)(({ theme }) => ({
  // padding: theme.spacing(2),
  height: '100%',
}));

const Layout = ({ children }: TLayoutProps) => {
  return (
    <Container direction="row">
      <KandaProvider>
        <Sidebar />
        <ChaptersSidebar />
      </KandaProvider>
      {/* <Breadcrumbs /> */}
      <Box>{children}</Box>
    </Container>
  );
};

export default Layout;
