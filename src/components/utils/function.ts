import { baseImageUrl } from '../../services/logics';

/**
 * @description ポケモン画像のURLを取得する関数
 * @param id - ポケモンid
 */
export const getPokemonImageURL = (id: number) => `${baseImageUrl}${id}.png`;

/**
 * @description ポケモンリストが返すURLからポケモンidを切り出す関数
 * @param url - ポケモン詳細URL
 */
export const getPokemonId = (url: string) => Number(url.split('/').slice(-2)[0]);
