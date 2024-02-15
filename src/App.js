// import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Admin from "./pages/Admin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./users/Signup";
import Signin from "./users/Signin";
// import DiscussionComponent from "./pages/CommunityChat";
import Home from "./pages/Home";
// import NavbarHome from "./layout/Navbarhome";
import Videos from "./pages/Videos";
import CommunityChat from "./pages/CommunityChat";
import "./App.css";
import ForgotPassword from "./pages/ForgotPassword";
// import CommunityChatold from "./pages/CommunityChatOld";
import DiscussionComponent from "./pages/CommunityChat";
import { UserProvider } from "./users/UserContext";
import App1 from "./src1/App1";
import ChatsPage from "./src1/chatsPage";
import Profile from "./pages/Profile";
import ChangePassword from "./pages/ChangePassword";
// import Navbar from "./layout/Navbar";
import React, { useEffect, useState } from "react";
function App() {
  return (
    <UserProvider>
      <div>
        <section className="te "></section>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Signin" element={<Signin />} />
            <Route path="/Videos" element={<Videos />} />
            <Route path="/CommunityChat" element={<CommunityChat />} />
            <Route path="/App1" element={<App1 />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/ForgotPassword" element={<ForgotPassword />} />
            <Route path="/ChangePassword" element={<ChangePassword />} />
            {/* <Route path="/N" */}

            <Route
              path="/DiscussionComponent"
              element={<DiscussionComponent />}
            />

            <Route path="/Signup" element={<Signup />} />
            <Route path="/ForgotPassword" element={<ForgotPassword />} />
            <Route path="/chat" element={<ChatsPage />} />
            {/* <Route exact path="/community-chat" element={<DiscussionComponent />} /> */}
          </Routes>
        </Router>
      </div>
    </UserProvider>
  );
}

export default App;
