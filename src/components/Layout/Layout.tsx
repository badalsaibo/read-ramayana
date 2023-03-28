import { Box, Stack, styled } from '@mui/joy';
import Breadcrumbs from 'components/Breadcrumbs';
import ChaptersSidebar from 'components/ChaptersSidebar';
import Sidebar from 'components/Sidebar';
import KandaProvider from 'provider/KandaProvider';

type TLayoutProps = {
  children: React.ReactNode;
};

const Container = styled(Box)(() => ({
  height: '100%',
  display: 'grid',
  gridTemplateColumns: 'min-content 0.75fr 1fr',
}));

const Layout = ({ children }: TLayoutProps) => {
  return (
    <Container>
      <KandaProvider>
        <Sidebar />
        <ChaptersSidebar />
      </KandaProvider>
      <Box>{children}</Box>
    </Container>
  );
};

export default Layout;
