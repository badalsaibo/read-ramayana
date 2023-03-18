import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { DIR_KANDAS } from 'constant/directory';
import { IChapterMetadata, TKanda } from '../interface';


const getDir = (kanda: TKanda) => path.join(DIR_KANDAS, '/', kanda);

export const getAllChaptersOfKanda = (kanda: TKanda): IChapterMetadata[] => {
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

  return chapterMetadatas.sort(({sarga: sargaA}, {sarga: sargaB}) => Number(sargaA) - Number(sargaB));
};


export const getAllKandas = () => {
  const fileNames = fs.readdirSync(DIR_KANDAS);

  return fileNames;
}
 