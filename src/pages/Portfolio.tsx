import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'Shenaa - Modest Clothing Brand',
      description: 'At SHENAA, we believe modesty is powerful and elegance is timeless. Our clothing is thoughtfully crafted to balance style, comfort, and sophistication—perfect for women who want to look confident without compromising on modest values.',
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=compress&cs=tinysrgb&w=800&h=600',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'E-commerce',
      liveUrl: 'https://shenaa.co.in/',
      featured: true
    },
    {
      id: 2,
      title: 'TechFlow - SaaS Dashboard',
      description: 'A comprehensive SaaS dashboard with real-time analytics, user management, and advanced reporting features.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=compress&cs=tinysrgb&w=800&h=600',
      technologies: ['React', 'TypeScript', 'Firebase', 'Chart.js'],
      category: 'SaaS',
      liveUrl: '#',
      featured: false
    },
    {
      id: 3,
      title: 'FitLife - Fitness App',
      description: 'A mobile-first fitness application with workout tracking, nutrition planning, and community features.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=compress&cs=tinysrgb&w=800&h=600',
      technologies: ['React Native', 'Node.js', 'PostgreSQL', 'AWS'],
      category: 'Mobile App',
      liveUrl: '#',
      featured: false
    },
    {
      id: 4,
      title: 'EduLearn - Learning Platform',
      description: 'An interactive online learning platform with video courses, quizzes, and progress tracking.',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=compress&cs=tinysrgb&w=800&h=600',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'AWS S3'],
      category: 'Education',
      liveUrl: '#',
      featured: false
    },
    {
      id: 5,
      title: 'GreenMarket - Organic Store',
      description: 'An e-commerce platform for organic products with inventory management and delivery tracking.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=compress&cs=tinysrgb&w=800&h=600',
      technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Stripe'],
      category: 'E-commerce',
      liveUrl: '#',
      featured: false
    },
    {
      id: 6,
      title: 'TaskMaster - Project Management',
      description: 'A collaborative project management tool with real-time updates and team communication features.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=compress&cs=tinysrgb&w=800&h=600',
      technologies: ['React', 'Socket.io', 'Express', 'MongoDB'],
      category: 'Productivity',
      liveUrl: '#',
      featured: false
    }
  ];

  const categories = ['All', 'E-commerce', 'SaaS', 'Mobile App', 'Education', 'Productivity'];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

        <div className="max-w-7xl mx-auto relative text-center">
          <div className="inline-block mb-6 animate-fade-in">
            <span className="px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-2 border-cyan-500/40 rounded-full text-cyan-300 text-sm font-semibold backdrop-blur-sm shadow-lg shadow-cyan-500/20">
              Our Portfolio
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up leading-tight">
            Showcasing Our
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mt-2">
              Best Work
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto animate-slide-up animation-delay-200 leading-relaxed">
            Explore our portfolio of successful projects that demonstrate our expertise in delivering exceptional digital solutions.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Featured Project */}
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
              Featured <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Project</span>
            </h2>
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl overflow-hidden border border-slate-700/50 shadow-2xl">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative overflow-hidden">
                  <img
                    src={projects[0].image}
                    alt={projects[0].title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-cyan-500 text-slate-900 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-slate-700 text-cyan-400 rounded-full text-sm font-medium">
                      {projects[0].category}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">{projects[0].title}</h3>
                  <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                    {projects[0].description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {projects[0].technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={projects[0].liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 font-medium"
                    >
                      View Live Site
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 border border-slate-600 px-6 py-3 rounded-full hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 font-medium"
                    >
                      Similar Project
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All Projects */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
              All <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.slice(1).map((project) => (
                <div key={project.id} className="group bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-slate-900/80 backdrop-blur-sm text-cyan-400 rounded-full text-xs font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-sm mb-4 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span key={index} className="px-2 py-1 bg-slate-700 text-slate-300 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-slate-700 text-slate-300 rounded text-xs">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="flex gap-3">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-cyan-400 font-medium hover:gap-2 transition-all text-sm"
                      >
                        View Live
                        <ExternalLink className="w-3 h-3" />
                      </a>
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-1 text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                      >
                        Similar
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

        <div className="max-w-7xl mx-auto relative text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to Start Your
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mt-2">
              Next Project?
            </span>
          </h2>

          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your vision and create something amazing together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 font-medium"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 border border-slate-600 px-8 py-4 rounded-full hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 font-medium"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
