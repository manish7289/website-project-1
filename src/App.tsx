import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import WebDevelopment from './pages/services/WebDevelopment';
import AppDevelopment from './pages/services/AppDevelopment';
import Ecommerce from './pages/services/Ecommerce';
import CustomSoftware from './pages/services/CustomSoftware';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/app-development" element={<AppDevelopment />} />
          <Route path="/services/ecommerce" element={<Ecommerce />} />
          <Route path="/services/custom-software" element={<CustomSoftware />} />
          <Route path="/about" element={<About />} />
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
