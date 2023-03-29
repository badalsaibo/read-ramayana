import { IKandas } from 'interface/kanda';

import Hanuman from 'icons/Hanuman';
import { CgTrees } from 'react-icons/cg';
import { TbSwords, TbBow } from 'react-icons/tb';
import { MdOutlineTempleHindu, MdOutlineHandshake } from 'react-icons/md';

const SIZE = 24;

export const KANDAS: IKandas[] = [
  { kanda: 'bala', url: '/bala' },
  { kanda: 'ayodhya', url: '/ayodhya' },
  { kanda: 'aranya', url: '/aranya' },
  { kanda: 'kishkindha', url: '/kishkindha' },
  { kanda: 'sundara', url: '/sundara' },
  { kanda: 'yuddha', url: '/yuddha' },
];

export const KANDA_ICONS_MAP = {
  bala: <TbBow size={SIZE} />,
  ayodhya: <MdOutlineTempleHindu size={SIZE} />,
  aranya: <CgTrees size={SIZE} />,
  kishkindha: <MdOutlineHandshake size={SIZE} />,
  sundara: <Hanuman size={SIZE} />,
  yuddha: <TbSwords size={SIZE} />,
};
