import { createSelector } from 'reselect';
import { RootState } from '../store';
import { FormattedPokemonDetail, GetPokemonDetailResponse } from '../../components/pages/Home/declarations';

export const pokemonDetailSelector = createSelector<
  RootState,
  GetPokemonDetailResponse,
  boolean,
  FormattedPokemonDetail
>(
  (state) => state.pokemonDetail.pokemonDetail,
  (state) => state.pokemonDetail.isModalOpened,
  (pokemonDetail, isModalOpened) => {
    const { abilities, height, id, name, stats, types, weight } = pokemonDetail;

    return {
      pokemonDetail: {
        abilities: abilities.map((ability) => ability.ability.name),
        height,
        id,
        name,
        stats: stats.map((stat) => {
          return { baseStat: stat.base_stat, name: stat.stat.name };
        }),
        types: types.map((type) => type.type.name),
        weight,
      },
      isModalOpened,
    };
  },
);
