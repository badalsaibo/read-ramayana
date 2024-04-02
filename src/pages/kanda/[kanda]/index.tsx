import Link from 'next/link';
import { ParsedUrlQuery } from 'querystring';
import { GetStaticPaths, GetStaticProps } from 'next';

import Breadcrumbs from 'components/Breadcrumbs';
import GenericHead from 'components/GenericHead';
import DarkModeButton from 'components/DarkModeButton/';

import { PAGE_TITLE } from 'constant';
import { KANDAS } from 'constant/kanda';
import { capitalizeFirstLetter } from 'utils';
import { getChaptersOfKanda } from 'utils/ssg';
import { IChapters, TKanda } from 'interface/kanda';

import Grid from '@mui/joy/Grid';
import Stack from '@mui/joy/Stack';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';

interface Params extends ParsedUrlQuery {
  kanda: TKanda;
}

type TKandaProps = {
  chapters: IChapters[];
  kanda: TKanda;
};

const Kanda = ({ chapters, kanda }: TKandaProps) => {
  return (
    <>
      <GenericHead
        title={`${capitalizeFirstLetter(kanda)} Kanda | ${PAGE_TITLE}`}
        description={`Chapters of ${kanda} kanda in ${PAGE_TITLE}`}
      />
      <Stack spacing={2}>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Breadcrumbs />
          <DarkModeButton />
        </Stack>
        <Typography level="h1" sx={{ textTransform: 'capitalize' }}>
          {kanda} Kanda
        </Typography>
        <Divider />
        <Stack spacing={1} sx={{ mt: 1 }}>
          <Grid container rowSpacing={2} columnSpacing={1}>
            {chapters.map(({ id, title, sarga }) => (
              <Grid xs={6} key={id}>
                <Typography
                  key={id}
                  component={Link}
                  href={`/kanda/${kanda}/${sarga}`}
                  sx={{
                    textDecoration: 'none',
                    display: '-webkit-box',
                    overflow: 'hidden',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 2,
                  }}
                  // noWrap
                >
                  {sarga}.&nbsp;{title}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Stack>

        <Divider />

        <Stack>
          <Grid container spacing={1}>
            {chapters.map(({ id, sarga }) => (
              <Grid xs={2} key={id}>
                <Button variant="soft" fullWidth component={Link} href={`/kanda/${kanda}/${sarga}`}>
                  {sarga}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Stack>
    </>
  );
};

export default Kanda;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: KANDAS.map(({ kanda }) => ({ params: { kanda } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { kanda } = context.params as Params;

  const chapters = getChaptersOfKanda(kanda);

  return {
    props: {
      kanda,
      chapters,
    },
  };
};
