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
import DigitalMarketing from "./components/home-page/DigitalMarketing";
import Careers from "./components/home-page/Careers";
import Test from "./Test";
import GenericKeywords from "./components/derived-pages/GenericKeywords";
import ProjectConsultation from "./components/sub-pages/project-consultation/ProjectConsultation";
import { usePageTracking } from "./custom-hooks/trackInitialPageLoad";

const App = () => {
  // Ensure this is called within the context of BrowserRouter
  // Following func. makes sure to scroll on top left every time URL changes
  useScrollRestoration();
  // for google analytics
  usePageTracking();

  return (
    <>
      <GenericKeywords />
      <Navbar />
      <Routes>
        <Route path='/' exact element={<LandingPage />} />
        <Route path='/home' element={<Homepage />} />
        <Route path='*' element={<ErrorPage />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/mission&vision' element={<MissionAndVission />} />
        <Route path='/teamsummary' element={<TeamSummary />} />
        <Route path='/comingsoon' element={<ComingSoon />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/training' element={<TrainingPrograms />} />
        <Route path='/data-analytics' element={<ShowDataAnalytics />} />
        <Route path='/data-operations' element={<ShowDataOperations />} />
        <Route path='/digital-marketing' element={<DigitalMarketing />} />
        <Route path='/job-support-india' element={<ProjectConsultation />} />
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
