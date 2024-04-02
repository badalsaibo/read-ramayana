import Box from '@mui/joy/Box';
import Grid from '@mui/joy/Grid';
import Stack from '@mui/joy/Stack';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';

import { PAGE_TITLE } from 'constant';
import { KANDAS } from 'constant/kanda';
import PaddedButton from 'components/PaddedButton';
import GenericHead from 'components/GenericHead';
import DarkModeButton from 'components/DarkModeButton';

const Kanda = () => {
  return (
    <>
      <GenericHead title={`Kandas | ${PAGE_TITLE}`} description={`List of kandas in ${PAGE_TITLE}`} />
      <Stack gap={1} sx={{ height: '100%' }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography level="h1">Kandas</Typography>
          <DarkModeButton />
        </Stack>
        <Divider sx={{ mb: 1 }} />

        <Typography level="body1">
          In Sanskrit, &quot;kanda&quot; (कण्ड) generally denotes a section or part of something, often used to describe
          a division or chapter in a text.
        </Typography>
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
