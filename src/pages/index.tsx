import Head from 'next/head';
import Grid from '@mui/joy/Grid';
import Typography from '@mui/joy/Typography';
import PaddedButton from 'components/PaddedButton';
import { Box, Divider, Stack } from '@mui/joy';

const KANDAS = [
  { kanda: 'bala' },
  { kanda: 'ayodhya' },
  { kanda: 'aranya' },
  { kanda: 'kishkindha' },
  { kanda: 'sundara' },
  { kanda: 'Yuddha' },
];

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
        <Typography level="h1">Kandas</Typography>
        <Divider sx={{ mb: 1 }} />
        <Box>
          <Grid container spacing={2}>
            {KANDAS.map(({ kanda }) => (
              <Grid key={kanda} xs={6}>
                <PaddedButton>{kanda}</PaddedButton>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Stack>
    </>
  );
}
