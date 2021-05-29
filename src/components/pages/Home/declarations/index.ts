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
export type PokemonList = Array<{
  name: string;
  url: string;
}>;

export type FormattedPokemonList = Array<{
  name: string;
  imageUrl: string;
  id: number;
}>;
