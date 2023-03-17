import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    isLoading: false,
    selectedPokemons: [],
    nextPage: 0,
  },
  reducers: {
    startLoadingPokemons: (state) => {
      state.isLoading = true;
    },
    setPokemons: (
      state,
      { payload: { pokemons, isLoading, page } }
    ) => {
      state.selectedPokemons = pokemons;
      state.isLoading = isLoading;
      state.nextPage = page;
    },
  },
});

export const { startLoadingPokemons, setPokemons } =
  pokemonSlice.actions;
