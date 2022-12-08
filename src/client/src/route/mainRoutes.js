import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/home";
import LogIn from "../pages/logIn/logIn";
import SignUp from "../pages/signUp/signUp";
import Ranking from "../pages/ranking/ranking";
import Censor from "../pages/censor/censor";
import Error from "../pages/error/error";
import Search from "../pages/search/search"
import Profile from "../pages/profile/profile"
import Newfeed from "../pages/newfeed/newfeed"
import FullPost from "../pages/fullpost/fullpost"
import EditProfile from "../pages/profile/editprofile"
import AfterSearch from "../pages/search/aftersearch";
import ForgotPassword from "../pages/forgotpassword/forgotPassword";


const mainRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="SignUp" element={<SignUp />} />
          <Route path="Ranking" element={<Ranking />} />
          <Route path="Censor" element={<Censor />} />

          <Route path="Error" element={<Error />} />
          <Route path="LogIn" element={<LogIn />} />
          <Route path="Search" element={<Search/>} />
          <Route path="Profile" element={<Profile/>} />
          <Route path="Newfeed" element={<Newfeed />} />
          <Route path="FullPost" element={<FullPost/>} />
          <Route path="EditProfile" element={<EditProfile/>} />
          <Route path="AfterSearch" element={<AfterSearch/>} />
          <Route path="ForgotPassword" element={<ForgotPassword/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default mainRoutes;
