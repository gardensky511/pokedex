import { createSelector } from 'reselect';
import { RootState } from '../store';
import { MajorCategory } from '../../components/pages/Home/declarations';
import { SEARCH_BY_CATEGORY } from '../../const';

export const majorCategorySelector = createSelector<RootState, MajorCategory, MajorCategory>(
  (state) => state.search.majorCategory,
  (majorCategory) => majorCategory,
);

// todo: 반환값 타입 지정하면 에러뜨는 거 수정
export const smallCategorySelector = createSelector<RootState, MajorCategory, any>(
  (state) => state.search.majorCategory,
  (majorCategory) => {
    if (majorCategory === '') return majorCategory;
    return SEARCH_BY_CATEGORY[majorCategory];
  },
);
