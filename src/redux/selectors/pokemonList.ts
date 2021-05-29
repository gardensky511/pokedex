import { createSelector } from 'reselect';
import { RootState } from '../store';
import { PokemonList, FormattedPokemonList } from '../../components/pages/Home/declarations';
import { getPokemonId, getPokemonImageURL } from '../../components/utils/function';

export const pokemonListSelector = createSelector<RootState, PokemonList, FormattedPokemonList>(
  (state) => state.pokemonList.pokemonList,
  (pokemonList) => {
    return pokemonList.map((pokemonListItem) => ({
      name: pokemonListItem.name,
      imageUrl: getPokemonImageURL(getPokemonId(pokemonListItem.url)),
      id: getPokemonId(pokemonListItem.url),
    }));
  },
);
