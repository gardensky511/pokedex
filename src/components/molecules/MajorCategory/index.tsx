import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import { DropDownList } from '../../atoms/DropDownList';
import { setMajorCategory } from '../../../redux/modules/saerch';
import { MajorCategoryText } from '../../pages/Home/declarations';
import { DropDownValue } from '../../atoms/DropDownValue';

type Props = {
  categories: Array<string>;
};

export const MajorCategory = ({ categories }: Props) => {
  const [isDropDownOpened, setIsDropDownOpened] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');
  const dispatch: AppDispatch = useDispatch();

  return (
    <Container>
      <DropDownValue
        onClick={() => setIsDropDownOpened(!isDropDownOpened)}
        text={selectedItem || 'Choose Major Category'}
      />
      {isDropDownOpened && categories.length !== 0 && (
        <DropDownList
          items={categories}
          onClick={(option: MajorCategoryText) => {
            dispatch(setMajorCategory(option));
            setIsDropDownOpened(false);
            setSelectedItem(option);
          }}
        />
      )}
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
