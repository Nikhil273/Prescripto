/* eslint-disable react/prop-types */
import React from 'react'
// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = React.createContext();
import { doctors } from '../assets/assets';

const AppContextProvider = (props) => {

  const currencySymbol = '₹';
  const value = {
    doctors, currencySymbol
  }
  return (
    <AppContext.Provider value={value}>

      {props.children}
    </AppContext.Provider>

  )
}

export default AppContextProvider