import Box from '@mui/joy/Box';
import Grid from '@mui/joy/Grid';
import { styled, useTheme } from '@mui/joy';
import Stack from '@mui/joy/Stack';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';

import { PAGE_TITLE } from 'constant';
import { KANDAS } from 'constant/kanda';
import PaddedButton from 'components/PaddedButton';
import GenericHead from 'components/GenericHead';

const Kanda = () => {
  return (
    <>
      <GenericHead title={`Kandas | ${PAGE_TITLE}`} description={`List of kandas in ${PAGE_TITLE}`} />
      <Stack gap={1} sx={{ height: '100%' }}>
        <Stack direction="row" alignItems="center">
          <Typography level="h1">Kandas</Typography>
        </Stack>
        <Divider sx={{ mb: 1 }} />
        <Box sx={{ my: 'auto' }}>
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
    </>
  );
};

export default Kanda;
