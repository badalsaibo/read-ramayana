import { useRouter } from 'next/router';

import Box from '@mui/joy/Box';
import Stack from '@mui/joy/Stack';
import { styled, useTheme } from '@mui/joy/styles';

import NavigationBar from 'components/NavigationBar';
import StickyPositionFix from 'components/StickyPositionFix';

import { CgTrees } from 'react-icons/cg';
import { GiMonsteraLeaf } from 'react-icons/gi';

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

  const theme = useTheme();
  return (
    <Container>
      <PageContainer>{children}</PageContainer>
      {!isRootRoute && <NavigationBar isSarga={isSarga} />}
      <StickyPositionFix />
      <BackgroundImage>
        <CgTrees size={400} color={`rgba(${theme.vars.palette.primary.mainChannel} / 0.1)`} />
      </BackgroundImage>
      <TopLeftImage>
        <GiMonsteraLeaf size={200} color={`rgba(${theme.vars.palette.primary.mainChannel} / 0.2)`} />
      </TopLeftImage>
    </Container>
  );
};

export default Layout;

const BackgroundImage = styled(Box)(() => ({
  position: 'fixed',
  bottom: '0',
  right: '0',
  transform: 'translate(120px, 67px)',
  zIndex: -1,
}));

const TopLeftImage = styled(Box)(() => ({
  position: 'fixed',
  left: '0',
  top: '0',
  transform: 'translate(-120px, -67px)',
  zIndex: -1,
}));
