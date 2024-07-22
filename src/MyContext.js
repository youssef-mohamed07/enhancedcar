// MyContext.js
import React, { createContext, useState } from 'react';

export const MyContext = createContext(null);

export const MyContextProvider = ({ children }) => {
  const [state, setState] = useState({ /* initial state */ });

  return (
    <MyContext.Provider value={{ state, setState }}>
      {children}
    </MyContext.Provider>
  );
};
