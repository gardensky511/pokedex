import { createSelector } from 'reselect';
import { RootState } from '../store';
import { PokemonListState } from '../../components/pages/Home/declarations';

export const pokemonListSelector = createSelector<RootState, PokemonListState, Array<{ name: string; url: string }>>(
  (state) => state.pokemonList,
  (pokemonList) => pokemonList.pokemonList,
);
