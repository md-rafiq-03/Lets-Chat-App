
import React from 'react'
import "./style.scss";

import Register from "./pages/Register";
import Login from "./pages/Login"
import Home from "./pages/Home"
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";

import{BrowserRouter,Routes,Route,Navigate} from "react-router-dom";

const App = () => {

  const {currentUser}=useContext(AuthContext)

  const ProtectedRoute=({children})=>{
    if(!currentUser){
      return <Navigate to="/login"/>
    }
  }

  console.log(currentUser)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
            <Route index element={
              <ProtectedRoute>
                <Home/>
              </ProtectedRoute>
            } 
          />
          <Route path='login' element={<Login/>} />
          <Route path='register' element={<Register/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App

