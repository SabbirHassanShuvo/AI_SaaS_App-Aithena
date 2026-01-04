import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Layout from "./pages/Layout.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import WriteArticle from "./pages/WriteArticle.jsx";
import BlogTitle from "./pages/BlogTitle.jsx";
import Login from "./pages/Auth/Login.jsx";
import Register from "./pages/Auth/Register.jsx";
import ForgetPassword from "./pages/Auth/ForgetPassword.jsx";
import VerifyOtp from "./pages/Auth/VerifyOtp.jsx";
import RemoveBackground from "./pages/RemoveBackground.jsx";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />

        {/* AI parent route */}
        <Route path="/ai" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="write-article" element={<WriteArticle />} />
          <Route path="blog-title" element={<BlogTitle />} />
          <Route path="remove-background" element={<RemoveBackground />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
