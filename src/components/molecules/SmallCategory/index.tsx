import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { AppDispatch, useSelector } from '../../../redux/store';
import { majorCategorySelector } from '../../../redux/selectors/search';
import { COLORS } from '../../utils/styles';
import {
  fetchFilteredPokemonByTypeList,
  fetchFilteredPokemonList,
  setIsLoaded,
} from '../../../redux/modules/pokemonList';
import { MajorCategoryText } from '../../pages/Home/declarations';
import { DropDownList } from '../../atoms/DropDownList';
import { DropDownValue } from '../../atoms/DropDownValue';

type Props = {
  categories: Array<string>;
};

export const SmallCategory = ({ categories }: Props) => {
  const [isDropDownOpened, setIsDropDownOpened] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');
  const majorCategory = useSelector(majorCategorySelector);
  const dispatch: AppDispatch = useDispatch();

  return (
    <Container majorCategory={majorCategory}>
      <DropDownValue
        onClick={() => {
          if (!majorCategory) return;
          setIsDropDownOpened(!isDropDownOpened);
        }}
        text={majorCategory ? selectedItem || 'Choose Small Category' : '<= Plz Do It First'}
      />
      {isDropDownOpened && categories.length !== 0 && (
        <DropDownList
          items={categories}
          onClick={(category: string) => {
            if (majorCategory === 'type') dispatch(fetchFilteredPokemonByTypeList(`${majorCategory}/${category}`));
            else dispatch(fetchFilteredPokemonList(`${majorCategory}/${category}`));
            setIsDropDownOpened(false);
            setSelectedItem(category);
            setIsLoaded(false);
          }}
        />
      )}
    </Container>
  );
};

const Container = styled.div<{ majorCategory: MajorCategoryText }>`
  position: relative;
  flex: 1;
  background-color: ${({ majorCategory }) => (majorCategory ? COLORS.FFF : COLORS.ECF0F1)};

  &:not(:last-child) {
    margin-right: 10px;
  }
`;
