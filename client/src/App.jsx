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
import Stroke from './admin/stroke/Dashboard';
import Hfd from './admin/hf/Dashboard';
import Atriald from './admin/atrial/Dashboard';
import Hattackd from './admin/hattack/Dashboard';
import Hf from './preds/hf';
import { AfTable } from './components/AfTable';

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
            <AfTable />
          </>
        } />
        <Route path="/atrial" element={<Atrial />} />
        <Route path="/hattack" element={<Hattack />} />
        <Route path="/stroke" element={<Strk />} />
        <Route path="/hf" element={<Hf />} />

        <Route path="/admin/stroke/dashboard" element={<Stroke />} />
        <Route path="/admin/hf/dashboard" element={<Hfd />} />
        <Route path="/admin/atrial/dashboard" element={<Atriald />} />
        <Route path="/admin/hattack/dashboard" element={<Hattackd />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
