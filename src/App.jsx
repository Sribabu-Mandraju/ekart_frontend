import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Team from "./pages/team/Team";
import Header from "./components/header/Header";
import Mainpage from "./landing/Mainpage";
/*import SignUp from "./auth/SignUp";
import SignIn from "./auth/SignIn";*/
import Shared from "./components/shared/Shared";
import Ekart5 from "./components/ekart5/Ekart5";
import EkartGrid from "./components/ekartGrid/EkartGrid";
import Card from "./components/ekart4/Card";
import Ekart4 from "./components/ekart4/Ekart4";
import Ekart1 from "./components/ekart123/Ekart1";
import Ekart2 from "./components/ekart123/Ekart2";
import Ekart3 from "./components/ekart123/Ekart3";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/team" element={<Team />} />
        <Route path="/header" element={<Header />} />
        <Route path="/shared" element={<Shared />} />
        <Route path="/ekart5" element={<Ekart5 />} />
        <Route path="/ekartGrid" element={<EkartGrid/>} />
        <Route path="/card" element={<Card/>} />
        <Route path="/ekart4" element={<Ekart4/>} />
        <Route path="/ekart1" element={<Ekart1/>} />
        <Route path="/ekart2" element={<Ekart2/>} />
        <Route path="/ekart3" element={<Ekart3/>} />
      </Routes>
    </Router>
  );
};

export default App;
