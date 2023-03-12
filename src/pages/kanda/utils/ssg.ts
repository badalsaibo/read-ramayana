import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { TKandas } from '../types';

const getDir = (kanda: TKandas) => path.join(process.cwd(), '/src/data/content/kanda/', kanda);

export const getAllChaptersOfKanda = (kanda: TKandas) => {
  // node library to fetch kanda
  const dir = getDir(kanda);
  const chapterNames = fs.readdirSync(dir);

  const eachDir = path.join(dir, chapterNames[0]);
  const fileContents = fs.readFileSync(eachDir, 'utf8');

  const { data } = matter(fileContents);

  console.log({ data });

  console.log(eachDir);

  return chapterNames;
};
