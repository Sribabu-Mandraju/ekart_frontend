import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Team from "./pages/team/Team";
import Header from "./components/header/Header";
import Mainpage from "./landing/Mainpage";
import SignUp from "./auth/SignUp";
import Shared from "./components/shared/Shared";
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/team" element={<Team />} />
        <Route path="/header" element={<Header />} />
        <Route path="/shared" element={<Shared />} />
      </Routes>
    </Router>
  );
};

export default App;
