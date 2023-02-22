import { memo } from "react";

export const Small = memo(({ counter }) => {
  /**
   * Sin el uso del memo, todo el codigo (logica) que se encuentre aca
   * se volvera a disparar siempre que en el padre exista algun cambio
   * que involucre o no al hijo
   *
   * El memo lo que hace es memorizar este componente para solo volver a
   * ejecutar la logica si y solo si alguna prop del hijo cambia
   *
   * recomendado SOLO para componentes grandes o componentes
   * con tareas pesadas de logica
   *
   * El html de serie siempre se redibuja SOLO SI las props del componente
   * cambian, por lo que para componentes con solo html estatico o componentes
   * de reducido tamaño esto no es necesario
   *
   * El redibujo normal ocurre siempre que el padre directo cambie, los hermanos - primos no afectan
   * el redibujo del hijo
   */
  console.log("Redibujado");

  return <small>{counter}</small>;
});
