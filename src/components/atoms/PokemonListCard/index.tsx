import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { COLORS } from '../../utils/styles';

type Props = {
  id: number;
  name: string;
  imageUrl: string;
};

export const PokemonListCard = ({ id, name, imageUrl }: Props) => {
  // todo:ポケモン詳細ページ実装(優先度：中)
  return (
    <Link to={`/detail/${id}`}>
      <Container>
        <Id>#{id}</Id>
        <Image src={imageUrl} alt={name} />
        <Name>{name[0].toUpperCase() + name.slice(1)}</Name>
      </Container>
    </Link>
  );
};

const Container = styled.div`
  background-color: ${COLORS.GREY_LIGHT};
  border-radius: 12px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  padding: 20px 10px;
  cursor: pointer;

  &:hover {
    background-color: ${COLORS.GREY_MEDIUM};
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
