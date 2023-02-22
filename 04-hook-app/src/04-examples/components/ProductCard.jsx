import PropTypes from "prop-types";

export const ProductCard = ({ description, title }) => {
  return (
    <div
      className="card p-3"
      style={{ backgroundColor: "#333", color: "white" }}
    >
      <div className="card-title bg-primary text-white p-2 rounded">
        {title}
      </div>
      <div className="card-body">{description}</div>
    </div>
  );
};

ProductCard.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
