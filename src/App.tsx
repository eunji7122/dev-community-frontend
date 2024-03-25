import React from 'react';
import './App.css';
import Header from "./components/header";
import Main from "./pages/main";
import {Route, Routes} from "react-router-dom";
import Login from "./pages/login";
import CreateAccount from "./pages/create-account";

function App() {
  return (
      <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/create-account" element={<CreateAccount/>}/>
      </Routes>
  );
}

export default App;
