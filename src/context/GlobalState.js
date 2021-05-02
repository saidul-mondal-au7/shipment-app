import React, { useState, useEffect, createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State
const initialState = {
  users: []
}
//update

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const [loading, setLoding] = useState(true)

  const getUsers = async() => {
    try {
        const response = await fetch("http://localhost:3000/shipments");
        setLoding(false)
        const data = await response.json()
        // console.log(data)
        dispatch({type: 'SET_USERS', payload: data});

        // localStorage.setItem('localData', JSON.stringify(state.users)); 
        // const myData = JSON.parse(localStorage.getItem('localData'));  
        // console.log(myData)
        // dispatch({type: 'EDIT_USER', payload: myData});
    } catch(e) {
        setLoding(false)
        console.log("My error is ", e)
    }
     
}
useEffect(() => {
    getUsers()
},[])

  // Actions
  const editUser = (user) => {
    dispatch({
      type: 'EDIT_USER',
      payload: user
    })
  }

  return (
    <GlobalContext.Provider value={{ 
      data: state.users,
      editUser
     }}>
      {children}
    </GlobalContext.Provider>
  )
}