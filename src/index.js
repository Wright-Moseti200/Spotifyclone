import React from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Homepage from "./Components/homepage";
import Album from "./Components/album";
import Navbar from "./Components/navbar";

const App = ()=>{
  return(
   <BrowserRouter>
  <Routes>
    <Route path="/" element={<Navbar/>}>
      <Route index element={<Homepage/>}/>
      <Route path="album/:albumid" element={<Album/>}/>
    </Route>
  </Routes>
</BrowserRouter>
  );
}

let body = document.querySelector("body");
let root = createRoot(body);
root.render(<App/>);