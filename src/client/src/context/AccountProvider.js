import React from "react";
import { createContext, useState } from "react";

const Context = createContext();

function AccountProvider ({ Child }){
  const [account, setAccount] = useState();

  return (
    <Context.Provider value={{ account, setAccount }}>
        {Child}
    </Context.Provider>
  );
};

export { Context, AccountProvider};
