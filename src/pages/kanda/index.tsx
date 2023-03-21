import Box from '@mui/joy/Box';
import Grid from '@mui/joy/Grid';
import Stack from '@mui/joy/Stack';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';

import Breadcrumbs from 'components/Breadcrumbs';
import PaddedButton from 'components/PaddedButton';
import { KANDAS } from 'constant/kanda';

const Kanda = () => {
  return (
    <Stack spacing={1}>
      <Typography level="h1">Kandas</Typography>
      <Divider sx={{ mb: 1 }} />
      <Box>
        <Grid container spacing={2}>
          {KANDAS.map(({ kanda, url }) => (
            <Grid key={kanda} xs={6}>
              <PaddedButton href={`/kanda${url}`}>{kanda}</PaddedButton>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Stack>
  );
};

export default Kanda;
