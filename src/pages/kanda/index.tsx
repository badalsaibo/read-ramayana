import { Breadcrumbs, styled, Typography } from '@mui/joy';
import Grid from '@mui/joy/Grid';
import { Box, Divider, Stack } from '@mui/joy';
import PaddedButton from 'components/PaddedButton';
import Link from 'next/link';
import JoyLink from '@mui/joy/Link';

import ChevronRightCircle from 'icons/ChevronRightCircle';

const KANDAS = [
  { kanda: 'bala', url: '/bala' },
  { kanda: 'ayodhya', url: '/ayodhya' },
  { kanda: 'aranya', url: '/aranya' },
  { kanda: 'kishkindha', url: '/kishkindha' },
  { kanda: 'sundara', url: '/sundara' },
  { kanda: 'yuddha', url: '/yuddha' },
];

const BREADCRUMBS = [
  { text: 'home', url: '/' },
  { text: 'kandas', url: '/kanda' },
];

const Kanda = () => {
  return (
    <Stack spacing={1}>
      <StyledBreadcrumbs separator={<ChevronRightCircle size={14} />}>
        {BREADCRUMBS.map(({ text, url }) => (
          <JoyLink component={Link} key={text} href={url} underline="hover" color="neutral">
            {text}
          </JoyLink>
        ))}
      </StyledBreadcrumbs>
      <Typography level="h1">Kandas</Typography>
      <Divider sx={{ mb: 1 }} />
      <Box>
        <Grid container spacing={2}>
          {KANDAS.map(({ kanda, url }) => (
            <Grid key={kanda} xs={6}>
              <PaddedButton href={`/kanda/${url}`}>{kanda}</PaddedButton>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Stack>
  );
};

export default Kanda;

const StyledBreadcrumbs = styled(Breadcrumbs)(() => ({
  padding: 0,
}));
