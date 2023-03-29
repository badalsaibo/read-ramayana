import { GetStaticPaths, GetStaticPathsResult, GetStaticProps } from 'next';

import Stack from '@mui/joy/Stack';
import { KANDAS } from 'constant/kanda';
import { SargaContent, TKanda } from 'interface/kanda';
import { ParsedUrlQuery } from 'querystring';
import { getChapterOfKanda, getChaptersOfKanda } from 'utils/ssg';
import HtmlTypography from 'components/HtmlTypography';
import ArrowHr from 'components/ArrowHr';
import RenderContent from 'components/RenderContent';
import { Box, Button, Chip, Divider, Sheet, styled, Typography } from '@mui/joy';
import { TbLayoutGrid } from 'react-icons/tb';
import { HiOutlineBookOpen } from 'react-icons/hi';
import Breadcrumbs from 'components/Breadcrumbs';
import Link from 'next/link';

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
  const { title, overview, content, kanda, sarga } = props;

  const prevHref = `/kanda/${kanda}/${Number(sarga) - 1}`;
  const nextHref = `/kanda/${kanda}/${Number(sarga) + 1}`;

  const renderPrevButton = Number(sarga) > 1;

  return (
    <Container>
      <Breadcrumbs />
      <HtmlTypography level="h2" component="h1">
        {title}
      </HtmlTypography>
      <Stack>
        <Divider />
        <HtmlTypography>{overview}</HtmlTypography>
        <Divider />
        <Stack>
          {content.map((props, idx) => (
            <RenderContent {...props} key={idx} />
          ))}
        </Stack>
        <Stack direction="row" gap={2}>
          {renderPrevButton && (
            <Stack sx={{ flex: 1 }}>
              <Button size="lg" sx={{ py: 3 }} variant="outlined" component={Link} href={prevHref} color="neutral">
                Prev
              </Button>
            </Stack>
          )}

          <Stack sx={{ flex: 1 }}>
            <Button size="lg" sx={{ py: 3 }} variant="outlined" component={Link} href={nextHref} color="neutral">
              Next
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Sarga;

Sarga.isSarga = true;

const Container = styled(Stack)(() => ({}));
