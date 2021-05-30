import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ThunkAPI } from '../../declarations';
import { getPokemonList, getFilteredPokemonList } from '../../services/getPokemonList';
import {
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

// todo: type, gender 는 리스폰스 타입이 달라서 따로 다뤄야될 듯
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
  },
});

export default slice.reducer;
