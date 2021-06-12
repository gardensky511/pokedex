import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { MAJOR_CATEGORY_OF_SEARCH } from '../../../const';
import { majorCategorySelector, smallCategoriesSelector } from '../../../redux/selectors/search';
import { AppDispatch, useSelector } from '../../../redux/store';
import { MajorCategory } from '../../molecules/MajorCategory';
import { SmallCategory } from '../../molecules/SmallCategory';
import { MajorCategoryText } from '../../pages/Home/declarations';
import { setMajorCategory } from '../../../redux/modules/search';
import {
  fetchFilteredPokemonByTypeList,
  fetchFilteredPokemonList,
  setIsLoaded,
} from '../../../redux/modules/pokemonList';

export const SearchArea = () => {
  const smallCategories = useSelector(smallCategoriesSelector);
  const dispatch: AppDispatch = useDispatch();
  const majorCategory = useSelector(majorCategorySelector);
  const [selectedItem, setSelectedItem] = useState('');

  const handleMajorCategoryClick = (option: MajorCategoryText) => {
    dispatch(setMajorCategory(option));
  };
  const handleSmallCategoryClick = (category: string) => {
    const isMajor = majorCategory === 'type';
    if (isMajor) {
      dispatch(fetchFilteredPokemonByTypeList(`${majorCategory}/${category}`));
    } else {
      dispatch(fetchFilteredPokemonList(`${majorCategory}/${category}`));
    }
    setIsLoaded(false);
    setSelectedItem(category);
  };

  // todo: フリーキーワード検索機能実装(優先度：下)
  return (
    <Container>
      <MajorCategory onClick={handleMajorCategoryClick} categories={MAJOR_CATEGORY_OF_SEARCH} />
      <SmallCategory onClick={handleSmallCategoryClick} categories={smallCategories} selectedItem={selectedItem} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  margin-bottom: 30px;
`;
