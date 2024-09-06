import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import Workflow from './components/Workflow';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Atrial from './preds/atrial';
import Hattack from './preds/hattack';
import Strk from './preds/stroke';
import Hf from './preds/hf';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <FeatureSection />
            <Workflow />
            <Pricing />
            <Testimonials />
          </>
        } />
        <Route path="/atrial" element={<Atrial />} />
        <Route path="/hattack" element={<Hattack />} />
        <Route path="/stroke" element={<Strk />} />
        <Route path="/hf" element={<Hf />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
