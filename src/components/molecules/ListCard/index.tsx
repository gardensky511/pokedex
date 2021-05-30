import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../utils/styles';

type Props = {
  id: number;
  name: string;
  imageUrl: string;
};

const Container = styled.div`
  background-color: ${COLORS.ECF0F1};
  border-radius: 12px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  padding: 20px 10px;
  cursor: pointer;

  &:hover {
    background-color: ${COLORS.D2D7DA};
  }
`;

const Name = styled.p`
  font-weight: 900;
  font-size: 16px;
`;

const Image = styled.img`
  width: 200px;
`;

const Id = styled.div`
  font-weight: 900;
  font-size: 14px;
`;

export const ListCard = ({ id, name, imageUrl }: Props) => {
  // todo: 클릭시 상세페이지 모달 표시 구현
  return (
    <Container>
      <Id>#{id}</Id>
      <Image src={imageUrl} alt={name} />
      <Name>{name[0].toUpperCase() + name.slice(1)}</Name>
    </Container>
  );
};
