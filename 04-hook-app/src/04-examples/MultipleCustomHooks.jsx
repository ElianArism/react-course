import { useCounter } from "../hooks/useCounter";
import { LoadingData } from "./components/LoadingData";
import { ProductCard } from "./components/ProductCard";
import { useFetch } from "./useFetch";

export const MultipleCustomHooks = () => {
  const _firstProduct = 1;
  const _url = "https://dummyjson.com/products";

  const { counter, increment, decrement } = useCounter(_firstProduct);

  const { data, isLoading } = useFetch(`${_url}/${counter}`);

  const { title, description } = !!data && data;

  return (
    <div className="w-100 d-flex flex-column">
      <div className="d-flex p-3 rounded justify-content-between align-items-center">
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
          <ProductCard description={description} title={title} />
        )}
      </div>
    </div>
  );
};
