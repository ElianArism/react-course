import { useContext } from "react";
import { UserContext } from "./context/userContext";

export const LoginPage = () => {
  const { userInformation, setUser } = useContext(UserContext);

  return (
    <div>
      <pre>{JSON.stringify(userInformation, null, 3)}</pre>
      <button
        onClick={() =>
          setUser({
            email: "elian@gmail.com",
            name: "Elian Ezequiel",
          })
        }
      >
        Change user
      </button>
    </div>
  );
};
