import { useState, FormEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, AlertCircle, Zap, Target, TrendingUp, Users, Star, Code2 } from 'lucide-react';

function MinimalFooter() {
  return (
    <footer className="bg-slate-950/95 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2 group cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Techxellence
            </span>
          </Link>

          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-2.5 rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 font-medium"
          >
            Get Started
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default function Ma() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'web-development',
    message: 'I\'m interested in your development services. Please contact me to discuss my project.'
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const services = [
    { value: 'web-development', label: 'Web Development' },
    { value: 'app-development', label: 'App Development' },
    { value: 'ecommerce', label: 'E-commerce Solutions' },
    { value: 'custom-software', label: 'Custom Software' },
    { value: 'digital-marketing', label: 'Digital Marketing' }
  ];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        // Redirect to homepage after successful submission
        setTimeout(() => {
          navigate('/');
        }, 2000);
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setErrorMessage('Failed to send message. Please check your connection and try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const benefits = [
    {
      icon: Zap,
      title: 'Lightning Fast Delivery',
      description: 'Get your project completed in record time with our agile development process.'
    },
    {
      icon: Target,
      title: 'Conversion Optimized',
      description: 'Every solution is designed to maximize your business growth and ROI.'
    },
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: '500+ successful projects delivered with 98% client satisfaction rate.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: '10+ years of experience in modern web and mobile development technologies.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      rating: 5,
      text: 'Outstanding work! They delivered our e-commerce platform ahead of schedule and exceeded all expectations.'
    },
    {
      name: 'Mike Chen',
      company: 'Digital Solutions',
      rating: 5,
      text: 'Professional team with exceptional technical skills. Highly recommend for any development project.'
    },
    {
      name: 'Emily Rodriguez',
      company: 'Growth Agency',
      rating: 5,
      text: 'The best development agency we\'ve worked with. Quality, speed, and communication were top-notch.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Helmet>
        <title>Free Consultation - Techxellence Development Services</title>
        <meta name="description" content="Get a free consultation for your web development, app development, or custom software project. Transform your business with expert development services." />
        <link rel="canonical" href="https://www.techxellence.com/ma" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Free Consultation - Techxellence Development Services" />
        <meta property="og:description" content="Get a free consultation for your web development, app development, or custom software project. Transform your business with expert development services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.techxellence.com/ma" />
        <meta property="og:image" content="https://www.techxellence.com/images/og-image-ma.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Consultation - Techxellence Development Services" />
        <meta name="twitter:description" content="Get a free consultation for your web development, app development, or custom software project." />
      </Helmet>
      {/* Header with Logo and Get Started Button */}
      <header className="fixed w-full z-50 bg-slate-950/95 backdrop-blur-md shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center space-x-2 group cursor-pointer">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Techxellence
              </span>
            </Link>

            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-2.5 rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 font-medium"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-3xl -top-20 -left-20 animate-pulse"></div>
          <div className="absolute w-[300px] h-[300px] bg-blue-500/15 rounded-full blur-3xl top-1/2 -right-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute w-[250px] h-[250px] bg-purple-500/10 rounded-full blur-3xl bottom-0 left-1/2 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-4xl mx-auto relative text-center">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/40 rounded-full text-cyan-300 text-sm font-semibold backdrop-blur-sm">
              🚀 Limited Time Offer - Free Consultation
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Transform Your Business with
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mt-2">
              Custom Development Solutions
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Get a professional website, mobile app, or custom software solution that drives results.
            Join 500+ satisfied clients who chose us for their digital transformation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <div className="flex items-center gap-2 text-cyan-400">
              <CheckCircle className="w-5 h-5" />
              <span className="text-sm">Free Consultation</span>
            </div>
            <div className="flex items-center gap-2 text-cyan-400">
              <CheckCircle className="w-5 h-5" />
              <span className="text-sm">30-Day Money Back</span>
            </div>
            <div className="flex items-center gap-2 text-cyan-400">
              <CheckCircle className="w-5 h-5" />
              <span className="text-sm">Expert Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why Choose <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Techxellence</span>?
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              We deliver exceptional results with cutting-edge technology and proven methodologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-2xl border border-slate-600/50 hover:border-cyan-500/50 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture Form */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 lg:p-12 rounded-3xl border border-slate-700/50 shadow-2xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Get Your <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Free Consultation</span>
              </h2>
              <p className="text-slate-400 text-lg mb-6">
                Tell us about your project and we'll provide a custom solution with transparent pricing
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400 text-sm font-medium">No obligation • Free consultation</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-slate-300">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors text-white placeholder-slate-500"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-slate-300">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors text-white placeholder-slate-500"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2 text-slate-300">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors text-white placeholder-slate-500"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2 text-slate-300">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors text-white placeholder-slate-500"
                    placeholder="Your Company"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-2 text-slate-300">
                  Service Interested In *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors text-white"
                >
                  {services.map((service) => (
                    <option key={service.value} value={service.value} className="bg-slate-800">
                      {service.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-slate-300">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors text-white placeholder-slate-500 resize-none"
                  placeholder="Tell us about your project requirements..."
                />
              </div>

              {status === 'success' && (
                <div className="flex items-center gap-3 p-4 bg-emerald-500/10 border border-emerald-500/50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <p className="text-emerald-400">Thank you! Redirecting you to our main site...</p>
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-center gap-3 p-4 bg-rose-500/10 border border-rose-500/50 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-rose-400 flex-shrink-0" />
                  <p className="text-rose-400">{errorMessage}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Submitting...
                  </>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Success! Redirecting...
                  </>
                ) : (
                  <>
                    Get Free Consultation
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              What Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Clients Say</span>
            </h2>
            <p className="text-slate-400 text-lg">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-2xl border border-slate-600/50">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-300 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-cyan-400">{testimonial.name}</p>
                  <p className="text-slate-500 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Start Your <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Digital Journey</span>?
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses that have transformed their online presence with our expert development services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center gap-2 text-emerald-400">
              <CheckCircle className="w-5 h-5" />
              <span>Free initial consultation</span>
            </div>
            <div className="flex items-center gap-2 text-emerald-400">
              <CheckCircle className="w-5 h-5" />
              <span>Custom project roadmap</span>
            </div>
            <div className="flex items-center gap-2 text-emerald-400">
              <CheckCircle className="w-5 h-5" />
              <span>Transparent pricing</span>
            </div>
          </div>
        </div>
      </section>

      <MinimalFooter />
    </div>
  );
}
