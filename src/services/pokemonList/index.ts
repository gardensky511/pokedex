import { AXIOS } from '../logics';
import { GetPokemonListResponse } from '../../components/pages/Home/declarations';

/**
 * @description 全体ポケモンリスト取得
 */
export const getPokemonList = async () => AXIOS.get<GetPokemonListResponse>('/pokemon');
