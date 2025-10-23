import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import {
  ArrowRight,
  Code2,
  Smartphone,
  ShoppingCart,
  Database,
  Users,
  Award,
  TrendingUp,
  Zap,
  CheckCircle,
  Search,
  FileText,
  Cog,
  TestTube,
  Rocket,
  ChevronDown,
  ChevronUp,
  Palette,
  PenTool
} from 'lucide-react';
import aboutUsImage from '../assets/images/web-development-programming-.png';
import patternVideo from '../assets/images/Updated-Pattern.mp4';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Award, value: '50+', label: 'Happy customer' },
    { icon: TrendingUp, value: '98%', label: 'Success Rate' },
    { icon: Zap, value: '1000+', label: 'Projects Done' }
  ];

  const services = [
    {
      icon: Code2,
      title: 'Web Development',
      description: 'Custom responsive websites built with modern frameworks and best practices.',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      icon: Smartphone,
      title: 'App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Solution',
      description: 'Powerful online stores with seamless payment integration and management.',
      color: 'from-orange-500 to-rose-600'
    },
    {
      icon: Database,
      title: 'Custom Software',
      description: 'Tailored software solutions designed specifically for your business needs.',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to boost your online presence and drive growth.',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: Palette,
      title: 'Graphic Design',
      description: 'Creative visual solutions that bring your brand to life and captivate your audience.',
      color: 'from-pink-500 to-purple-600'
    },
    {
      icon: PenTool,
      title: 'Content Writing',
      description: 'Professional content writing that engages your audience and drives conversions.',
      color: 'from-teal-500 to-cyan-600'
    }
  ];



  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="relative pt-32 pb-20 px-4 overflow-hidden min-h-screen flex items-center">
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-100"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={patternVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px] bg-cyan-500/30 rounded-full blur-3xl -top-24 sm:-top-32 md:-top-48 left-1/4 animate-pulse"></div>
          <div className="absolute w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px] bg-blue-500/30 rounded-full blur-3xl top-1/2 right-1/4 animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] bg-purple-500/20 rounded-full blur-3xl bottom-0 left-1/2 animate-pulse" style={{ animationDelay: '1s' }}></div>

          <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-1 h-1 sm:w-2 sm:h-2 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-20 sm:top-40 right-5 sm:right-20 w-2 h-2 sm:w-3 sm:h-3 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute bottom-20 sm:bottom-40 left-1/3 w-1 h-1 sm:w-2 sm:h-2 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '2.5s' }}></div>
          <div className="absolute bottom-10 sm:bottom-20 right-1/3 w-2 h-2 sm:w-3 sm:h-3 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-4 sm:mb-6 animate-fade-in">
              <span className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-2 border-cyan-500/40 rounded-full text-cyan-300 text-xs sm:text-sm font-semibold backdrop-blur-sm shadow-lg shadow-cyan-500/20">
                #1 Development Agency 2025
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-6 sm:mb-8 animate-slide-up leading-tight">
              Transforming Ideas Into
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mt-1 sm:mt-2">
                Digital Reality
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-8 sm:mb-12 max-w-3xl mx-auto animate-slide-up animation-delay-200 leading-relaxed px-4 sm:px-0">
              We craft innovative <span className="text-cyan-400 font-semibold">web applications</span>, <span className="text-blue-400 font-semibold">mobile apps</span>, and <span className="text-purple-400 font-semibold">custom software</span> that transform businesses and delight users worldwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animation-delay-300 px-4 sm:px-0">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/portfolio"
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold border-2 border-cyan-500/30 hover:bg-cyan-500/10 transition-all duration-300 w-full sm:w-auto text-center"
              >
                View Our Work
              </Link>
            </div>
          </div>


        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6">
              <div>
                <span className="text-cyan-400 font-semibold text-xs sm:text-sm uppercase tracking-wider">About Us</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2 sm:mt-3 mb-4 sm:mb-6">
                  Transforming Ideas Into
                  <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Digital Reality
                  </span>
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed mb-6 sm:mb-8">
                  We are a leading software development agency specializing in creating innovative digital solutions that drive business growth. With years of experience and a team of expert developers, we transform complex ideas into user-friendly applications that deliver real results.
                </p>
                <p className="text-sm sm:text-base md:text-lg text-slate-400 leading-relaxed mb-6 sm:mb-8">
                  Our mission is to empower businesses with cutting-edge technology, helping them stay ahead in the digital landscape. We believe in quality, innovation, and building long-term partnerships with our clients.
                </p>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-cyan-500/30">
                    <span className="text-cyan-300 font-semibold text-sm sm:text-base">Innovation First</span>
                  </div>
                  <div className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-emerald-500/30">
                    <span className="text-emerald-300 font-semibold text-sm sm:text-base">Quality Driven</span>
                  </div>
                  <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-purple-500/30">
                    <span className="text-purple-300 font-semibold text-sm sm:text-base">Client Focused</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative p-4 sm:p-8 rounded-3xl overflow-hidden">
                <div className="w-full max-w-[611px] h-auto aspect-[611/440] rounded-2xl overflow-hidden mx-auto">
                  <img
                    src={aboutUsImage}
                    alt="About Us - Transforming Ideas Into Digital Reality vector illustration"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">What We Do</span>
            <h2 className="text-4xl sm:text-5xl font-bold mt-3 mb-4">
              Our Core <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Comprehensive development solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 cursor-pointer"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-cyan-400 font-semibold hover:gap-3 transition-all"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>







    

      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Our Expertise</span>
                <h2 className="text-4xl sm:text-5xl font-bold mt-3 mb-6">
                  Cutting-Edge <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Technology Stack</span>
                </h2>
                <p className="text-xl text-slate-300 leading-relaxed mb-8">
                  We leverage the latest technologies and frameworks to build robust, scalable, and future-proof solutions that drive your business forward.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-2xl border border-slate-600/50 hover:border-cyan-500/50 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Code2 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-cyan-400 transition-colors">Frontend</h3>
                  <p className="text-slate-400 text-sm">React, Next.js, Vue.js, Angular</p>
                </div>

                <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-2xl border border-slate-600/50 hover:border-emerald-500/50 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-emerald-400 transition-colors">Backend</h3>
                  <p className="text-slate-400 text-sm">Node.js, Python, PHP, .NET</p>
                </div>

                <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-2xl border border-slate-600/50 hover:border-blue-500/50 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors">Mobile</h3>
                  <p className="text-slate-400 text-sm">React Native, Flutter, iOS, Android</p>
                </div>

                <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-2xl border border-slate-600/50 hover:border-purple-500/50 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-purple-400 transition-colors">Cloud</h3>
                  <p className="text-slate-400 text-sm">AWS, Azure, Google Cloud, Vercel</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-3xl border border-slate-700/50 shadow-2xl">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>

                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-600/30">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <Code2 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-cyan-400">Modern Frameworks</h4>
                      <p className="text-sm text-slate-400">Latest tools & technologies</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-600/30">
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                      <Database className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-emerald-400">Scalable Architecture</h4>
                      <p className="text-sm text-slate-400">Built for growth & performance</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-600/30">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
                      <Smartphone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-400">Cross-Platform</h4>
                      <p className="text-sm text-slate-400">Seamless user experience</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-600/30">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-400">Cloud-Native</h4>
                      <p className="text-sm text-slate-400">Future-ready deployments</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">How We Work</span>
            <h2 className="text-4xl sm:text-5xl font-bold mt-3 mb-4">
              Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Development Process</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              We follow a proven methodology to deliver exceptional results for every project
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Search className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center text-slate-900 font-bold text-sm">1</div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">Discovery</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We analyze your requirements, goals, and target audience to create a comprehensive project roadmap.
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-400 rounded-full flex items-center justify-center text-slate-900 font-bold text-sm">2</div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-400 transition-colors">Planning</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Detailed project planning with wireframes, user flows, and technical specifications for clear execution.
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Cog className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center text-slate-900 font-bold text-sm">3</div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">Development</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Agile development with regular updates, using modern technologies and best coding practices.
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <TestTube className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center text-slate-900 font-bold text-sm">4</div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-orange-400 transition-colors">Testing</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Comprehensive testing across devices and browsers to ensure quality and performance.
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Rocket className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-400 rounded-full flex items-center justify-center text-slate-900 font-bold text-sm">5</div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">Launch</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Smooth deployment with ongoing support and monitoring to ensure everything runs perfectly.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-400 mb-6">
              Ready to start your project? Let's discuss your vision and bring it to life.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 font-medium"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Latest Blog Posts</span>
            <h2 className="text-4xl sm:text-5xl font-bold mt-3 mb-4">
              Stay Updated with Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Insights</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Discover the latest trends, tips, and insights in web development and technology.
            </p>
          </div>

          <div className="relative overflow-hidden">
            <div
              ref={scrollRef}
              className="flex animate-scroll-right-to-left cursor-grab active:cursor-grabbing overflow-x-auto"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
            >
              <style dangerouslySetInnerHTML={{
                __html: `
                  .flex::-webkit-scrollbar {
                    display: none;
                  }
                `
              }} />
              {[
                {
                  id: 1,
                  title: 'The Future of React Development: What to Expect in 2025',
                  excerpt: 'Explore the upcoming features and trends that will shape React development.',
                  image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400&h=250',
                  category: 'Web Development'
                },
                {
                  id: 2,
                  title: 'Building Scalable Mobile Apps with React Native',
                  excerpt: 'Learn best practices for creating high-performance mobile applications.',
                  image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400&h=250',
                  category: 'Mobile Apps'
                },
                {
                  id: 3,
                  title: 'Why Your Business Needs a Custom Software Solution',
                  excerpt: 'Discover how tailored software can give your business a competitive edge.',
                  image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400&h=250',
                  category: 'Business'
                },
                {
                  id: 4,
                  title: 'The Rise of AI in Web Development',
                  excerpt: 'How artificial intelligence is transforming the way we build websites.',
                  image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400&h=250',
                  category: 'Technology'
                },
                {
                  id: 5,
                  title: 'Optimizing Performance in React Applications',
                  excerpt: 'Essential techniques for building fast and efficient React apps.',
                  image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400&h=250',
                  category: 'Web Development'
                },
                {
                  id: 6,
                  title: 'Cross-Platform Development: Pros and Cons',
                  excerpt: 'A comprehensive guide to choosing between native and cross-platform development.',
                  image: 'https://images.pexels.com/photos/1108102/pexels-photo-1108102.jpeg?auto=compress&cs=tinysrgb&w=400&h=250',
                  category: 'Mobile Apps'
                }
              ].map((post, index) => (
                <div key={index} className="flex-shrink-0 w-80 mx-4">
                  <article className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group cursor-pointer h-full">
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-slate-900/80 backdrop-blur-sm text-cyan-400 rounded-full text-xs font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-lg font-bold mb-3 group-hover:text-cyan-400 transition-colors leading-tight line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-slate-400 text-sm mb-4 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>

                      <Link
                        to={`/blog/${post.id}`}
                        className="inline-flex items-center gap-2 text-cyan-400 font-medium hover:gap-3 transition-all group-hover:text-cyan-300"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </article>
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {[
                {
                  id: 1,
                  title: 'The Future of React Development: What to Expect in 2025',
                  excerpt: 'Explore the upcoming features and trends that will shape React development.',
                  image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400&h=250',
                  category: 'Web Development'
                },
                {
                  id: 2,
                  title: 'Building Scalable Mobile Apps with React Native',
                  excerpt: 'Learn best practices for creating high-performance mobile applications.',
                  image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400&h=250',
                  category: 'Mobile Apps'
                },
                {
                  id: 3,
                  title: 'Why Your Business Needs a Custom Software Solution',
                  excerpt: 'Discover how tailored software can give your business a competitive edge.',
                  image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400&h=250',
                  category: 'Business'
                },
                {
                  id: 4,
                  title: 'The Rise of AI in Web Development',
                  excerpt: 'How artificial intelligence is transforming the way we build websites.',
                  image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400&h=250',
                  category: 'Technology'
                },
                {
                  id: 5,
                  title: 'Optimizing Performance in React Applications',
                  excerpt: 'Essential techniques for building fast and efficient React apps.',
                  image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400&h=250',
                  category: 'Web Development'
                },
                {
                  id: 6,
                  title: 'Cross-Platform Development: Pros and Cons',
                  excerpt: 'A comprehensive guide to choosing between native and cross-platform development.',
                  image: 'https://images.pexels.com/photos/1108102/pexels-photo-1108102.jpeg?auto=compress&cs=tinysrgb&w=400&h=250',
                  category: 'Mobile Apps'
                }
              ].map((post, index) => (
                <div key={`duplicate-${index}`} className="flex-shrink-0 w-80 mx-4">
                  <article className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group cursor-pointer h-full">
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-slate-900/80 backdrop-blur-sm text-cyan-400 rounded-full text-xs font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-lg font-bold mb-3 group-hover:text-cyan-400 transition-colors leading-tight line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-slate-400 text-sm mb-4 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>

                      <Link
                        to={`/blog/${post.id}`}
                        className="inline-flex items-center gap-2 text-cyan-400 font-medium hover:gap-3 transition-all group-hover:text-cyan-300"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-cyan-400 font-semibold hover:gap-3 transition-all"
            >
              View All Blog Posts
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8">
                <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Frequently Asked Questions</span>
                <h2 className="text-4xl sm:text-5xl font-bold mt-3 mb-4">
                  Got <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Questions?</span>
                </h2>
                <p className="text-slate-400 text-lg mb-8">
                  Find answers to common questions about our services and development process.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    question: "How long does a typical project take?",
                    answer: "Project timelines vary based on complexity and scope. Web development projects typically take 4-8 weeks, mobile apps take 8-16 weeks, and custom software solutions can range from 12-24 weeks. We'll provide a detailed timeline during our initial consultation.",
                    color: "cyan"
                  },
                  {
                    question: "What is your development process?",
                    answer: "We follow a proven 5-step process: Discovery (understanding requirements), Planning (wireframes and specifications), Development (agile coding), Testing (quality assurance), and Launch (deployment and support). This ensures high-quality results delivered on time.",
                    color: "emerald"
                  },
                  {
                    question: "Do you provide ongoing support?",
                    answer: "Yes! We offer comprehensive maintenance and support packages. This includes bug fixes, security updates, performance optimization, and feature enhancements. We also provide 24/7 monitoring and emergency support for critical applications.",
                    color: "blue"
                  },
                  {
                    question: "What technologies do you use?",
                    answer: "We use modern, scalable technologies including React, Next.js, Node.js, Python, React Native, Flutter, AWS, Azure, and more. We choose the best technology stack based on your project requirements and long-term goals.",
                    color: "purple"
                  },
                  {
                    question: "How much does a project cost?",
                    answer: "Costs vary based on project complexity, features, and timeline. We offer flexible pricing models including fixed-price projects and hourly rates. Contact us for a free consultation and detailed quote tailored to your specific needs.",
                    color: "orange"
                  },
                  {
                    question: "Can you work with our existing systems?",
                    answer: "Absolutely! We specialize in integrating with existing systems, modernizing legacy applications, and adding new features to current platforms. We'll assess your existing infrastructure and provide seamless integration solutions.",
                    color: "rose"
                  }
                ].map((faq, index) => (
                  <div key={index} className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-800/50 rounded-xl transition-colors duration-200"
                    >
                      <h3 className={`text-lg font-bold ${faq.color === 'cyan' ? 'text-cyan-400' : faq.color === 'emerald' ? 'text-emerald-400' : faq.color === 'blue' ? 'text-blue-400' : faq.color === 'purple' ? 'text-purple-400' : faq.color === 'orange' ? 'text-orange-400' : 'text-rose-400'}`}>{faq.question}</h3>
                      {openFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0 ml-4" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0 ml-4" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-6">
                        <p className="text-slate-400 text-sm leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <p className="text-slate-400 mb-6">
                  Still have questions? We're here to help!
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 font-medium"
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-3xl border border-slate-700/50 shadow-2xl overflow-hidden">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>

                <div className="relative mb-6">
                  <div className="w-full h-64 rounded-2xl overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600&h=400"
                      alt="Website development vector illustration"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">Have Questions?</h3>
                  <p className="text-slate-400 mb-6">
                    Our team is always ready to help you with any questions about our services, pricing, or development process.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-slate-300">24/7 Support Available</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      <span className="text-slate-300">Free Initial Consultation</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-slate-300">Detailed Project Quotes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 px-6 py-3 rounded-full border border-cyan-500/30 mb-8">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
              <span className="text-cyan-300 font-semibold text-sm uppercase tracking-wider">Let's Get Started</span>
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
            </div>

            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              Ready to Transform Your
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mt-2">
                Digital Vision?
              </span>
            </h2>

            <p className="text-xl sm:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join hundreds of satisfied clients who have turned their ideas into
              <span className="text-cyan-400 font-semibold"> successful digital products</span>
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="group bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">Fast Delivery</h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                We deliver high-quality projects on time with our proven development process and agile methodology.
              </p>
              <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            <div className="group bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-500 hover:transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-emerald-400 transition-colors">Quality Assured</h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                Every project undergoes rigorous testing and quality checks to ensure exceptional performance and user experience.
              </p>
              <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            <div className="group bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors">Dedicated Support</h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                Our team provides ongoing support and maintenance to keep your digital solutions running smoothly.
              </p>
              <div className="flex items-center gap-2 text-purple-400 font-semibold">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-gradient-to-br from-cyan-600 via-blue-600 to-purple-700 rounded-3xl p-12 overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/5 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>

              <div className="relative text-center">
                <div className="inline-flex items-center gap-4 mb-6">
                  <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
                  <span className="text-white/80 font-semibold">Free Consultation Available</span>
                  <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>

                <h3 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
                  Let's Build Something
                  <span className="block text-yellow-300">Amazing Together</span>
                </h3>

                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Schedule a free consultation and discover how we can help bring your vision to life with cutting-edge technology and creative solutions.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link
                    to="/contact"
                    className="group bg-white text-blue-600 px-10 py-4 rounded-full text-lg font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
                  >
                    Get Free Consultation
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    to="/portfolio"
                    className="px-8 py-4 rounded-full text-lg font-semibold border-2 border-white/30 text-white hover:bg-white/10 transition-all duration-300"
                  >
                    View Our Work
                  </Link>
                </div>

                <div className="mt-8 flex justify-center items-center gap-8 text-white/60">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-sm">No Obligation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-sm">Expert Consultation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-sm">Custom Solutions</span>
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
