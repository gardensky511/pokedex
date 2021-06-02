import React from 'react';
import shortid from 'shortid';
import styled from 'styled-components';
import { COLORS } from '../../utils/styles';

type Props = {
  items: Array<string>;
  onClick: (item: any) => void;
};

export const DropDownList = ({ items, onClick }: Props) => {
  return (
    <Container>
      {items.map((item) => {
        const id = shortid.generate();
        return (
          <Item key={id} onClick={() => onClick(item)}>
            {item}
          </Item>
        );
      })}
    </Container>
  );
};

const Container = styled.ul`
  all: unset;
  position: absolute;
  background-color: ${COLORS.FFF};
  width: 100%;
  border: 3px solid ${COLORS.BDC3C7};
  border-radius: 8px;
  top: calc(100% + 8px);
  max-height: 40vh;
  overflow: scroll;
`;

const Item = styled.li`
  list-style: none;
  padding: 15px;
  cursor: pointer;
  border-bottom: 1px solid ${COLORS.BDC3C7};
`;
