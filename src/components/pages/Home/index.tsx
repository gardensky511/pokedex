import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { SearchArea } from '../../organisms/SearchArea';
import { AppDispatch, useSelector } from '../../../redux/store';
import { pokemonListSelector } from '../../../redux/selectors/pokemonList';
import { fetchPokemonList } from '../../../redux/modules/pokemonList';
import { PokemonList } from '../../molecules/PokemonList';
import { GuidanceText } from '../../atoms/GuidanceText';

// todo:レスポンシブ対応追加(優先度：下)

export const Home = () => {
  const { pokemonList, isLoaded } = useSelector(pokemonListSelector);

  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPokemonList());
  }, []);

  return (
    <Container>
      <Heading>Welcome To Pokedex!</Heading>
      <SearchArea />
      {isLoaded ? <PokemonList pokemonList={pokemonList} /> : <GuidanceText text="Loading..ʕ•́ᴥ•̀ʔ" />}
      {/* todo: 無限スクロール追加(優先度：下) */}
    </Container>
  );
};

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 70px 0;
`;

const Heading = styled.p`
  font-size: 36px;
  font-weight: 900;
  text-align: center;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
`;
