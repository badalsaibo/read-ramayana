import { styled, useTheme } from '@mui/joy';
import JoyBreadcrumbs from '@mui/joy/Breadcrumbs';
import JoyLink from '@mui/joy/Link';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { GoChevronRight } from 'react-icons/go';

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

const Breadcrumbs = () => {
  const theme = useTheme();

  const router = useRouter();
  const linkPath = router.asPath.split('/');
  linkPath.shift();

  const pathArray = linkPath.map((path, i) => {
    return { text: path, url: '/' + linkPath.slice(0, i + 1).join('/') };
  });

  const breadcrumbs = [{ text: 'home', url: '/' }, ...pathArray];

  return (
    <StyledBreadcrumbs separator={<GoChevronRight size={14} color={theme.vars.palette.neutral[500]} />}>
      {breadcrumbs.map(({ text, url }) => (
        <JoyLink component={Link} key={text} href={url} underline="hover" color="neutral">
          {text}
        </JoyLink>
      ))}
    </StyledBreadcrumbs>
  );
};

export default Breadcrumbs;
