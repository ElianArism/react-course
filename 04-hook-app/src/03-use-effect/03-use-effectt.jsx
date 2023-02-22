import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [{ username, email }, setFormState] = useState({
    username: "elian",
    email: "elian@email.io",
  });

  const onInputChange = ({ target: { value, name } }) => {
    setFormState((state) => ({ ...state, [name]: value }));
  };

  useEffect(
    () => {
      // 'Use effect se usa para disparar efectos secundarios'
      // No se recomienda utilizar use effects sin deps
      console.log("on init component ");
    },
    // las deps van aca y son las que vuelven a disparar el useEffect
    // un arreglo vacio indica que el use effect se lanza 1 vez cuando se renderiza el componente
    []
  );
  useEffect(() => {
    // se recomienda usar tantos useEffect como sea nececesario por cada dep que lo requiera
    // no muchas deps en uno solo
    console.log("form cambia");
  }, [{ username, email }]);

  useEffect(() => {
    console.log("email cambio, nuevo valor: ", email);
  }, [{ email }]);

  return (
    <div>
      <h6>Formulario simple</h6>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="user name"
          value={username}
          onChange={onInputChange}
          name="username"
        />
      </div>
      <input
        type="email"
        className="form-control"
        placeholder="user email"
        value={email}
        onChange={onInputChange}
        name="email"
      />
      {username === "move" && <Message></Message>}
    </div>
  );
};
