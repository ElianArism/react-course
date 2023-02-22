import React, { useContext } from "react";
import { UserContext } from "./context/userContext";

export const HomePage = () => {
  const { userInformation } = useContext(UserContext);

  return (
    <div>
      <p>User Information:</p>
      <div className="d-flex">
        <div className="w-50">
          <small>Email</small>
          <p>{userInformation.email}</p>
        </div>
        <div className="w-50">
          <small>Name</small>
          <p>{userInformation.name}</p>
        </div>
      </div>
    </div>
  );
};
