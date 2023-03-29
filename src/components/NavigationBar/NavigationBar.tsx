import Stack from '@mui/joy/Stack';
import IconButton from '@mui/joy/IconButton';
import { RiHome6Line } from 'react-icons/ri';
import { IoChevronBack } from 'react-icons/io5';
import { FiChevronLeft } from 'react-icons/fi';
import { HiOutlineBookOpen } from 'react-icons/hi';
import { TbLayoutGrid } from 'react-icons/tb';
import { CgPlayTrackPrevR, CgPlayTrackNextR } from 'react-icons/cg';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Sheet, styled, useTheme, SheetProps } from '@mui/joy';
import type { StackProps } from '@mui/system';

const NavigationBar = () => {
  const theme = useTheme();
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <Container direction="row" component={Sheet} variant="outlined">
      <IconButton
        variant="outlined"
        onClick={handleBackClick}
        sx={{ '@media(max-width: 1023px)': { mr: 'auto' }, '@media(min-width: 1024px)': { mb: 'auto' } }}
      >
        <IoChevronBack size={24} />
      </IconButton>

      <IconButton variant="outlined" component={Link} href="/">
        <CgPlayTrackPrevR size={24} />
      </IconButton>
      <IconButton variant="outlined" component={Link} href="/">
        <CgPlayTrackNextR size={24} />
      </IconButton>

      <IconButton variant="outlined" component={Link} href="/">
        <TbLayoutGrid size={24} />
      </IconButton>

      <IconButton variant="outlined" component={Link} href="/kanda">
        <HiOutlineBookOpen size={24} />
      </IconButton>
    </Container>
  );
};

const Container = styled(Stack)<SheetProps & StackProps>(({ theme }) => ({
  padding: theme.spacing(2),
  bottom: 0,
  position: 'sticky',
  backdropFilter: 'blur(7px)',
  backgroundColor: `hsla(0 0% 100% / 0.8)`,
  borderLeft: 'none',
  '@media (max-width: 1023px)': {
    borderBottom: 'none',
    borderRight: 'none',
  },
  gap: theme.spacing(2),
  '@media (min-width: 1024px)': {
    position: 'fixed',
    left: '-4px',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // height: '200px',
    bottom: '50%',
    transform: 'translateY(50%)',
    borderRadius: '24px',
  },
}));

export default NavigationBar;
