import { createSelector } from 'reselect';
import { RootState } from '../store';
import { MajorCategoryText, SmallCategories } from '../../components/pages/Home/declarations';
import { SEARCH_BY_CATEGORY } from '../../const';

export const majorCategorySelector = createSelector<RootState, MajorCategoryText, MajorCategoryText>(
  (state) => state.search.majorCategory,
  (majorCategory) => majorCategory,
);

// todo: 第3型パラメータを Array<string> に指定したら出るエラー解決(優先度：高)
export const smallCategoriesSelector = createSelector<RootState, MajorCategoryText, SmallCategories>(
  (state) => state.search.majorCategory,
  (majorCategory) => {
    return majorCategory !== '' ? SEARCH_BY_CATEGORY[majorCategory] : [];
  },
);
