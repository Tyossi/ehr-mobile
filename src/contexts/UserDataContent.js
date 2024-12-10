import { createContext, useContext, useState } from "react";

const UserDataContext = createContext();

export const useUserDatacontext = () => {
  return useContext(UserDataContext);
};

export const UserDataContextProvider = ({ children }) => {
  const [userData, setUserData] = useState();
  const [userId, setUserId] = useState();

  return (
    <UserDataContext.Provider
      value={{ userData, setUserData, userId, setUserId }}
    >
      {children}
    </UserDataContext.Provider>
  );
};
