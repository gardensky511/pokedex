import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from '../../../redux/store';
import { majorCategorySelector } from '../../../redux/selectors/search';
import { COLORS } from '../../utils/styles';
import { setIsLoaded } from '../../../redux/modules/pokemonList';
import { MajorCategoryText, SmallCategories } from '../../pages/Home/declarations';
import { DropDownList } from '../../atoms/DropDownList';
import { DropDownValue } from '../../atoms/DropDownValue';

type Props = {
  categories: SmallCategories;
  onClick: (category: string) => void;
  selectedItem: string;
};

export const SmallCategory = ({ categories, onClick, selectedItem }: Props) => {
  const majorCategory = useSelector(majorCategorySelector);
  const [isDropDownOpened, setIsDropDownOpened] = useState(false);
  const handleOnClick = (category: string) => {
    setIsDropDownOpened((prev) => !prev);
    setIsLoaded(false);
    onClick(category);
  };

  return (
    <Container majorCategory={majorCategory}>
      <DropDownValue
        onClick={() => {
          if (!majorCategory) return;
          setIsDropDownOpened((prev) => !prev);
        }}
        text={majorCategory ? selectedItem || 'Choose Small Category' : '<= Plz Do It First'}
      />
      {isDropDownOpened && categories.length !== 0 && <DropDownList items={categories} onClick={handleOnClick} />}
    </Container>
  );
};

const Container = styled.div<{ majorCategory: MajorCategoryText }>`
  position: relative;
  flex: 1;
  background-color: ${({ majorCategory }) => (majorCategory ? COLORS.WHITE : COLORS.GREY_LIGHT)};

  &:not(:last-child) {
    margin-right: 10px;
  }
`;
