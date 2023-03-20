import { GetStaticPaths, GetStaticPathsResult, GetStaticProps } from 'next';

import Stack from '@mui/joy/Stack';
import { KANDAS } from 'constant/kanda';
import { ISargaContent, TKanda } from 'interface/kanda';
import { ParsedUrlQuery } from 'querystring';
import { getChapterOfKanda, getChaptersOfKanda } from 'utils/ssg';
import HtmlTypography from 'components/HtmlTypography';

type TSargaProps = {
  id: string;
  kanda: TKanda;
  sarga: string;
  title: string;
  chapter: string;
  overview: string;
  content: ISargaContent[];
};

interface IParams extends ParsedUrlQuery {
  kanda: TKanda;
  sarga: string;
}

interface IPath {
  params: IParams;
}

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

  const data = getChapterOfKanda({ kanda, sarga });

  return {
    props: { ...data },
  };
};

const Sarga = (props: TSargaProps) => {
  const { id, kanda, sarga, title, chapter, overview, content } = props;
  return (
    <Stack>
      <HtmlTypography level="body1">{overview}</HtmlTypography>
    </Stack>
  );
};

export default Sarga;
