import { AXIOS } from '../logics';
import {
  FilteredPokemonListByTypeResponse,
  FilteredPokemonListResponse,
  GetPokemonListResponse,
} from '../../components/pages/Home/declarations';

/**
 * @description 全体ポケモンリスト取得
 */
export const getPokemonList = () => AXIOS.get<GetPokemonListResponse>('/pokemon');

// todo: type はレスポンス型が違くて一旦分けたけど本当にこれでいいのか(優先度：高)
/**
 * @description フィルタリングされたポケモンリスト取得
 */
export const getFilteredPokemonList = async <T>(category: string) => {
  return AXIOS.get<T>(`/${category}`);
};
