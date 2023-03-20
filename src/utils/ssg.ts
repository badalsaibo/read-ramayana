import path from 'path';
import { readFileSync } from 'fs';
import { TKanda, IChapters } from 'interface/kanda';

export const pathToKanda = (kanda: TKanda) => {
  // __data/kanda/aranya/chapters.json
  return path.join(process.cwd(), '__data', 'kanda', kanda);
};

export const getChaptersOfKanda = (kanda: TKanda): IChapters[] => {
  const chaptersFile = path.join(pathToKanda(kanda), 'chapters.json');
  let data = JSON.parse(readFileSync(chaptersFile, 'utf8'));
  return data;
};

export const getChapterOfKanda = ({ kanda, sarga }: { kanda: TKanda; sarga: string }) => {
  const chapterFile = path.join(pathToKanda(kanda), 'prose', 'chapter', `${sarga}.json`);
  let data = JSON.parse(readFileSync(chapterFile, 'utf8'));
  return data;
};
