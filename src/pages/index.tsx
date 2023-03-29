import Head from 'next/head';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import Stack from '@mui/joy/Stack';
import ChevronRightCircle from 'icons/ChevronRightCircle';
import Link from 'next/link';

export default function Home() {
  return (
    <Stack height="100%" justifyContent="center" alignItems="center" spacing={3}>
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
        {/* Immerse yourself in the timeless epic of Ramayana by reading it online */}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quis autem voluptas, laudantium alias optio
      </Typography>
      <Button endDecorator={<ChevronRightCircle size={20} />} size="lg" component={Link} href="/kanda">
        Start Reading
      </Button>
    </Stack>
  );
}
