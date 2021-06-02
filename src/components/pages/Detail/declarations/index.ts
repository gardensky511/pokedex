import { BasicObject } from '../../Home/declarations';

/**
 * @description ポケモン詳細情報を返すAPIのレスポンス型
 */

export type GetPokemonDetailResponse = {
  abilities: Array<{
    ability: BasicObject;
    is_hidden: boolean;
    slot: number;
  }>;
  base_experience: number;
  forms: Array<object>;
  game_indices: Array<object>;
  height: number;
  held_items: Array<any>;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Array<{
    move: BasicObject;
    version_group_details: Array<object>;
  }>;
  name: string;
  order: number;
  past_types: Array<any>;
  species: Array<object>;
  sprites: Array<object>;
  stats: Array<{
    base_stat: number;
    effort: number;
    stat: BasicObject;
  }>;
  types: Array<{
    slot: number;
    type: BasicObject;
  }>;
  weight: number;
};

/**
 * @description ポケモン詳細情報のstate型
 */
export type GetPokemonDetailState = {
  pokemonDetail: GetPokemonDetailResponse;
};

/**
 * @description 整形したポケモン詳細情報の型
 */
export type FormattedPokemonDetail = {
  pokemonDetail: {
    abilities: Array<string>;
    height: number;
    id: number;
    name: string;
    stats: Array<{
      baseStat: number;
      name: string;
    }>;
    types: Array<string>;
    weight: number;
    moves: Array<string>;
  };
};
