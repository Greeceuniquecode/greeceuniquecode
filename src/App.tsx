import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./landingpage/LandingPage";
import Layouts from './layouts/components/Layouts';
import Contact from './contactpage/Contact';
import ProjectPage from './Projects/project';

function App() {
  return (
    <Router>
      <Routes>
        {/* Parent layout route */}
        <Route path="/" element={<Layouts />}>
          {/* Nested routes rendered inside Layouts */}
          <Route index element={<LandingPage />} />
          <Route path="home" element={<LandingPage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={ <ProjectPage />} />
          {/* Add more routes here as needed */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
