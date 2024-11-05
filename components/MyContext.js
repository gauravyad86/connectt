import React, { createContext, useState } from 'react';

 const MyContext = createContext();

 const MyProvider = ({ children }) => {
  const [User, setUser] = useState(true);
  const bgColor="#FFA500";
  const lightTheme="white";
  const lightColor="black"

  return (
    <MyContext.Provider value={{ User, setUser, bgColor,lightColor ,lightTheme}}>
      {children}
    </MyContext.Provider>
  );
};
export {MyContext, MyProvider}
