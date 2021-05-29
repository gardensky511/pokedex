import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { HomePresentation } from './HomePresentation';
import { AppDispatch, useSelector } from '../../../redux/store';
import { fetchPokemonList } from '../../../redux/modules/pokemonList';
import { pokemonListSelector } from '../../../redux/selectors/pokemonList';

export const HomeContainer = () => {
  const pokemonList = useSelector(pokemonListSelector);
  console.log(pokemonList);

  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPokemonList());
  }, []);

  return <HomePresentation pokemonList={pokemonList} />;
};
