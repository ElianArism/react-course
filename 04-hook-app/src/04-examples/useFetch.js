import { useEffect, useState } from "react";

export const useFetch = (_url) => {
  const [fetchState, setFetchState] = useState({
    hasError: false,
    data: null,
    isLoading: true,
  });

  const getDataFromUrl = async (url) => {
    setFetchState({ ...fetchState, isLoading: true });
    let data = null;
    let hasError = false;

    const timeoutId = setTimeout(async () => {
      try {
        data = await (await fetch(url)).json();
      } catch (error) {
        hasError = true;
      }

      setFetchState({
        isLoading: false,
        hasError,
        data,
      });

      clearTimeout(timeoutId);
    }, 1500);
  };

  useEffect(() => {
    getDataFromUrl(_url);
  }, [_url]);

  return {
    isLoading: fetchState.isLoading,
    hasError: fetchState.hasError,
    data: fetchState.data,
  };
};
