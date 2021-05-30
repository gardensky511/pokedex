import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from '../../../redux/store';
import { majorCategorySelector } from '../../../redux/selectors/search';

const Container = styled.div`
  position: relative;
  flex: 1;

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const Heading = styled.div`
  padding: 24px 48px 24px 24px;
  cursor: pointer;
  font-size: 14px;
  flex: 1;
  position: relative;
  margin: 0;
  border: 3px solid #bdc3c7;
  border-radius: 8px;

  &::after {
    content: '';
    display: block;
    width: 12px;
    height: 8px;
    background-color: black;
    clip-path: polygon(0 0, 100% 0%, 50% 100%);
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 15px;
  }
`;

const DropDown = styled.ul`
  all: unset;
  position: absolute;
  background-color: #fff;
  width: 100%;
  border: 3px solid #bdc3c7;
  border-radius: 8px;
  top: calc(100% + 8px);
  max-height: 40vh;
  overflow: scroll;
`;

const PokemonTypeOption = styled.li`
  list-style: none;
  padding: 15px;
  cursor: pointer;
  border-bottom: 1px solid #bdc3c7;
`;

type Props = {
  options: Array<string>;
  headingText: string;
  onClick: any;
};

export const SearchDropDown = ({ options, headingText, onClick }: Props) => {
  const [isDropDownOpened, setIsDropDownOpened] = useState(false);
  const [selectedItem, setSelectedItem] = useState(headingText);
  const majorCategory = useSelector(majorCategorySelector);

  return (
    <Container>
      <Heading onClick={() => setIsDropDownOpened(!isDropDownOpened)}>{selectedItem}</Heading>
      {/* todo: 빈 배열일 땐 클릭해도 아무것도 안보이게 하기 */}
      {isDropDownOpened && (
        <DropDown>
          {options.map((option) => (
            <PokemonTypeOption
              onClick={() => {
                setIsDropDownOpened(false);
                setSelectedItem(option);
                onClick(majorCategory, option);
              }}
            >
              {option}
            </PokemonTypeOption>
          ))}
        </DropDown>
      )}
    </Container>
  );
};
