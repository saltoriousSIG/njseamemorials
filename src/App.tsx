import "./App.css";
import Component from "./components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Experiences from "./components/experiences";
import Layout from "./layout/layout";
import Calendar from "./pages/Calendar";
import Prices from "./pages/Prices";
import Booking from "./pages/Booking";
import TheExperiece from "./pages/TheExperience";
import Policies from "./pages/Policies";
import WhySeaburial from "./pages/WhySeaburial";
import FAQ from "./pages/FAQ";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Component />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/book/:pkg" element={<Booking />} />
          <Route path="/theexperience" element={<TheExperiece />} />
          <Route path="/policies" element={<Policies/>} />
          <Route path="/whyseaburial" element={<WhySeaburial/>} />
          <Route path="/faq" element={<FAQ />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
