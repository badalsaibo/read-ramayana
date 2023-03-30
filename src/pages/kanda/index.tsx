import Box from '@mui/joy/Box';
import Grid from '@mui/joy/Grid';
import Stack from '@mui/joy/Stack';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';

import { KANDAS } from 'constant/kanda';
import PaddedButton from 'components/PaddedButton';
import Head from 'next/head';

const Kanda = () => {
  return (
    <Stack spacing={1}>
      <Head></Head>
      <Stack direction="row" alignItems="center">
        <Typography level="h1">Kandas</Typography>
      </Stack>
      <Divider sx={{ mb: 1 }} />
      <Box>
        <Grid container spacing={2}>
          {KANDAS.map(({ kanda, url }) => (
            <Grid key={kanda} xs={6}>
              <PaddedButton href={`/kanda${url}`} kanda={kanda}>
                {kanda}
              </PaddedButton>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Stack>
  );
};

export default Kanda;
