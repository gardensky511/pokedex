import { createSelector } from 'reselect';
import { RootState } from '../store';
import { MajorCategory } from '../../components/pages/Home/declarations';
import { SEARCH_BY_CATEGORY } from '../../const';

export const majorCategorySelector = createSelector<RootState, MajorCategory, MajorCategory>(
  (state) => state.search.majorCategory,
  (majorCategory) => majorCategory,
);

// todo: 第3型パラメータを指定したら出るエラー解決(優先度：高)
export const smallCategorySelector = createSelector<RootState, MajorCategory, any>(
  (state) => state.search.majorCategory,
  (majorCategory) => {
    if (majorCategory === '') return majorCategory;
    return SEARCH_BY_CATEGORY[majorCategory];
  },
);
