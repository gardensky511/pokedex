import { SEARCH_BY_CATEGORY } from '../../../../const';
import { EmptyStringOf } from '../../../../declarations';

/**
 * @description 基本的なオブジェクトの型
 */
export type BasicObject = {
  name: string;
  url: string;
};

/**
 * @description ポケモンリストを返すAPIのレスポンスの型
 */
export type GetPokemonListResponse = {
  count: number;
  next: string;
  previous: null;
  results: PokemonList;
};

/**
 * @description GetPokemonListResponse から results だけピックした型
 * @param pokemonList - ポケモンリスト
 */
export type PokemonListState = {
  pokemonList: PokemonList;
};

/**
 * @description ポケモンリストの型
 */
export type PokemonList = Array<BasicObject>;

/**
 * @description 整形したポケモンリストの型
 * @property name - ポケモンの名前
 * @property imageUrl - 画像Url
 * @property id - 図鑑番号
 */
export type FormattedPokemonList = Array<{
  name: string;
  imageUrl: string;
  id: number;
}>;

/**
 * @description 検索カテゴリの大カテゴリの型
 */
export type MajorCategory = EmptyStringOf<keyof typeof SEARCH_BY_CATEGORY>;

/**
 * @description 検索カテゴリの型
 * @property majorCategory - 大カテゴリ
 * @property smallCategory - 小カテゴリ
 */
export type SearchCategory = {
  majorCategory: MajorCategory;
  smallCategory: Array<string>;
};

/**
 * @description フィルタリングしてAPIから取得したポケモンリストの型
 */
export type FilteredPokemonListResponse = {
  id: number;
  name: string;
  names: Array<{
    language: BasicObject;
    name: string;
  }>;
  pokemon_species: PokemonList;
};

export type FilteredPokemonListByTypeResponse = {
  damage_relations: object;
  game_indices: Array<object>;
  generation: object;
  id: number;
  move_damage_class: object;
  moves: Array<object>;
  name: string;
  names: Array<object>;
  pokemon: Array<{
    pokemon: BasicObject;
    slot: number;
  }>;
};

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
  moves: Array<object>;
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

export type GetPokemonDetailState = {
  pokemonDetail: GetPokemonDetailResponse;
  isModalOpened: boolean;
};

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
  };
  isModalOpened: boolean;
};
