import { styled, useTheme } from '@mui/joy';
import JoyBreadcrumbs from '@mui/joy/Breadcrumbs';
import ChevronRightCircle from 'icons/ChevronRightCircle';
import JoyLink from '@mui/joy/Link';
import Link from 'next/link';

interface IBreadcrumbsData {
  text: string;
  url: string;
}

type TBreadcrumbsProps = {
  data: IBreadcrumbsData[];
};

const StyledBreadcrumbs = styled(JoyBreadcrumbs)(() => ({
  padding: 0,
}));

const Breadcrumbs = ({ data }: TBreadcrumbsProps) => {
  const theme = useTheme();
  return (
    <StyledBreadcrumbs separator={<ChevronRightCircle size={14} color={theme.vars.palette.neutral[500]} />}>
      {data.map(({ text, url }) => (
        <JoyLink component={Link} key={text} href={url} underline="hover" color="neutral">
          {text}
        </JoyLink>
      ))}
    </StyledBreadcrumbs>
  );
};

export default Breadcrumbs;
