import { Typography } from '@mui/joy';
import Kanda from 'components/Kanda';
import Head from 'next/head';

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
      <Typography level="h1">Heading1</Typography>
      <Typography level="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ad, molestias tenetur quam ipsa nostrum hic autem
        quaerat harum at aspernatur, repellendus illo iusto soluta tempora. Fugit, numquam! Illum, dolore.
      </Typography>
      <Kanda>Home</Kanda>
    </>
  );
}
