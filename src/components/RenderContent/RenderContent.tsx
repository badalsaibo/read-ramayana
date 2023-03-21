import { Stack, Typography } from '@mui/joy';
import Commentary from 'components/Commentary';
import HtmlTypography from 'components/HtmlTypography';
import { SargaContentType, SargaContent } from 'interface/kanda';

type RenderContentProps = SargaContent & {
  content?: SargaContent[];
};

const RenderContent = (props: RenderContentProps) => {
  const { type, text, content } = props;

  if (type === 'conceptual') {
    return (
      <Stack>
        <Typography>Conceptual</Typography>
        <HtmlTypography>{text}</HtmlTypography>
      </Stack>
    );
  }

  if (type === 'commentary') {
    return (
      <Commentary>
        {/* <Typography>Commentary</Typography> */}
        <HtmlTypography>{text}</HtmlTypography>
      </Commentary>
    );
  }

  return <HtmlTypography>{text}</HtmlTypography>;
};

export default RenderContent;
