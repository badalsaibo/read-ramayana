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
  bala: TbBow,
  ayodhya: MdOutlineTempleHindu,
  aranya: CgTrees,
  kishkindha: MdOutlineHandshake,
  sundara: Hanuman,
  yuddha: TbSwords,
};

export const KANDA_CHAPTER_LENGTH = {
  bala: 77,
  ayodhya: 119,
  aranya: 75,
  kishkindha: 67,
  sundara: 68,
  yuddha: 128,
};
