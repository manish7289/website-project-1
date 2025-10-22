import { Link } from 'react-router-dom';
import { FileText, PenTool, BarChart, Users, ArrowRight, CheckCircle, Zap } from 'lucide-react';

export default function ContentMarketing() {
  const features = [
    'Content Strategy Development',
    'Blog Writing & Management',
    'SEO Content Creation',
    'Social Media Content',
    'Email Newsletter Content',
    'Video Content Production',
    'Infographic Design',
    'Content Distribution'
  ];

  const contentTypes = [
    { name: 'Blog Posts', icon: FileText },
    { name: 'Social Content', icon: Users },
    { name: 'Email Campaigns', icon: PenTool },
    { name: 'Video Content', icon: BarChart },
    { name: 'Infographics', icon: FileText },
    { name: 'Whitepapers', icon: FileText }
  ];

  const benefits = [
    'Establishes thought leadership',
    'Improves SEO rankings',
    'Builds brand awareness',
    'Generates leads organically',
    'Educates and engages audience',
    'Creates shareable assets'
  ];

  const process = [
    {
      step: '1',
      title: 'Strategy & Planning',
      description: 'Define content goals, target audience, and develop a comprehensive content strategy.'
    },
    {
      step: '2',
      title: 'Content Audit',
      description: 'Analyze existing content and identify gaps and opportunities.'
    },
    {
      step: '3',
      title: 'Content Creation',
      description: 'Produce high-quality, engaging content across multiple formats.'
    },
    {
      step: '4',
      title: 'Content Optimization',
      description: 'Optimize content for SEO and user engagement.'
    },
    {
      step: '5',
      title: 'Distribution & Promotion',
      description: 'Distribute content across relevant channels and promote it effectively.'
    },
    {
      step: '6',
      title: 'Analytics & Refinement',
      description: 'Track performance and refine strategy based on data insights.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-20">
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-3xl top-0 left-1/4 animate-pulse"></div>
          <div className="absolute w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl bottom-0 right-1/4 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FileText className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Content
              <span className="block bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                Marketing
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Create valuable, engaging content that attracts, educates, and converts your audience. Our content marketing strategies drive organic growth and build lasting relationships.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {features.slice(0, 4).map((feature, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-900 to-slate-800 p-4 rounded-xl border border-slate-700/50 text-center">
                <CheckCircle className="w-6 h-6 text-indigo-400 mx-auto mb-2" />
                <p className="text-sm text-slate-300">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Content <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">Types</span>
            </h2>
            <p className="text-slate-400 text-lg">We create content that resonates with your audience</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {contentTypes.map((type, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-2xl border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 text-center hover:transform hover:-translate-y-2">
                <type.icon className="w-10 h-10 text-indigo-400 mx-auto mb-4" />
                <p className="font-semibold text-sm">{type.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Why <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">Content Marketing?</span>
              </h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Content marketing builds trust, establishes authority, and drives organic traffic. Unlike traditional advertising, it provides long-term value to your audience.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                    <span className="text-slate-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-3xl border border-slate-700/50">
              <div className="text-center mb-6">
                <PenTool className="w-16 h-16 text-indigo-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Storytelling</h3>
                <p className="text-slate-400">We craft compelling narratives that connect with your audience</p>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <BarChart className="w-8 h-8 text-indigo-400 mx-auto mb-2" />
                  <p className="text-2xl font-bold">Data-Driven</p>
                  <p className="text-slate-400 text-sm">Content</p>
                </div>
                <div>
                  <Users className="w-8 h-8 text-indigo-400 mx-auto mb-2" />
                  <p className="text-2xl font-bold">Audience</p>
                  <p className="text-slate-400 text-sm">Focused</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Our Content <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-slate-400 text-lg">Complete content marketing solutions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-xl border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300">
                <CheckCircle className="w-6 h-6 text-indigo-400 flex-shrink-0 mt-1" />
                <span className="text-slate-300 text-lg">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Our <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-slate-400 text-lg">How we create content that drives results</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {process.map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-2xl border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
                <p className="text-slate-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-700 rounded-3xl p-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

            <div className="relative text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Ready to Tell Your Story?
              </h2>
              <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                Let's create compelling content that engages your audience and drives growth
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-purple-600 px-10 py-4 rounded-full text-lg font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Start Content Strategy
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
