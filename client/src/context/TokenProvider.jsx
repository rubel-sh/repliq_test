import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const TokenContext = createContext();
const TokenProvider = ({ children }) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("repliqToken");
    setToken(token);
  }, [setToken]);
  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
};

export default TokenProvider;
