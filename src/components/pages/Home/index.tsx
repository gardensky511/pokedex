import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { ListCard } from '../../molecules/ListCard';
import { SearchArea } from '../../molecules/SearchArea';
import { AppDispatch, useSelector } from '../../../redux/store';
import { pokemonListSelector } from '../../../redux/selectors/pokemonList';
import { fetchPokemonList } from '../../../redux/modules/pokemonList';
import { COLORS } from '../../utils/styles';

// todo:レスポンス対応追加(優先度：下)

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
`;

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

const NoResult = styled.div`
  font-size: 36px;
  text-align: center;
  margin-top: 100px;
  color: ${COLORS.BDC3C7};
  font-weight: 900;
  line-height: 2;
`;

export const Home = () => {
  const pokemonList = useSelector(pokemonListSelector);

  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPokemonList());
  }, []);

  return (
    <Container>
      <Heading>Welcome To Pokedex!</Heading>
      <SearchArea />
      {/* todo: ローディング中表示実装(優先度：中) */}
      {pokemonList.length !== 0 ? (
        <List>
          {pokemonList.map((pokemonListItem) => {
            const { id, name, imageUrl } = pokemonListItem;
            return <ListCard id={id} name={name} imageUrl={imageUrl} key={id} />;
          })}
        </List>
      ) : (
        <NoResult>
          Sorry, No Results
          <br />
          (°ロ°)
        </NoResult>
      )}
      {/* todo: 無限スクロール追加(優先度：下) */}
    </Container>
  );
};
