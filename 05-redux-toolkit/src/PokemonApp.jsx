import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemonsThunk } from "./store/slices/pokemon/pokemonThunks";

export const PokemonApp = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemonsThunk());
  }, []);

  return (
    <>
      <div>
        <h2>Pokemon</h2>
        <hr />

        <ul></ul>
      </div>
    </>
  );
};
