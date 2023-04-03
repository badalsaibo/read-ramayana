import { useColorScheme } from '@mui/joy/styles';
import IconButton from '@mui/joy/IconButton';

import { BiMoon, BiSun } from 'react-icons/bi';
import HydrationResolver from 'components/HydrationResolver/HydrationResolver';

const DarkModeButton = () => {
  const { mode, setMode, systemMode } = useColorScheme();

  const currentMode = mode === 'system' ? systemMode ?? mode : mode;

  const onClick = () => {
    setMode(currentMode === 'light' ? 'dark' : 'light');
  };

  return (
    <HydrationResolver>
      <IconButton onClick={onClick} variant="plain">
        {currentMode === 'light' ? <BiSun size={32} /> : <BiMoon size={24} />}
      </IconButton>
    </HydrationResolver>
  );
};

export default DarkModeButton;
