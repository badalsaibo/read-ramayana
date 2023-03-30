import Link from 'next/link';

import Box from '@mui/joy/Box';
import Stack from '@mui/joy/Stack';
import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import { styled, useTheme } from '@mui/joy/styles';

import { CgTrees } from 'react-icons/cg';
import { GoChevronRight } from 'react-icons/go';
import DarkModeButton from 'components/DarkModeButton';
import GenericHead from 'components/GenericHead';
import { PAGE_TITLE } from 'constant';

export default function Home() {
  const theme = useTheme();
  return (
    <>
      <GenericHead title={PAGE_TITLE} description="Read Valimiki Ramayana online" />
      <Container>
        <Stack justifyContent="center" alignItems="center" flex="1" gap={3}>
          <Typography level="h2" component="h1" textAlign="center" fontSize="1.75rem">
            Immerse yourself in the timeless epic of Ramayana by reading it online
          </Typography>
          <Button endDecorator={<GoChevronRight size={20} />} size="lg" component={Link} href="/kanda">
            Start Reading
          </Button>
        </Stack>
        <Stack direction="row" justifyContent="start" sx={{ position: 'fixed', left: '16px', bottom: '16px' }}>
          <DarkModeButton />
        </Stack>
        <BackgroundImage>
          <CgTrees size={400} color={`rgba(${theme.vars.palette.primary.mainChannel} / 0.25)`} />
        </BackgroundImage>
      </Container>
    </>
  );
}

const Container = styled(Stack)(() => ({
  height: '100%',
}));

const BackgroundImage = styled(Box)(() => ({
  position: 'fixed',
  bottom: '0',
  right: '0',
  transform: 'translate(120px, 67px)',
  zIndex: -1,
}));
