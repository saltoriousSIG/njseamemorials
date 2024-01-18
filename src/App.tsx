import "./App.css";
import Component from "./components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Experiences from "./components/experiences";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<Component />} />
        <Route path="/experiences" element={<Experiences />} />
      </Routes>
    </Router>
  );
}

export default App;
