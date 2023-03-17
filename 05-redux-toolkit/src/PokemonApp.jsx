import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonsThunk } from "./store/slices/pokemon/pokemonThunks";

export const PokemonApp = () => {
  const dispatch = useDispatch();
  const { isLoading, selectedPokemons, nextPage } = useSelector(
    (state) => state.pokemons
  );

  useEffect(() => {
    dispatch(getPokemonsThunk());
  }, []);

  return (
    <>
      <div style={{ width: 1200 }}>
        <h2>Pokemon</h2>
        <hr />

        {isLoading ? (
          <p>Loading Pokedex...</p>
        ) : (
          <ul>
            {selectedPokemons.map(({ name, url }) => (
              <li
                key={name}
                style={{
                  display: "flex",
                  width: 150,
                  padding: 10,
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <p>{name}</p>
                <small>
                  <a href={url} target="_blank">
                    Ref
                  </a>
                </small>
              </li>
            ))}
          </ul>
        )}

        <button
          onClick={() => dispatch(getPokemonsThunk(nextPage))}
          style={{ display: "block", marginTop: 20 }}
        >
          Next page
        </button>
      </div>
    </>
  );
};
