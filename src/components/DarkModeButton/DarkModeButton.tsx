import { useColorScheme } from '@mui/joy';
import IconButton from '@mui/joy/IconButton';
import { useEffect, useRef } from 'react';

import { BiMoon, BiSun } from 'react-icons/bi';

const DarkModeButton = () => {
  const { mode, setMode, systemMode } = useColorScheme();

  const isFirstLoad = useRef(true);

  const currentMode = isFirstLoad.current ? systemMode : mode;

  const onClick = () => {
    setMode(currentMode === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    isFirstLoad.current = false;
  }, []);

  return (
    <IconButton onClick={onClick} variant="plain">
      {currentMode === 'light' ? <BiSun size={32} /> : <BiMoon size={24} />}
    </IconButton>
  );
};

export default DarkModeButton;
