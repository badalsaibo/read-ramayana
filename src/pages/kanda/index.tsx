import { Typography } from '@mui/joy';
import Grid from '@mui/joy/Grid';
import { Box, Divider, Stack } from '@mui/joy';
import PaddedButton from 'components/PaddedButton';

const KANDAS = [
  { kanda: 'bala' },
  { kanda: 'ayodhya' },
  { kanda: 'aranya' },
  { kanda: 'kishkindha' },
  { kanda: 'sundara' },
  { kanda: 'Yuddha' },
];

const Kanda = () => {
  return (
    <Stack spacing={1}>
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
  );
};

export default Kanda;
