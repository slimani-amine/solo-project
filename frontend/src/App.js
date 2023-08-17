import React, { useState } from "react";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

import "./App.css";

import Allprojects from "./components/AllProjects.jsx";
import Addproject from "./components/Add.jsx";
import Updateproject from "./components/UpdateProject.jsx";
import SignUp from "./components/SingUp";
import Login from "./components/Login";
import OneProject from "./components/OneProject.jsx";
import Myprojects from "./components/Myprojects";
import Profile from "./components/Profil";
import UpdateProfile from "./components/UpdateProfile";

function App() {
  const [userData, setUserData] = useState({});
  const userIn = (obj) => {
    setUserData(obj);
    console.log("🚀 ~ file: App.js:22 ~ App ~ userData:", userData);
  };

  return (
    <BrowserRouter>

      <div className="nav">
        <Link to="/allprojects">
          <span className="items">All projects</span>
        </Link>

        <Link to="/myprojects">
          <span className="items">My projects</span>
        </Link>
        <Link to="">
          <span className="items">Profile</span>
        </Link>
      </div>

      <Routes>
      <Route path="/" element={<Login userIn={userIn} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/allprojects" element={<Allprojects />} />
        <Route path="/allproject/oneproject" element={<OneProject />} />
        <Route
          path="/myprojects"
          element={<Myprojects userData={userData} />}
        />
        <Route path="/myprojects/addproject" element={<Addproject />} />
        <Route path="/myprojects/updateproject" element={<Updateproject />} />
        <Route path="/profile" element={<Profile userData={userData} />} />
        <Route path="/profile/updateprofile" element={<UpdateProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
