import { Typography } from '@mui/joy';
import { GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { TKandas } from './types';
import { getAllChaptersOfKanda } from './utils/ssg';

interface Params extends ParsedUrlQuery {
  kanda: TKandas;
}

const Kanda = () => {
  return <Typography>Hello, Kanda</Typography>;
};

export default Kanda;

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { kanda: 'bala' } }, { params: { kanda: 'ayodhya' } }],
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
