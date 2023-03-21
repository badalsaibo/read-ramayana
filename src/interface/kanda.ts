export type TKanda = 'bala' | 'ayodhya' | 'aranya' | 'kishkindha' | 'sundara' | 'yuddha';

export interface IChapters {
  id: string;
  kanda: string;
  sarga: string;
  chapter: string;
  title: string;
}

export interface IKandas {
  kanda: TKanda;
  url: string;
}

export type SargaContentType = 'verse' | 'commentary' | 'conceptual' | 'sanskrit'
export interface SargaContent {
  type: SargaContentType;
  text: string;
}
