/**
 * Thunks are like effects in NgRx
 */

import { setPokemons, startLoadingPokemons } from "./pokemonSlice";

export const getPokemonsThunk = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons());

    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=10&offset=" + page * 10
    );

    dispatch(
      setPokemons({
        pokemons: await (await response.json()).results,
        page: page + 1,
        isLoading: false,
      })
    );
  };
};
