import React, { createContext, useState } from 'react';

 const MyContext = createContext();

 const MyProvider = ({ children }) => {
  const [User, setUser] = useState(false);

  return (
    <MyContext.Provider value={{ User, setUser }}>
      {children}
    </MyContext.Provider>
  );
};
export {MyContext, MyProvider}
