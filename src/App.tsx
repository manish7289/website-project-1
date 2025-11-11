import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Portfolio from './pages/Portfolio';
import WebDevelopment from './pages/services/WebDevelopment';
import WordPressDevelopment from './pages/services/WordPressDevelopment';
import AppDevelopment from './pages/services/AppDevelopment';
import Ecommerce from './pages/services/Ecommerce';
import CustomSoftware from './pages/services/CustomSoftware';
import DigitalMarketing from './pages/services/DigitalMarketing';
import GraphicDesign from './pages/services/GraphicDesign';


import Ma from './pages/Ma';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950">
        <AppContent />
      </div>
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const isMa = location.pathname === '/ma';

  return (
    <>
      {!isMa && <Navbar />}
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/wordpress-and-shopify" element={<WordPressDevelopment />} />
          <Route path="/app-development" element={<AppDevelopment />} />
          <Route path="/e-commerce-solutions" element={<Ecommerce />} />
          <Route path="/custom-software-development" element={<CustomSoftware />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />

          <Route path="/graphic-design" element={<GraphicDesign />} />

          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ma" element={<Ma />} />
        </Routes>
        {!isMa && <Footer />}
      </>
    );
}

export default App;
