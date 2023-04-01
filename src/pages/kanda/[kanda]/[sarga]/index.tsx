import Link from 'next/link';
import { ParsedUrlQuery } from 'querystring';
import { GetStaticPaths, GetStaticProps } from 'next';

import Stack from '@mui/joy/Stack';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import { styled } from '@mui/joy/styles';

import { PAGE_TITLE } from 'constant';
import { KANDAS, KANDA_CHAPTER_LENGTH } from 'constant/kanda';
import { SargaContent, TKanda } from 'interface/kanda';
import { getChapterOfKanda, getChaptersOfKanda } from 'utils/ssg';

import Breadcrumbs from 'components/Breadcrumbs';
import RenderContent from 'components/RenderContent';
import HtmlTypography from 'components/HtmlTypography';
import DarkModeButton from 'components/DarkModeButton';
import GenericHead from 'components/GenericHead';

type TSargaProps = {
  id: string;
  kanda: TKanda;
  sarga: string;
  title: string;
  chapter: string;
  overview: string;
  content: SargaContent[];
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

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<TSargaProps, IParams> = async ({ params }) => {
  const { kanda, sarga } = params as IParams;

  const data = getChapterOfKanda({ kanda, sarga });

  return {
    props: { ...data },
  };
};

const Sarga = (props: TSargaProps) => {
  const { title, overview, content, kanda, sarga } = props;

  let prevHref = `/kanda/${kanda}/${Number(sarga) - 1}`;
  let nextHref = `/kanda/${kanda}/${Number(sarga) + 1}`;

  const isFirstChapter = Number(sarga) === 1;
  const isLastChapter = Number(sarga) === KANDA_CHAPTER_LENGTH[kanda];

  if (isFirstChapter) {
    const currKandaIndex = KANDAS.findIndex(({ kanda: _kanda }) => _kanda === kanda);
    const prevKandaIndex = (currKandaIndex - 1) % KANDAS.length;
    console.log(prevKandaIndex);
    const { kanda: prevKanda } = KANDAS.slice(prevKandaIndex)[0];
    prevHref = `/kanda/${prevKanda}/${KANDA_CHAPTER_LENGTH[prevKanda]}`;
  }

  if (isLastChapter) {
    const currKandaIndex = KANDAS.findIndex(({ kanda: _kanda }) => _kanda === kanda);
    const nextKandaIndex = (currKandaIndex + 1) % KANDAS.length;
    const { kanda: nextKanda } = KANDAS.slice(nextKandaIndex)[0];
    nextHref = `/kanda/${nextKanda}/1`;
  }

  return (
    <>
      <GenericHead title={`${title} | ${PAGE_TITLE}`} description={overview} />
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Breadcrumbs />
          <DarkModeButton />
        </Stack>
        <HtmlTypography level="h2" component="h1">
          {title}
        </HtmlTypography>
        <Stack gap={2}>
          <Divider />
          <HtmlTypography>{overview}</HtmlTypography>
          <Divider />
          <Stack>
            {content.map((props, idx) => (
              <RenderContent {...props} key={idx} />
            ))}
          </Stack>
          <Stack direction="row" gap={2}>
            <Stack sx={{ flex: 1 }}>
              <Button size="lg" sx={{ py: 3 }} variant="outlined" component={Link} href={prevHref} color="neutral">
                Prev
              </Button>
            </Stack>

            <Stack sx={{ flex: 1 }}>
              <Button size="lg" sx={{ py: 3 }} variant="outlined" component={Link} href={nextHref} color="neutral">
                Next
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};

export default Sarga;

Sarga.isSarga = true;

const Container = styled(Stack)(() => ({}));
