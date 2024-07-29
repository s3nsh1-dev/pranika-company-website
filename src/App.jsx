import React from "react";
import Homepage from "./components/home-page/Homepage";
import LandingPage from "./components/branch-pages/LandingPage";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "./components/branch-pages/ErrorPage";
import TeamSummary from "./components/derived-pages/TeamSummary";
import MissionAndVission from "./components/derived-pages/MissionAndVision";
import ContactUs from "./components/branch-pages/ContactUs";
import ComingSoon from "./components/branch-pages/ComingSoon";
import Navbar from "./components/landing-page/Navbar";
import Footer from "./components/landing-page/Footer";
import AboutUs from "./components/branch-pages/AboutUs";
import useScrollRestoration from "./custom-hooks/useScrollRestoration";
import TrainingPrograms from "./components/derived-pages/TrainingPrograms";
import ShowDataTransformation from "./components/derived-pages/ShowDataTransformation";
import ShowDataAnalytics from "./components/derived-pages/ShowDataAnalytics";
import ShowDataOperations from "./components/derived-pages/ShowDataOperations";
import ConsultancyAndRecruitment from "./components/derived-pages/ConsultancyAndRecruitment";
import Test from "./Test";

const App = () => {
  // Ensure this is called within the context of BrowserRouter
  // Following func. makes sure to scroll on top left every time URL changes
  useScrollRestoration();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<Homepage />} />
        <Route path='*' element={<ErrorPage />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/mission&vision' element={<MissionAndVission />} />
        <Route path='/teamsummary' element={<TeamSummary />} />
        <Route path='/comingsoon' element={<ComingSoon />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/training' element={<TrainingPrograms />} />
        <Route path='/data-analytics' element={<ShowDataAnalytics />} />
        <Route path='/data-operations' element={<ShowDataOperations />} />
        <Route
          path='/data-transformation'
          element={<ShowDataTransformation />}
        />
        <Route
          path='/consult-recruit'
          element={<ConsultancyAndRecruitment />}
        />
        <Route path='/test' element={<Test />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
