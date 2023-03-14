import type { MDXComponents } from 'mdx/types';
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote';

import Box from '@mui/joy/Box';
import { styled } from '@mui/joy/styles';
import Typography from '@mui/joy/Typography';
import Commentary from 'components/Commentary';

type Props = {
  children: React.ReactElement;
};

export default function Markdown(props: MDXRemoteProps) {
  const components = {
    h1: (props: Props) => <Typography level="h1" component="h2" fontSize="2rem" {...props} />,
    h2: (props: Props) => <Typography level="h2" {...props} />,
    h3: (props: Props) => <Typography level="h3" {...props} />,
    h4: (props: Props) => <Typography level="h4" {...props} />,
    h5: (props: Props) => <Typography level="h5" {...props} />,
    h6: (props: Props) => <Typography level="h6" {...props} />,
    p: (props: Props) => <Typography level="body1" {...props} />,
    Commentary,
  } as MDXComponents;

  return (
    <Root>
      <MDXRemote {...props} components={components} />
    </Root>
  );
}

const Root = styled(Box)(({ theme }) => ({
  paddingBottom: theme.spacing(10),
  '& p': {
    marginBottom: '1rem',
    marginTop: '1rem',
  },
  '& h1': {
    marginBottom: theme.spacing(3),
  },
  '& h2': {
    marginTop: theme.spacing(4),
  },
  '& h3': {
    marginTop: theme.spacing(4),
  },
  '& h4': {
    marginTop: theme.spacing(3),
  },
  '& h5': {
    marginTop: theme.spacing(2),
  },
  '& h6': {
    marginTop: theme.spacing(1),
  },
}));
