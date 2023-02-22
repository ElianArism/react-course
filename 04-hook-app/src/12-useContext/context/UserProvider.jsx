import { useState } from "react";
import { UserContext } from "./userContext";

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    email: "user@email.com",
    name: "John Doe",
  });

  return (
    <UserContext.Provider
      value={{
        newValue: "hola mundo",
        userInformation: user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
