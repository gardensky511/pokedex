/**
 * @description ポケモンリストを返すAPIのレスポンス型
 */
export type GetPokemonListResponse = {
  count: number;
  next: string;
  previous: null;
  results: Array<{ name: string; url: string }>;
};

/**
 * @description ポケモンリストの state
 * @param pokemonList - ポケモンリスト
 */
export type PokemonListState = {
  pokemonList: Array<{ name: string; url: string }>;
};
