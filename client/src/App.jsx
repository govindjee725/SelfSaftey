import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import SafteyTips from './components/SafteyTips';
import ContactPage from './components/ContactPage';
import TipsComponent from './components/TipsComponent'; // Importing TipsComponent
import WomenSaftey from './components/WomenSaftey';
import Animal from './components/Animal';
import SOS from './components/SOS.JSX';
import WomenSafteyEnjoy from './components/WomenSafteyEnjoy';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import IncidentForm from './components/IncidentForm';
import AdoptPetPage from './components/AdoptpetPage';
import Helpline from './components/Helpline';
import CyberResilientPage from './components/CyberResilientPage';
import IncidentList from './components/IncidentList';
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Route for the homepage */}
        <Route path="/" element={<HomePage />} />

        {/* Route for the safety tips page */}
        <Route path="/safety-tips" element={<SafteyTips />} />
        <Route path="/report-incident" element={<IncidentForm />} />

        {/* Route for the contact page */}
        <Route path="/contact" element={<ContactPage />} />

        {/* Route for the TipsComponent */}
        <Route path="/tips" element={<TipsComponent />} /> 
        <Route path="/womensafety" element={<WomenSaftey />} /> {/* Added this route */}
        <Route path="/animal" element={<Animal />} />
        <Route path="/sos" element={<SOS />} />
        <Route path="/enjoy" element={<WomenSafteyEnjoy />} />
        <Route path="/section1" element={<Section1 />} />
        <Route path="/section2" element={<Section2 />} />
        <Route path="/section3" element={<Section3 />} />
        <Route path="/adoptanimal" element={<AdoptPetPage />} />
        <Route path="/helpline" element={<Helpline />} />
        <Route path="/cyber" element={<CyberResilientPage />} />
        <Route path="/showlist" element={<IncidentList />} />
      </Routes>
    </Router>
  );
};

export default App;
