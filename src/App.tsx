import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import ContentWriting from './pages/services/ContentWriting';
import SEO from './pages/services/digital-marketing/SEO';
import SocialMediaMarketing from './pages/services/digital-marketing/SocialMediaMarketing';
import PPC from './pages/services/digital-marketing/PPC';
import ContentMarketing from './pages/services/digital-marketing/ContentMarketing';
import EmailMarketing from './pages/services/digital-marketing/EmailMarketing';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/wordpress-development" element={<WordPressDevelopment />} />
          <Route path="/services/app-development" element={<AppDevelopment />} />
          <Route path="/services/ecommerce" element={<Ecommerce />} />
          <Route path="/services/custom-software" element={<CustomSoftware />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/services/digital-marketing/seo" element={<SEO />} />
          <Route path="/services/digital-marketing/social-media" element={<SocialMediaMarketing />} />
          <Route path="/services/digital-marketing/ppc" element={<PPC />} />
          <Route path="/services/digital-marketing/content" element={<ContentMarketing />} />
          <Route path="/services/digital-marketing/email" element={<EmailMarketing />} />
          <Route path="/services/graphic-design" element={<GraphicDesign />} />
          <Route path="/services/content-writing" element={<ContentWriting />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
