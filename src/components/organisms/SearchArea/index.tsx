import React from 'react';
import styled from 'styled-components';
import { MAJOR_CATEGORY_OF_SEARCH } from '../../../const';
import { smallCategorySelector } from '../../../redux/selectors/search';
import { useSelector } from '../../../redux/store';
import { MajorCategory } from '../../atoms/MajorCategory';
import { SmallCategory } from '../../atoms/smallCategory';

export const SearchArea = () => {
  const smallCategory = useSelector(smallCategorySelector);

  // todo: フリーキーワード検索機能実装(優先度：下)
  return (
    <Container>
      <MajorCategory categories={MAJOR_CATEGORY_OF_SEARCH} />
      <SmallCategory categories={smallCategory || []} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  margin-bottom: 30px;
`;
