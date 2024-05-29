import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home"

import NavBar from "./components/NavBar/NavBar";
// import Footer from "./components/Footer/Footer";

import "./styles/App.css";

const App: React.FC = () => {
  return (
    <>
      <div className="container-main">
        <NavBar className="nav-bar"/>
        <div className="container-page">
          <Routes>
            {/* All of these routes are just place holders */}
            <Route index element={<h1>Home</h1>}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/profile" element={<h1>Profile</h1>}></Route>
            <Route path="/endorsements" element={<h1>Endorsements</h1>}></Route>
            <Route
              path="/notifications"
              element={<h1>Notifications</h1>}
            ></Route>
            <Route path="/jobs" element={<h1>Jobs</h1>}></Route>
            <Route
              path="/profile-setup"
              element={<h1>Profile Setup</h1>}
            ></Route>
            <Route path="/sign-in" element={<h1>Sign In</h1>}></Route>
            <Route path="/sign-up" element={<h1>Sign Up</h1>}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
