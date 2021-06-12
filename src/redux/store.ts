import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector as useReduxSelector } from 'react-redux';
import pokemonListReducer from './modules/pokemonList';
import searchByCategoryReducer from './modules/search';
import pokemonDetailReducer from './modules/pokemonDetail';

export const store = configureStore({
  reducer: {
    pokemonList: pokemonListReducer,
    search: searchByCategoryReducer,
    pokemonDetail: pokemonDetailReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
