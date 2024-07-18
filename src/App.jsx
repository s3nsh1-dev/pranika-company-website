import React from "react";
import Homepage from "./components/home-page/Homepage";
import LandingPage from "./components/branch-pages/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./components/branch-pages/ErrorPage";
import TeamSummary from "./components/derived-pages/TeamSummary";
import MissionAndVission from "./components/derived-pages/MissionAndVision";
import ContactUs from "./components/branch-pages/ContactUs";
import ComingSoon from "./components/branch-pages/ComingSoon";
import Navbar from "./components/landing-page/Navbar";
import Footer from "./components/landing-page/Footer";
import AboutUs from "./components/branch-pages/AboutUs";

export default function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/home' element={<Homepage />} />
          <Route path='*' element={<ErrorPage />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/mission&vision' element={<MissionAndVission />} />
          <Route path='/teamsummary' element={<TeamSummary />} />
          <Route path='/comingsoon' element={<ComingSoon />} />
          <Route path='/about' element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}
