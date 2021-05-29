import { baseImageUrl } from '../../services/logics';

export const getPokemonImageURL = (id: number) => `${baseImageUrl}${id}.png`;
export const getPokemonId = (url: string) => Number(url.split('/').slice(-2)[0]);
