import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { GuidanceText } from '../../atoms/GuidanceText';
import { AppDispatch, useSelector } from '../../../redux/store';
import { fetchPokemonDetail } from '../../../redux/modules/pokemonDetail';
import { pokemonDetailSelector } from '../../../redux/selectors/pokemonDetail';

export const Detail = ({ match }: RouteComponentProps<{ id: string }>) => {
  const { id } = match.params;
  const dispatch: AppDispatch = useDispatch();
  const { pokemonDetail } = useSelector(pokemonDetailSelector);

  useEffect(() => {
    dispatch(fetchPokemonDetail(Number(id)));
  }, []);

  return <GuidanceText text={`It will be ${pokemonDetail.name}'s detail page`} />;
};
