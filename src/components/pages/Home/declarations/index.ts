import { SEARCH_BY_CATEGORY } from '../../../../const';
import { EmptyArray, EmptyStringOf } from '../../../../declarations';

/**
 * @description APIレスポンスでよく使われるオブジェクトの型
 */
export type BasicObject = {
  name: string;
  url: string;
};

/**
 * @description ポケモンリストの型
 */
export type PokemonList = Array<BasicObject>;

/**
 * @description 初期ポケモンリストを返すAPIのレスポンス型
 */
export type GetPokemonListResponse = {
  count: number;
  next: string;
  previous: null | string;
  results: PokemonList;
};

/**
 * @description ポケモンリストのstate型
 * @param pokemonList - ポケモンリスト
 */
export type PokemonListState = {
  pokemonList: PokemonList;
  isLoaded: boolean;
};

/**
 * @description 整形したポケモンリストの型
 * @property name - ポケモンの名前
 * @property imageUrl - 画像Url
 * @property id - 図鑑番号
 */
export type FormattedPokemonListState = {
  pokemonList: FormattedPokemonList;
  isLoaded: boolean;
};

export type FormattedPokemonList = Array<{
  name: string;
  imageUrl: string;
  id: number;
}>;

type SearchByCategory = typeof SEARCH_BY_CATEGORY;

/**
 * @description 検索カテゴリの大カテゴリの型
 */
export type MajorCategoryText = EmptyStringOf<keyof typeof SEARCH_BY_CATEGORY>;

export type SmallCategories = SearchByCategory[keyof SearchByCategory] | EmptyArray;

/**
 * @description 検索カテゴリのstate型
 * @property majorCategory - 大カテゴリ
 * @property smallCategory - 小カテゴリ
 */
export type SearchCategory = {
  majorCategory: MajorCategoryText;
  smallCategory: SmallCategories;
};

/**
 * @description フィルタリングされたポケモンリストを返すAPIのレスポンス型
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

/**
 * @description タイプフィルタリングされたポケモンリストを返すAPIのレスポンス型
 */
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
