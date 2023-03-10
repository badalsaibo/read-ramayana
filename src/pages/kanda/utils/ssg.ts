import fs from 'fs';
import path from 'path';
import { TKandas } from '../types';

const getDir = (kanda: TKandas) => path.join(process.cwd(), '/src/data/content/kanda/', kanda);

export const getAllChaptersOfKanda = (kanda: TKandas) => {
  // node library to fetch kanda
  const chapterNames = fs.readdirSync(getDir(kanda));
};
