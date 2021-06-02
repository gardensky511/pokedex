import { createSelector } from 'reselect';
import { RootState } from '../store';
import { PokemonList, FormattedPokemonListState } from '../../components/pages/Home/declarations';
import { getPokemonId, getPokemonImageURL } from '../../components/utils/function';

export const pokemonListSelector = createSelector<RootState, PokemonList, boolean, FormattedPokemonListState>(
  (state) => state.pokemonList.pokemonList,
  (state) => state.pokemonList.isLoaded,
  (pokemonList, isLoaded) => {
    return {
      pokemonList: pokemonList.map((pokemonListItem) => ({
        name: pokemonListItem.name,
        imageUrl: getPokemonImageURL(getPokemonId(pokemonListItem.url)),
        id: getPokemonId(pokemonListItem.url),
      })),
      isLoaded,
    };
  },
);
