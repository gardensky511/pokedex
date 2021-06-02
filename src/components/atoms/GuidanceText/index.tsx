import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../utils/styles';

type Props = {
  text: string;
};

export const GuidanceText = ({ text }: Props) => {
  return <Container>{text}</Container>;
};

const Container = styled.div`
  font-size: 36px;
  text-align: center;
  margin-top: 100px;
  color: ${COLORS.BDC3C7};
  font-weight: 900;
  line-height: 2;
`;
