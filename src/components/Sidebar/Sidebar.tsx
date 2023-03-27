import { List, ListItem, Typography, Sheet, Button, ListItemButton, ListItemDecorator } from '@mui/joy';
import Stack from '@mui/joy/Stack';
import { KANDAS } from 'constant/kanda';
import useKanda from 'hooks/provider/useKanda';
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
  const { kanda: kandaRoot, setKanda } = useKanda();
  return (
    <Sheet sx={{ p: 1 }} variant="soft" color="primary">
      <List sx={{ '--ListItem-radius': '8px', '--List-gap': '12px' }}>
        {KANDAS.map(({ kanda, url }) => (
          <ListItem key={url}>
            <ListItemButton
              // component={Link}
              // href={`/kanda/${url}`}
              sx={
                {
                  // '&:not(.Joy-Selected)': {
                  //   color: (theme) => theme.vars.palette.primary[200],
                  // },
                  // '&:hover': {
                  //   color: (theme) => theme.vars.palette.primary[100],
                  //   backgroundColor: (theme) => `rgba(${theme.vars.palette.primary.mainChannel} / 0.15)`,
                  // },
                }
              }
              selected={kanda === kandaRoot}
              variant={kanda === kandaRoot ? 'solid' : 'plain'}
              onClick={() => setKanda(kanda)}
              color="primary"
            >
              <ListItemDecorator sx={{ color: 'inherit' }}>{IconsMap[kanda]}</ListItemDecorator>
              <Typography
                textTransform="capitalize"
                fontWeight={400}
                sx={{ fontFamily: 'var(--joy-fontFamily-display)', color: 'inherit' }}
              >
                {kanda}
              </Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Sheet>
  );
};

export default Sidebar;
