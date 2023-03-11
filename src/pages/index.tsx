import Head from 'next/head';
import Typography from '@mui/joy/Typography';
import { Box, Button, Stack } from '@mui/joy';
import ChevronRightCircle from 'icons/ChevronRightCircle';
import styled from '@emotion/styled';
import Link from 'next/link';

export default function Home() {
  return (
    <>
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
      <Stack spacing={1}>
        <Typography level="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ad, molestias tenetur quam ipsa nostrum hic
          autem quaerat harum at aspernatur, repellendus illo iusto soluta tempora. Fugit, numquam! Illum, dolore.
        </Typography>
      </Stack>
      <Button endDecorator={<ChevronRightCircle size={20} />} size="md" component={Link} href="/kanda">
        Start Reading
      </Button>
    </>
  );
}
