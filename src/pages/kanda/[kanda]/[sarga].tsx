import { Typography } from '@mui/joy';
import { GetStaticPaths, GetStaticProps } from 'next';
import { TKanda } from '../interface';
import getAllKandas, { getAllChaptersOfKanda } from '../utils/ssg';
import { IParams, IPath } from './interface';
import { getParsedMarkdownContent } from './utils/ssg';

type TSargaProps = {};

// /[kanda]/[sarga]
export const getStaticPaths: GetStaticPaths<IParams> = async () => {
  const allKandas = getAllKandas() as TKanda[];

  let paths: IPath[] = [];

  allKandas.forEach((kanda) => {
    const chapters = getAllChaptersOfKanda(kanda);

    chapters.forEach(({ slug }) => {
      paths.push({ params: { kanda, sarga: slug } });
    });
  });

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps<TSargaProps, IParams> = async ({ params }) => {
  const { kanda, sarga } = params as IParams;

  const processedContent = getParsedMarkdownContent({ kanda, sarga });

  return {
    props: {},
  };
};

const Sarga = () => {
  return <Typography>Hello Sarga</Typography>;
};

export default Sarga;
