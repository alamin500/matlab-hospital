import React, { createContext } from "react";
import useFirebase from "../../hooks/useFirebase";

export const AuthContext = createContext();
const AuthProvider = (props) => {
  const { children } = props;
  const allContexts = useFirebase();
  console.log("pro", props);
  return (
    <AuthContext.Provider value={allContexts}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
