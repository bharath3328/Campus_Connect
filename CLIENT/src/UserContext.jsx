import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();
import {useSelector } from 'react-redux';
export const UserProvider = ({ children }) => {

  const role=useSelector(state=>state.authUser.user.userRole)
  const [user, setUser] = useState({ role: role }); // Example user object

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
