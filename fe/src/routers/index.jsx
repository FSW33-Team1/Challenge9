import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Sigin from "../pages/Sigin";
import Signup from "../pages/Signup";
import Profile from "../pages/Profile";
import Detail from "../pages/Detail";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="/login" element={<Sigin />} />
      <Route path="/register" element={<Signup />} />
    </Routes>
  );
};

export default Routers;
