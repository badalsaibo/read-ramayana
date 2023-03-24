import { List, ListItem, Typography, Sheet, Button, ListItemButton, ListItemDecorator } from '@mui/joy';
import Stack from '@mui/joy/Stack';
import { KANDAS } from 'constant/kanda';
import Hanuman from 'icons/Hanuman';
import Link from 'next/link';

import { CgTrees } from 'react-icons/cg';
import { MdOutlineTempleHindu, MdOutlineHandshake } from 'react-icons/md';
import { TbSwords, TbBow } from 'react-icons/tb';

const IconsMap = {
  bala: <TbBow />,
  ayodhya: <MdOutlineTempleHindu />,
  aranya: <CgTrees />,
  kishkindha: <MdOutlineHandshake />,
  sundara: <Hanuman />,
  yuddha: <TbSwords />,
};

const Sidebar = () => {
  return (
    <Stack component={Sheet} variant="outlined">
      <List>
        {KANDAS.map(({ kanda, url }) => (
          <ListItem key={url}>
            <ListItemButton component={Link} href={`/kanda/${url}`}>
              <ListItemDecorator>{IconsMap[kanda]}</ListItemDecorator>
              <Typography textTransform="capitalize" sx={{ fontFamily: 'var(--joy-fontFamily-display)' }}>
                {kanda}
              </Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
};

export default Sidebar;
