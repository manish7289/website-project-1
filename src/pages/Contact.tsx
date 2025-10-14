import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'web-development',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const services = [
    { value: 'web-development', label: 'Web Development' },
    { value: 'app-development', label: 'App Development' },
    { value: 'ecommerce', label: 'E-commerce Solutions' },
    { value: 'custom-software', label: 'Custom Software' },
    { value: 'other', label: 'Other Services' }
  ];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      // Simulate form submission (replace with your backend API call)
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate network delay

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: 'web-development',
        message: ''
      });

      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setErrorMessage('Failed to submit form. Please try again.');
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-20">
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl top-0 right-0"></div>
          <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl bottom-0 left-0"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-3 mb-6">
              Let's Build Something
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Amazing Together
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-slate-400 mb-2">info@devcraft.com</p>
              <p className="text-slate-400">support@devcraft.com</p>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="text-slate-400 mb-2">+1 (555) 123-4567</p>
              <p className="text-slate-400">Mon-Fri, 9AM-6PM EST</p>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Visit Us</h3>
              <p className="text-slate-400 mb-2">123 Tech Street</p>
              <p className="text-slate-400">Silicon Valley, CA 94025</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Fill out the form below and we'll get back to you within 24 hours. Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2">
                    Service Interested In *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
                  >
                    {services.map((service) => (
                      <option key={service.value} value={service.value}>
                        {service.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {status === 'success' && (
                  <div className="flex items-center gap-3 p-4 bg-emerald-500/10 border border-emerald-500/50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <p className="text-emerald-400">Thank you! Your message has been sent successfully.</p>
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
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl border border-slate-700/50">
                <h3 className="text-2xl font-bold mb-6">Why Choose DevCraft?</h3>
                <ul className="space-y-4">
                  {[
                    'Expert team with 10+ years experience',
                    'Proven track record of 500+ successful projects',
                    'Agile development methodology',
                    '24/7 support and maintenance',
                    'Competitive pricing with no hidden costs',
                    'Fast turnaround times'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-cyan-600 via-blue-600 to-purple-700 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">Free Consultation</h3>
                <p className="text-blue-100 mb-6">
                  Not sure where to start? Book a free consultation with our experts to discuss your project and get professional advice.
                </p>
                <a
                  href="mailto:info@devcraft.com"
                  className="inline-block bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300"
                >
                  Book Consultation
                </a>
              </div>

              <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl border border-slate-700/50">
                <h3 className="text-2xl font-bold mb-4">Office Hours</h3>
                <div className="space-y-3 text-slate-300">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="text-cyan-400">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-cyan-400">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-slate-500">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
