import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
// import "./assets/css/custom.css";
import "./assets/css/custom.css";
import Routers from './routers'
import Navbar from './components/navbar'
import Footer from './components/footer'
import AuthService from "./services/auth.service";
import EventBus from "./common/EventBus";

const App = () => {
  const [currentUser, setCurrentUser] = useState(undefined);
  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, []);

  const logOut = () => {
    AuthService.logout();
    setCurrentUser(undefined);
  };
  console.log('currentUser', currentUser)
  return (
    <>

      <Navbar user={currentUser} logOut={logOut} />
      <Routers user={currentUser} />
      <Footer />
    </>
  )
}

export default App
