import PropTypes from "prop-types";
const getAge = (person) => {
  return <span>{person.age}</span>;
};

export const FirstApp = (props) => {
  const name = "Elian";
  const data = { age: 20, sex: "M" };

  return (
    <>
      <h2>Datos</h2>
      <h2>Mi nombre es: {name}</h2>
      <h3>Datos generales:{JSON.stringify(data)}</h3>
      <b>La edad es de: {getAge(data)} </b>

      <h4>
        Copas del mundo de <i>{props.title}</i>
      </h4>
      <h5>
        Cantidad de copas del mundo de {props.title} :{" "}
        {props.worldCups}
      </h5>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  worldCups: PropTypes.number.isRequired,
};

FirstApp.defaultProps = {
  title: "Chile",
  worldCups: 0,
};
