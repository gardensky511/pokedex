import { AXIOS } from '../logics';
import {
  FilteredPokemonListByTypeResponse,
  FilteredPokemonListResponse,
  GetPokemonListResponse,
} from '../../components/pages/Home/declarations';

/**
 * @description 全体ポケモンリスト取得
 */
export const getPokemonList = async () => AXIOS.get<GetPokemonListResponse>('/pokemon');

/**
 * @description color、habitat でフィルタリングされたポケモンリスト取得
 */
export const getFilteredPokemonList = async (category: string) => {
  return AXIOS.get<FilteredPokemonListResponse>(`/${category}`);
};

/**
 * @description type でフィルタリングされたポケモンリスト取得
 */
export const getFilteredPokemonListByType = async (category: string) => {
  return AXIOS.get<FilteredPokemonListByTypeResponse>(`/${category}`);
};
