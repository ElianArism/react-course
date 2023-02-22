import { useState } from "react";

export const useForm = (formControls) => {
  const [formState, setFormState] = useState(formControls);

  const onInputChange = ({ target: { value, name } }) => {
    setFormState((state) => ({ ...state, [name]: value }));
  };

  const onResetForm = () => {
    setFormState(formControls);
  };

  return {
    formState,
    onResetForm,
    onInputChange,
  };
};
