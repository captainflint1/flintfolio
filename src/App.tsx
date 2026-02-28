
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Projects';
import PortfolioGrid from './components/PortfolioGrid';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/portfolio" element={<PortfolioGrid />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Contact />} />
        <Route path="/branding" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
