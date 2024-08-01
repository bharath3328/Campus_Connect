import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();
import {useSelector } from 'react-redux';
export const UserProvider = ({ children }) => {

  
  const [user, setUser] = useState({ role: 'guest' }); // Example user object

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
