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

export interface ISargaContent {
  type: 'verse' | 'commentary' | 'conceptual' | 'sanskrit';
  text: string;
}
