import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { IChapterMetadata, TKandas } from '../types';

const getDir = (kanda: TKandas) => path.join(process.cwd(), '/src/data/content/kanda/', kanda);

export const getAllChaptersOfKanda = (kanda: TKandas): IChapterMetadata[] => {
  // node library to fetch kanda
  const dir = getDir(kanda);
  const fileNames = fs.readdirSync(dir);

  const chapterMetadatas = fileNames.map((fileName) => {
    const dirOfSingleChapter = path.join(dir, fileName);
    const fileContents = fs.readFileSync(dirOfSingleChapter, 'utf8');

    const { data } = matter(fileContents);

    return {
      slug: fileName.replace(/\.mdx$/, ''),
      id: data.id,
      sarga: data.sarga,
      kanda: data.kanda,
      title: data.title,
    };
  });

  return chapterMetadatas;
};
