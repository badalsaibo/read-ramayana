import Link from 'next/link';
import Head from 'next/head';

import Box from '@mui/joy/Box';
import Stack from '@mui/joy/Stack';
import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import { styled, useTheme } from '@mui/joy/styles';

import { CgTrees } from 'react-icons/cg';
import { GoChevronRight } from 'react-icons/go';

export default function Home() {
  const theme = useTheme();
  return (
    <Container spacing={3}>
      <Head>
        <title>Read Ramayana</title>
        <meta name="title" content="Read Ramayana" />
        <meta name="description" content="Read ramayana online " />
        <meta
          name="keywords"
          content="ramayana, hinduism, india, ram, sita, lakshman, culture, heritage, ramayan, hanuman, bharat, mahabharata, "
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
      </Head>
      <Typography level="h2" component="h1" textAlign="center" fontSize="1.75rem">
        Immerse yourself in the timeless epic of Ramayana by reading it online
      </Typography>
      <Button endDecorator={<GoChevronRight size={20} />} size="lg" component={Link} href="/kanda">
        Start Reading
      </Button>
      <BackgroundImage>
        <CgTrees size={400} color={`rgba(${theme.vars.palette.primary.mainChannel} / 0.25)`} />
      </BackgroundImage>
    </Container>
  );
}

const Container = styled(Stack)(() => ({
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
}));

const BackgroundImage = styled(Box)(() => ({
  position: 'fixed',
  bottom: '0',
  right: '0',
  transform: 'translate(120px, 67px)',
  zIndex: -1,
}));
