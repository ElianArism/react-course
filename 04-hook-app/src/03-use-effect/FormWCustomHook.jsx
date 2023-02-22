import { useForm } from "./useForm";

export const FormWCustomHook = () => {
  const {
    formState: { username, email, password },
    onResetForm,
    onInputChange,
  } = useForm({ username: "", email: "", password: "" });

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
      <div className="mb-3">
        <input
          type="email"
          className="form-control"
          placeholder="user email"
          value={email}
          onChange={onInputChange}
          name="email"
        />
      </div>
      <div className="mb-3">
        <input
          type="password"
          className="form-control"
          placeholder="password"
          value={password}
          onChange={onInputChange}
          name="password"
        />
      </div>

      <button onClick={onResetForm} className="btn btn-primary">
        Reset
      </button>
    </div>
  );
};
