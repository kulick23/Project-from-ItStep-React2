import React, {useState,useEffect}  from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./components/AppRoutes";
import AuthContext from "./components/context";

const App = () =>{
 
  





  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    
      if(localStorage.getItem('auth','true')){
    
      }
      setIsAuth()
    
  }, [])
  
  return(
    





    
    <AuthContext.Provider
      value = {{
        isAuth,
        setIsAuth
        
      }}
      >
    <BrowserRouter>
         <NavBar/>
         <AppRoutes/>
    </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App
