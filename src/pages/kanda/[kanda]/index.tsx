import { Stack, Typography } from '@mui/joy';
import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { ParsedUrlQuery } from 'querystring';
import { IChapterMetadata, TKanda } from '../interface';
import getAllKandas, { getAllChaptersOfKanda } from '../utils/ssg';

interface Params extends ParsedUrlQuery {
  kanda: TKanda;
}

type TKandaProps = {
  chapters: IChapterMetadata[];
};

const Kanda = ({ chapters }: TKandaProps) => {
  return (
    <Stack>
      <Typography level="h1">Chapters</Typography>
      <Stack>
        {chapters.map(({ id, title, sarga, slug }) => (
          <Typography key={id} component={Link} href={`/${slug}`}>
            {sarga}.{title}
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
