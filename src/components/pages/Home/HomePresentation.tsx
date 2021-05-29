import React from 'react';
import styled from 'styled-components';
import { FormattedPokemonList } from './declarations';
import { ListCard } from '../../molecules/ListCard';

type Props = {
  pokemonList: FormattedPokemonList;
};

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
  background-color: #f1c40f;
`;

export const HomePresentation = ({ pokemonList }: Props) => {
  return (
    <List>
      {pokemonList.map((pokemonListItem) => {
        const { id, name, imageUrl } = pokemonListItem;
        return <ListCard id={id} name={name} imageUrl={imageUrl} key={id} />;
      })}
    </List>
  );
};
