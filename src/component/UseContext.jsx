import { createContext, useState } from "react";

 

 export const UseContext = createContext();

 const ContextProvider = ({children})=>{

    const [input, setinput]= useState(true)
    const [isOpen, setisOpen] = useState(false)
    
return <UseContext.Provider value={{input, setinput, isOpen, setisOpen}}> {children} </UseContext.Provider>

 }

 export default ContextProvider