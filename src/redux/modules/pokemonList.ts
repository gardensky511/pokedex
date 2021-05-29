import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ThunkAPI } from '../../declarations/const';
import { getPokemonList } from '../../services/pokemonList';
import { GetPokemonListResponse, PokemonListState } from '../../components/pages/Home/declarations';

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
  },
});

export default slice.reducer;
