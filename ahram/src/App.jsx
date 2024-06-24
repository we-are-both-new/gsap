/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Gsap01 from "./views/Gsap01";
import Gsap02 from "./views/Gsap02";
import Gsap03 from "./views/Gsap03";
import Gsap04 from "./views/Gsap04";
import Gsap05 from "./views/Gsap05";
import Gsap06 from "./views/Gsap06";
import Gsap07 from "./views/Gsap07";
import Gsap08 from "./views/Gsap08";
import Gsap09 from "./views/Gsap09";
import Gsap10 from "./views/Gsap10";
import Gsap11 from "./views/Gsap11";
import Gsap12 from "./views/Gsap12";
import Gsap13 from "./views/Gsap13";
import Gsap14 from "./views/Gsap14";
import Gsap15 from "./views/Gsap15";

import "./assets/css/header.css";
import "./assets/css/style.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Gsap01 />} />
        <Route path="/gsap02" element={<Gsap02 />} />
        <Route path="/gsap03" element={<Gsap03 />} />
        <Route path="/gsap04" element={<Gsap04 />} />
        <Route path="/gsap05" element={<Gsap05 />} />
        <Route path="/gsap06" element={<Gsap06 />} />
        <Route path="/gsap07" element={<Gsap07 />} />
        <Route path="/gsap08" element={<Gsap08 />} />
        <Route path="/gsap09" element={<Gsap09 />} />
        <Route path="/gsap10" element={<Gsap10 />} />
        <Route path="/gsap11" element={<Gsap11 />} />
        <Route path="/gsap12" element={<Gsap12 />} />
        <Route path="/gsap13" element={<Gsap13 />} />
        <Route path="/gsap14" element={<Gsap14 />} />
        <Route path="/gsap15" element={<Gsap15 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
