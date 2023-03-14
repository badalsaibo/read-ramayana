import { GetStaticPaths, GetStaticProps } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';

import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import { IParams, IPath } from './interface';
import { IChapterMetadata, TKanda } from '../interface';
import { getParsedMarkdownContent } from './utils/ssg';
import { getAllChaptersOfKanda, getAllKandas } from '../utils/ssg';
import Commentary from 'components/Commentary';
import Markdown from 'components/Markdown';

type TSargaProps = {
  frontMatter: IChapterMetadata;
  source: MDXRemoteSerializeResult;
};

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

  const { frontMatter, content } = getParsedMarkdownContent({ kanda, sarga });

  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter,
      source: mdxSource,
    },
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
