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
export type GetFilteredPokemonListResponse = {
  id: number;
  name: string;
  names: Array<{
    language: BasicObject;
    name: string;
  }>;
  pokemon_species: PokemonList;
};
