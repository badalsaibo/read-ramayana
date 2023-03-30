import { useColorScheme } from '@mui/joy';
import IconButton from '@mui/joy/IconButton';

import { BiMoon, BiSun } from 'react-icons/bi';

const DarkModeButton = () => {
  const { mode, setMode } = useColorScheme();

  const onClick = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  return (
    <IconButton onClick={onClick} variant="plain">
      {mode === 'light' ? <BiSun size={32} /> : <BiMoon size={24} />}
    </IconButton>
  );
};

export default DarkModeButton;
