import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ThunkAPI } from '../../declarations';
import { GetPokemonDetailResponse, GetPokemonDetailState } from '../../components/pages/Home/declarations';
import { getPokemonDetail } from '../../services/getPokemonDetail';

export const fetchPokemonDetail = createAsyncThunk<GetPokemonDetailResponse, number, ThunkAPI>(
  'pokemonDetail/fetchPokemonDetail',
  async (id, { rejectWithValue }) => {
    try {
      const response = await getPokemonDetail(id);
      return response.data;
    } catch (error) {
      return rejectWithValue({
        errorMessage: 'データ取得に失敗しました',
      });
    }
  },
);

const initialState: GetPokemonDetailState = {
  pokemonDetail: {
    abilities: [],
    base_experience: 0,
    forms: [],
    game_indices: [],
    height: 0,
    held_items: [],
    id: 0,
    is_default: false,
    location_area_encounters: '',
    moves: [],
    name: '',
    order: 0,
    past_types: [],
    species: [],
    sprites: [],
    stats: [],
    types: [],
    weight: 0,
  },
  isModalOpened: false,
};

const slice = createSlice({
  name: 'pokemonDetail',
  initialState,
  reducers: {
    setModalDisplay: (state, { payload }: PayloadAction<boolean>) => {
      state.isModalOpened = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPokemonDetail.fulfilled, (state, { payload }: PayloadAction<GetPokemonDetailResponse>) => {
      state.pokemonDetail = payload;
    });
  },
});

export default slice.reducer;
export const { setModalDisplay } = slice.actions;
