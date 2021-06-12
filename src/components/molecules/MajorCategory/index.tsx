import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from '../../../redux/store';
import { DropDownList } from '../../atoms/DropDownList';
import { MajorCategoryText, SmallCategories } from '../../pages/Home/declarations';
import { DropDownValue } from '../../atoms/DropDownValue';
import { majorCategorySelector } from '../../../redux/selectors/search';

type Props = {
  categories: Array<string> | SmallCategories;
  onClick: (category: MajorCategoryText) => void;
};

export const MajorCategory = ({ categories, onClick }: Props) => {
  const majorCategory = useSelector(majorCategorySelector);
  const [isDropDownOpened, setIsDropDownOpened] = useState(false);
  const handleOnClick = (category: MajorCategoryText) => {
    setIsDropDownOpened((prev) => !prev);
    onClick(category);
  };

  return (
    <Container>
      <DropDownValue
        onClick={() => setIsDropDownOpened((prev) => !prev)}
        text={majorCategory || 'Choose Major Category'}
      />
      {isDropDownOpened && categories.length !== 0 && <DropDownList items={categories} onClick={handleOnClick} />}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  flex: 1;

  &:not(:last-child) {
    margin-right: 10px;
  }
`;
