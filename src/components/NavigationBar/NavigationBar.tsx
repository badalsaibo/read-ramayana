import Link from 'next/link';

import Stack from '@mui/joy/Stack';
import Sheet from '@mui/joy/Sheet';
import IconButton from '@mui/joy/IconButton';
import type { StackProps } from '@mui/system';
import { styled, SheetProps } from '@mui/joy';

import { useRouter } from 'next/router';
import { TbLayoutGrid } from 'react-icons/tb';
import { IoChevronBack } from 'react-icons/io5';
import { CgPlayTrackPrevR, CgPlayTrackNextR } from 'react-icons/cg';
import { KANDAS, KANDA_CHAPTER_LENGTH } from 'constant/kanda';
import { TKanda } from 'interface/kanda';
import { IoShareSocial } from 'react-icons/io5';
import { TiHome } from 'react-icons/ti';
import { useNotify } from 'provider/NotifyProvider';

const NavigationBar = ({ isSarga = false }: { isSarga?: boolean }) => {
  const router = useRouter();
  const { notify } = useNotify();

  const handleBackClick = () => {
    router.back();
  };

  const handleShareCopyUrl = () => {
    console.log('hell', router.asPath, router.basePath);
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        notify({
          text: 'Copied url!',
          timeout: 1000,
        });
      })
      .catch((err) => console.error(err));
  };

  const linkPath = router.asPath.split('/');

  const sarga = linkPath.pop();

  const kanda = linkPath.pop() as TKanda;

  const isFirstChapter = Number(sarga) === 1;
  const isLastChapter = Number(sarga) === KANDA_CHAPTER_LENGTH[kanda];

  let prevHref = `/kanda/${kanda}/${Number(sarga) - 1}`;
  let nextHref = `/kanda/${kanda}/${Number(sarga) + 1}`;

  if (isFirstChapter) {
    const currKandaIndex = KANDAS.findIndex(({ kanda: _kanda }) => _kanda === kanda);
    const prevKandaIndex = (currKandaIndex - 1) % KANDAS.length;
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
    <Container direction="row" component={Sheet} variant="outlined">
      <IconButton variant="outlined" onClick={handleBackClick} sx={{ '@media(max-width: 1023px)': { mr: 'auto' } }}>
        <IoChevronBack size={24} />
      </IconButton>

      {isSarga ? (
        <>
          <IconButton variant="outlined" component={Link} href={prevHref}>
            <CgPlayTrackPrevR size={24} />
          </IconButton>

          <IconButton variant="outlined" component={Link} href={`/kanda/${kanda}`}>
            <TbLayoutGrid size={24} />
          </IconButton>

          <IconButton variant="outlined" component={Link} href={nextHref}>
            <CgPlayTrackNextR size={24} />
          </IconButton>

          <IconButton variant="outlined" onClick={handleShareCopyUrl}>
            <IoShareSocial size={24} />
          </IconButton>
        </>
      ) : (
        <IconButton variant="outlined" component={Link} href="/">
          <TiHome size={24} />
        </IconButton>
      )}
    </Container>
  );
};

const Container = styled(Stack)<SheetProps & StackProps>(({ theme }) => ({
  padding: theme.spacing(2),
  bottom: 0,
  position: 'fixed',
  backdropFilter: 'blur(7px)',
  backgroundColor: theme.vars.palette.background.navigationBar,
  borderLeft: 'none',
  '@media (max-width: 1023px)': {
    borderBottom: 'none',
    borderRight: 'none',
    right: 0,
    left: 0,
  },
  gap: theme.spacing(2),
  '@media (min-width: 1024px)': {
    left: '-8px',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: '50%',
    transform: 'translateY(50%)',
    borderRadius: '24px',
  },
}));

export default NavigationBar;
