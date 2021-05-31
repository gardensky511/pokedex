import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { SearchDropDown } from '../../atoms/SearchDropDown';
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

  // todo: ここを何とかする(優先度：高)
  const dispatchSetMajorCategory = (_: undefined, option: MajorCategory) => {
    dispatch(setMajorCategory(option));
  };

  const dispatchGetFilteredPokemonList = (majorCategory: MajorCategory, option: string) => {
    if (majorCategory === 'type') dispatch(fetchFilteredPokemonByTypeList(`${majorCategory}/${option}`));
    else dispatch(fetchFilteredPokemonList(`${majorCategory}/${option}`));
  };

  return (
    <Container>
      {/* todo: フリーキーワード検索機能実装(優先度：下) */}
      <SearchDropDown
        options={MAJOR_CATEGORY_OF_SEARCH}
        headingText="Choose Major Category"
        onClick={dispatchSetMajorCategory}
      />
      {/* todo: 大カテゴリが選択されてない場合は小カテゴリを非活性化にする(優先度：中) */}
      <SearchDropDown
        options={smallCategory || []}
        headingText="Choose Small Category"
        onClick={dispatchGetFilteredPokemonList}
      />
    </Container>
  );
};
