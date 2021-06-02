import React from 'react';
import styled from 'styled-components';
import { PokemonListCard } from '../../atoms/PokemonListCard';
import { GuidanceText } from '../../atoms/GuidanceText';
import { FormattedPokemonList } from '../../pages/Home/declarations';

type Props = {
  pokemonList: FormattedPokemonList;
};

export const PokemonList = ({ pokemonList }: Props) => {
  if (pokemonList.length !== 0) {
    return (
      <List>
        {pokemonList.map((pokemonListItem) => {
          const { id, name, imageUrl } = pokemonListItem;
          return <PokemonListCard id={id} name={name} imageUrl={imageUrl} key={id} />;
        })}
      </List>
    );
  }
  return <GuidanceText text="No Results (°ロ°)" />;
};

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
`;
