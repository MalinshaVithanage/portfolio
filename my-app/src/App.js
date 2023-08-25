import React from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Project from "./routes/Project";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
<>
<Routes>
  <Route path="/"n element={<Home/>}/>
  <Route path="/about"n element={<About/>}/>
  <Route path="/project"n element={<Project/>}/>
  <Route path="/contact"n element={<Contact/>}/>
  
  
</Routes>
</>
  );
}

export default App;
