import { TKanda } from 'pages/kanda/interface';
import { ParsedUrlQuery } from 'querystring';


export interface IParams extends ParsedUrlQuery {
    kanda: TKanda;
    sarga: string;
  }
  
  export interface IPath {
    params: IParams;
  }
  