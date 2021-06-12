import { AppDispatch, RootState } from '../redux/store';

export type ThunkAPI = {
  dispatch: AppDispatch;
  state: RootState;
  rejectValue: {
    errorMessage: string;
  };
};

export type EmptyStringOf<T> = '' | T;
export type EmptyArray = never[];
