import Stack from '@mui/joy/Stack';
import IconButton from '@mui/joy/IconButton';
import { RiHome6Line } from 'react-icons/ri';
import { FiChevronLeft } from 'react-icons/fi';
import { HiOutlineBookOpen } from 'react-icons/hi';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavigationBar = () => {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <Stack direction="row">
      <IconButton variant="outlined" onClick={handleBackClick}>
        <FiChevronLeft size={24} />
      </IconButton>

      <IconButton variant="outlined" component={Link} href="/">
        <RiHome6Line size={24} />
      </IconButton>

      <IconButton variant="outlined" component={Link} href="/kanda">
        <HiOutlineBookOpen size={24} />
      </IconButton>
    </Stack>
  );
};

export default NavigationBar;
