import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Account from "./components/Account/Account";
import NavBar from "./components/NavBar/NavBar";
import ProfileSetup from "./components/ProfileSetup/ProfileSetup";
// import Footer from "./components/Footer/Footer";

import "./styles/App.css";


const App: React.FC = () => {
  return (
    <>
      <div className="container-main">
        <NavBar className="nav-bar" />
        <div className="container-page">
          <Routes>
            {/* All of these routes are just place holders */}

            {/* for sign in */}
            <Route index element={<Home />}></Route>
            <Route path="/home" element={<Home />} />
            <Route path="/user/:userId" element={<Account />} />
            <Route path="/profile" element={<h1>Profile</h1>}></Route>
            <Route path="/endorsements" element={<h1>Endorsements</h1>}></Route>
            <Route
              path="/notifications"
              element={<h1>Notifications</h1>}
            ></Route>
            <Route path="/jobs" element={<h1>Jobs</h1>}></Route>
            <Route
              path="/profile-setup"
              element={<ProfileSetup/>}
            ></Route>
            <Route path="/sign-in" element={<h1>Sign In</h1>}></Route>
            <Route path="/sign-up" element={<h1>Sign Up</h1>}></Route>

            <Route path="/account" element={<Account />}/>
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
