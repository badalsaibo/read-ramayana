import { GetStaticPaths, GetStaticPathsResult, GetStaticProps } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';

import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import Commentary from 'components/Commentary';
import Markdown from 'components/Markdown';
import { KANDAS } from 'constant/kanda';
import { IChapters, TKanda } from 'interface/kanda';
import { ParsedUrlQuery } from 'querystring';
import { getChaptersOfKanda } from 'utils/ssg';

type TSargaProps = {};

interface IParams extends ParsedUrlQuery {
  kanda: TKanda;
  sarga: string;
}

interface IPath {
  params: IParams;
}

// /[kanda]/[sarga]
// /[kanda]/[sarga]
export const getStaticPaths: GetStaticPaths<IParams> = async () => {
  let paths: IPath[] = [];

  KANDAS.forEach(({ kanda }) => {
    const chapters = getChaptersOfKanda(kanda);

    chapters.forEach(({ sarga }) => {
      paths.push({ params: { kanda, sarga } });
    });
  });

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps<TSargaProps, IParams> = async ({ params }) => {
  const { kanda, sarga } = params as IParams;

  return {
    props: {},
  };
};

const Sarga = ({ frontMatter, source }: TSargaProps) => {
  console.log({ frontMatter, source });
  const { title } = frontMatter;
  return (
    <Stack>
      <Typography level="h1" fontSize="2.5rem">
        {title}
      </Typography>
      <Markdown {...source} />
    </Stack>
  );
};

export default Sarga;
