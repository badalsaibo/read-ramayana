import { Stack, Typography } from '@mui/joy';
import { GetStaticPaths, GetStaticProps } from 'next';
import { IChapterMetadata, TKanda } from '../interface';
import { getAllChaptersOfKanda, getAllKandas } from '../utils/ssg';
import { IParams, IPath } from './interface';
import { getParsedMarkdownContent } from './utils/ssg';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { MDXRemote } from 'next-mdx-remote';

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

const Commentary = ({ children }) => <p style={{ backgroundColor: 'red' }}>{children}</p>;

const components = {
  Commentary,
};

const Sarga = ({ frontMatter, source }: TSargaProps) => {
  console.log({ frontMatter, source });
  const { title } = frontMatter;
  return (
    <Stack>
      <Typography level="h1">{title}</Typography>
      <MDXRemote {...source} components={components} />
    </Stack>
  );
};

export default Sarga;
