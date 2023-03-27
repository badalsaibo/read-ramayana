import { List, ListItem, Typography, Sheet, Button, ListItemButton, ListItemDecorator } from '@mui/joy';
import Stack from '@mui/joy/Stack';
import { KANDAS } from 'constant/kanda';
import Hanuman from 'icons/Hanuman';
import Link from 'next/link';

import { CgTrees } from 'react-icons/cg';
import { MdOutlineTempleHindu, MdOutlineHandshake } from 'react-icons/md';
import { TbSwords, TbBow } from 'react-icons/tb';

const SIZE = '20px';

const IconsMap = {
  bala: <TbBow size={SIZE} />,
  ayodhya: <MdOutlineTempleHindu size={SIZE} />,
  aranya: <CgTrees size={SIZE} />,
  kishkindha: <MdOutlineHandshake size={SIZE} />,
  sundara: <Hanuman size={SIZE} />,
  yuddha: <TbSwords size={SIZE} />,
};

const Sidebar = () => {
  return (
    <Stack>
      <List>
        {KANDAS.map(({ kanda, url }) => (
          <ListItem key={url}>
            <ListItemButton component={Link} href={`/kanda/${url}`}>
              <ListItemDecorator>{IconsMap[kanda]}</ListItemDecorator>
              <Typography
                textTransform="capitalize"
                fontWeight={400}
                sx={{ fontFamily: 'var(--joy-fontFamily-display)' }}
              >
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
