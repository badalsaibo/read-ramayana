import { styled } from '@mui/joy/styles';
import type { TypographySystem } from '@mui/joy/styles';

type HtmlTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

const joyTypesToHtmlTags = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  body1: 'p',
  body2: 'p',
  body3: 'p',
  body4: 'p',
  body5: 'p',
  display1: 'h1',
  display2: 'h2',
};

const HtmlTypography = ({ children, level = 'body1' }: { children: string; level?: keyof TypographySystem }) => {
  const htmlTag = joyTypesToHtmlTags[level] as keyof HTMLElementTagNameMap;
  const ChildrenTypography = styled(htmlTag, { shouldForwardProp: (prop) => prop !== 'level' })<{
    level: keyof TypographySystem;
  }>(({ theme, level }) => ({
    ...theme.typography[level],
  }));

  return <ChildrenTypography dangerouslySetInnerHTML={{ __html: children }} level={level} />;
};

export default HtmlTypography;
