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
export type PokemonList = Array<PokemonListItem>;

/**
 * @description ポケモンリスト要素の型
 * @param name - ポケモンの名前
 * @param url - 詳細URL
 */
export type PokemonListItem = {
  name: string;
  url: string;
};
