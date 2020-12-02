import { IImage } from './image';

export interface IResponse{
  total: number;
  totalHits: number;
  hits: IImage[];
}