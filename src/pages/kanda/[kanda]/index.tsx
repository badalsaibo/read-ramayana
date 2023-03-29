import { Button, Divider, Grid, Stack, Typography } from '@mui/joy';
import { KANDAS } from 'constant/kanda';
import { IChapters, TKanda } from 'interface/kanda';
import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import { getChaptersOfKanda } from 'utils/ssg';
// import { getAllChaptersOfKanda, getAllKandas } from '../utils/ssg';

interface Params extends ParsedUrlQuery {
  kanda: TKanda;
}

type TKandaProps = {
  chapters: IChapters[];
};

const Kanda = ({ chapters }: TKandaProps) => {
  const router = useRouter();
  const { kanda } = router.query;
  return (
    <Stack spacing={2}>
      <Typography level="h1">Sargas</Typography>
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
    </Stack>
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
      chapters,
    },
  };
};
