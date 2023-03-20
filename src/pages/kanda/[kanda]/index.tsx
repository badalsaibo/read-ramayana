import { Divider, Stack, Typography } from '@mui/joy';
import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import { IChapterMetadata, TKanda } from 'pages/kanda/interface';
// import { getAllChaptersOfKanda, getAllKandas } from '../utils/ssg';

interface Params extends ParsedUrlQuery {
  kanda: TKanda;
}

type TKandaProps = {
  chapters: IChapterMetadata[];
};

const Kanda = ({ chapters }: TKandaProps) => {
  const router = useRouter();
  const { kanda } = router.query;
  return (
    <Stack>
      <Typography level="h1">Chapters</Typography>
      <Divider />
      <Stack spacing={1} sx={{ mt: 1 }}>
        {chapters.map(({ id, title, sarga, slug }) => (
          <Typography
            key={id}
            component={Link}
            href={`/kanda/${kanda}/${slug}`}
            sx={{ textDecoration: 'none' }}
            fontFamily="var(--joy-fontFamily-display)"
          >
            {sarga}.&nbsp;{title}
          </Typography>
        ))}
      </Stack>
    </Stack>
  );
};

export default Kanda;

export const getStaticPaths: GetStaticPaths = async () => {
  const allKandas = getAllKandas();

  return {
    paths: allKandas.map((kanda) => ({ params: { kanda } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { kanda } = context.params as Params;

  const chapters = getAllChaptersOfKanda(kanda);

  return {
    props: {
      chapters,
    },
  };
};
