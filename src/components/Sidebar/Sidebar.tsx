import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import ListItemButton from '@mui/joy/ListItemButton';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import { KANDAS } from 'constant/kanda';
import useKanda from 'hooks/provider/useKanda';
import Hanuman from 'icons/Hanuman';

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
