export const GifCategoryItem = ({ id, title, url }) => {
  return (
    <>
      <li className="card" key={id}>
        <img src={url} alt={title} />
        <h5>{title}</h5>
      </li>
    </>
  );
};
