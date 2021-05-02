import React, { useState, useEffect, createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import Loading from '../components/Loading/Loading'
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
        dispatch({type: 'SET_USERS', payload: data});
        // console.log(data)
        // localStorage.setItem('localData', JSON.stringify(data)); 
          // dispatch({type: 'SET_USERS', payload: data});
        // const myData = JSON.parse(localStorage.getItem('localData'));
        // if(myData) {
        //   dispatch({type: 'SET_USERS', payload: myData});
        // }
        // console.log(myData)
        
    } catch(e) {
        setLoding(false)
        console.log("My error is ", e)
    }
     
}
// useEffect(() => {
//   const myData = JSON.parse(localStorage.getItem('localData'));  
//   console.log(myData)
//   if(myData) {
//       dispatch({type: 'SET_USERS', payload: myData});
//     }
  
// },[])
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

   if(loading) {
     return <Loading/>
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