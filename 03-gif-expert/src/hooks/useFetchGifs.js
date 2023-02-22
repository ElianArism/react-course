import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [gifs, setGifs] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const resolveGifs = async () => {
    setGifs(await getGifs(category));
    setIsLoaded(true);
  };

  // Init
  useEffect(() => {
    resolveGifs();
  }, []);

  return {
    gifs,
    loaded: isLoaded,
  };
};
