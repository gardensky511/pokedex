import { AXIOS } from '../logics';
import { GetFilteredPokemonListResponse, GetPokemonListResponse } from '../../components/pages/Home/declarations';

/**
 * @description 全体ポケモンリスト取得
 */
export const getPokemonList = async () => AXIOS.get<GetPokemonListResponse>('/pokemon');

/**
 * @description フィルタリングされたポケモンリスト取得
 */
export const getFilteredPokemonList = async (category: string) =>
  AXIOS.get<GetFilteredPokemonListResponse>(`/${category}`);
