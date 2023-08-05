import React, { Component } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Landing from "./pages/landing";
import Register from "./pages/register";
import Login from "./pages/login";
import Home from "./pages/home";
import Profile from "./pages/profile";
import GameList from "./pages/gamelist";
import Game from "./pages/game";

class App extends Component {
  render(){
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/game-list" element={<GameList/>}/>
          <Route path="/game" element={<Game/>}/>
        </Routes>
      </Router>
    );
  }
}

export default App
