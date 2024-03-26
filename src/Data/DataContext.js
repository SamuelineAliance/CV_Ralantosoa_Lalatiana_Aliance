import React, { createContext, useState } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
    
    const [userData, setUserData] = useState({
        name: 'Aliance',
        age: 30,
        email: 'ralantosoalalatiana@gmail.com',
        facebook: '',
        github: '',
    }); 

  const updateUser = (newUserData) => {
    setUserData(newUserData);
  };
  return (
    <DataContext.Provider value={{ userData, setUserData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;