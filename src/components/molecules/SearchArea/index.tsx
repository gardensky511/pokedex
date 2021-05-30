import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { SearchDropDown } from '../../atoms/SearchDropDown/SearchDropDown';
import { MAJOR_CATEGORY_OF_SEARCH } from '../../../const';
import { smallCategorySelector } from '../../../redux/selectors/search';
import { AppDispatch, useSelector } from '../../../redux/store';
import { MajorCategory } from '../../pages/Home/declarations';
import { setMajorCategory } from '../../../redux/modules/saerch';
import { fetchFilteredPokemonByTypeList, fetchFilteredPokemonList } from '../../../redux/modules/pokemonList';

const Container = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

export const SearchArea = () => {
  const smallCategory = useSelector(smallCategorySelector);
  const dispatch: AppDispatch = useDispatch();

  const dispatchSetMajorCategory = (_: undefined, option: MajorCategory) => {
    dispatch(setMajorCategory(option));
  };

  const dispatchGetFilteredPokemonList = (majorCategory: MajorCategory, option: string) => {
    if (majorCategory === 'type') dispatch(fetchFilteredPokemonByTypeList(`${majorCategory}/${option}`));
    else dispatch(fetchFilteredPokemonList(`${majorCategory}/${option}`));
  };

  return (
    <Container>
      <SearchDropDown
        options={MAJOR_CATEGORY_OF_SEARCH}
        headingText="Choose Major Category"
        onClick={dispatchSetMajorCategory}
      />

      <SearchDropDown
        options={smallCategory || []}
        headingText="Choose Small Category"
        onClick={dispatchGetFilteredPokemonList}
      />
    </Container>
  );
};
