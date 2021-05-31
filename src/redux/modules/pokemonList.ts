import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ThunkAPI } from '../../declarations';
import { getPokemonList, getFilteredPokemonList, getFilteredPokemonListByType } from '../../services/getPokemonList';
import {
  FilteredPokemonListByTypeResponse,
  FilteredPokemonListResponse,
  GetPokemonListResponse,
  PokemonListState,
} from '../../components/pages/Home/declarations';

export const fetchPokemonList = createAsyncThunk<GetPokemonListResponse, undefined, ThunkAPI>(
  'pokemonList/fetchPokemonList',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getPokemonList();
      return response.data;
    } catch (error) {
      return rejectWithValue({
        errorMessage: 'データ取得に失敗しました',
      });
    }
  },
);

// todo: type はレスポンスタイプが違くて一旦分けたけど本当にこれでいいのか(優先度：高)
export const fetchFilteredPokemonList = createAsyncThunk<FilteredPokemonListResponse, string, ThunkAPI>(
  'pokemonList/fetchFilteredPokemonList',
  async (category, { rejectWithValue }) => {
    try {
      const response = await getFilteredPokemonList(category);
      return response.data;
    } catch (error) {
      return rejectWithValue({
        errorMessage: 'データ取得に失敗しました',
      });
    }
  },
);

export const fetchFilteredPokemonByTypeList = createAsyncThunk<FilteredPokemonListByTypeResponse, string, ThunkAPI>(
  'pokemonList/fetchFilteredPokemonByTypeList',
  async (category, { rejectWithValue }) => {
    try {
      const response = await getFilteredPokemonListByType(category);
      return response.data;
    } catch (error) {
      return rejectWithValue({
        errorMessage: 'データ取得に失敗しました',
      });
    }
  },
);

const initialState: PokemonListState = {
  pokemonList: [],
};

const slice = createSlice({
  name: 'pokemonList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPokemonList.fulfilled, (state, { payload }: PayloadAction<GetPokemonListResponse>) => {
      state.pokemonList = payload.results;
    });
    builder.addCase(
      fetchFilteredPokemonList.fulfilled,
      (state, { payload }: PayloadAction<FilteredPokemonListResponse>) => {
        state.pokemonList = payload.pokemon_species;
      },
    );
    builder.addCase(
      fetchFilteredPokemonByTypeList.fulfilled,
      (state, { payload }: PayloadAction<FilteredPokemonListByTypeResponse>) => {
        state.pokemonList = payload.pokemon.map((pokemonObj) => pokemonObj.pokemon);
      },
    );
  },
});

export default slice.reducer;
