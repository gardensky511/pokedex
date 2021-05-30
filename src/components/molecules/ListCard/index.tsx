import React from 'react';
import styled from 'styled-components';

type Props = {
  id: number;
  name: string;
  imageUrl: string;
};

const Container = styled.div`
  background-color: #ecf0f1;
  border-radius: 12px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  padding: 20px 10px;
  cursor: pointer;

  &:hover {
    background-color: #d2d7da;
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
  return (
    <Container>
      <Id>#{id}</Id>
      <Image src={imageUrl} alt={name} />
      <Name>{name[0].toUpperCase() + name.slice(1)}</Name>
    </Container>
  );
};
