import React from "react";
import Login from "./componets/Login/Login";
import '..//src/style.css';
import {Route,Routes,} from "react-router-dom";
import Home from "./componets/Home";

function App() {

  return (
    <div>
       <Routes>
              <Route exact  path="/"  element={<Login/>} />
              <Route path="/home" element={<Home/>} />
              
                </Routes>
      
    </div>
  );
}

export default App

