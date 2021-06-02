import { createSelector } from 'reselect';
import { RootState } from '../store';
import { FormattedPokemonDetail, GetPokemonDetailResponse } from '../../components/pages/Detail/declarations';

export const pokemonDetailSelector = createSelector<RootState, GetPokemonDetailResponse, FormattedPokemonDetail>(
  (state) => state.pokemonDetail.pokemonDetail,
  (pokemonDetail) => {
    const { abilities, height, id, name, stats, types, weight, moves } = pokemonDetail;

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
        // todo: 技配列からランダムに5つを選ぶようにする(優先度：中)
        moves: moves.map((move) => move.move.name).slice(0, 5),
      },
    };
  },
);
