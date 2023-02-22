import { PropTypes } from "prop-types";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifCategoryItem } from "./GifCategoryItem";

export const GifCategory = ({ category }) => {
  const { gifs, loaded } = useFetchGifs(category);

  return (
    <>
      <div>
        <h3>{category}</h3>

        {!loaded && <h3>Loading gifs...</h3>}

        <ol className="card-grid">
          {gifs.map((gif) => (
            <GifCategoryItem key={gif.id} {...gif} />
          ))}
        </ol>
      </div>
    </>
  );
};

GifCategory.propTypes = {
  category: PropTypes.string.isRequired,
};
