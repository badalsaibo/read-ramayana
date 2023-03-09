import { Typography } from '@mui/joy';
import { GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';

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

const getAllChaptersOfKanda = (kanda: string) => {
  // node library to fetch kanda
};

interface Params extends ParsedUrlQuery {
  kanda: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { kanda } = context.params as Params;

  const chapters = getAllChaptersOfKanda(kanda);

  return {
    props: {
      chapters,
    },
  };
};
