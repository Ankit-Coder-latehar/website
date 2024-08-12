import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import DirectTaxServices from './pages/DirectTaxServices';
import Indirect from './pages/Indirect';
import AuditandAssurance from './pages/AuditandAssurance';
import CorporateandLLPlaws from './pages/CorporateandLLPlaws';
import InsolvencyLaws from './pages/InsolvencyLaws';
import Services from './pages/Services';


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/direct-tax-services" element={<DirectTaxServices/>} />
      <Route path="/indirect-tax-services" element={<Indirect/>} />
      <Route path="/auditing-and-assurance-service" element={<AuditandAssurance/>} />
      <Route path="/corporate-and-LLP-Laws" element={<CorporateandLLPlaws/>} />
      <Route path="/insolvency-Laws" element={<InsolvencyLaws/>} />
      <Route path="/services" element={<Services/>} />





    </Routes>
  </Router>
  );
}

export default App;
