import { createContext, useState } from "react";

 

 export const UseContext = createContext();

 const ContextProvider = ({children})=>{

    const [input, setinput]= useState(true)
    
return <UseContext.Provider value={{input, setinput}}> {children} </UseContext.Provider>

 }

 export default ContextProvider