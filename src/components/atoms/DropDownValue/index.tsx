import React from 'react';
import styled from 'styled-components';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { COLORS } from '../../utils/styles';

type Props = {
  onClick: any; // todo: 型指定する
  text: string;
};

export const DropDownValue = ({ onClick, text }: Props) => {
  return (
    <Container onClick={onClick}>
      {text}
      <Arrow />
    </Container>
  );
};

const Container = styled.div`
  padding: 24px 48px 24px 24px;
  cursor: pointer;
  font-size: 14px;
  flex: 1;
  position: relative;
  margin: 0;
  border: 3px solid ${COLORS.BDC3C7};
  border-radius: 8px;
`;

const Arrow = styled(ArrowDropDownIcon)`
  font-size: 36px !important;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 15px;
`;
