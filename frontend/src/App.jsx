import React from "react";
import {Route, Routes} from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import Registerpage from "./Pages/Registerpage/Registerpage";
import Contactpage from "./Pages/Contactpage/Contactpage";
import Loginpage from "./Pages/Loginpage/Loginpage";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/" element={<Registerpage />}/>
        <Route path="/contact" element={<Contactpage />}/>
        <Route path="/login" element={<Loginpage />}/>
      </Routes>
    </div>
  );
}
