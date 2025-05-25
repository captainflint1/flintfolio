
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Services from './components/About';
import Branding from './components/About';
import PortfolioGrid from './components/PortfolioGrid';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<PortfolioGrid />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/branding" element={<Branding />} />
      </Routes>
    </Router>
  );
}

export default App;
