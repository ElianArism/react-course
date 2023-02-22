import { useLayoutEffect, useRef, useState } from "react";
import { LoadingData } from "../04-examples/components/LoadingData";
import { useFetch } from "../04-examples/useFetch";
import { useCounter } from "../hooks/useCounter";

export const Layout = () => {
  const _firstProduct = 1;
  const _url = "https://dummyjson.com/products";

  const { counter, increment, decrement } = useCounter(_firstProduct);
  const { data, isLoading } = useFetch(`${_url}/${counter}`);
  const { title, description } = !!data && data;

  const cardRef = useRef();
  const [{ width, height }, setSize] = useState({
    width: 0,
    height: 0,
  });

  useLayoutEffect(() => {
    setSize({
      height: cardRef.current?.getBoundingClientRect().height || 0,
      width: cardRef.current?.getBoundingClientRect().width || 0,
    });
  }, [title, description]);

  return (
    <div className="w-100 d-flex flex-column">
      <div className="d-flex justify-content-between align-items-center">
        <p>Products: </p>
        <button
          className="btn btn-success"
          disabled={isLoading || !(counter > _firstProduct)}
          onClick={decrement}
        >
          Previous Product
        </button>
        <button
          className="btn btn-success"
          disabled={isLoading}
          onClick={increment}
        >
          Next Product
        </button>
      </div>

      <div className="my-2">
        {isLoading ? (
          <LoadingData />
        ) : (
          <div>
            <p>Product title {title} </p>
            <p>Description:</p>
            <div
              ref={cardRef}
              className="bg-black p-2 my-3 text-white d-inline-block"
            >
              {description}
            </div>
            <p>{JSON.stringify({ height, width })}</p>
          </div>
        )}
      </div>
    </div>
  );
};
