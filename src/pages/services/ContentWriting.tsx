import { Link } from 'react-router-dom';
import { FileText, PenTool, BarChart, Users, ArrowRight, CheckCircle, Zap } from 'lucide-react';

export default function ContentWriting() {
  const features = [
    'Blog Writing',
    'Website Content',
    'SEO Content Creation',
    'Social Media Content',
    'Email Copywriting',
    'Product Descriptions',
    'Technical Writing',
    'Ghostwriting'
  ];

  const contentTypes = [
    { name: 'Blog Posts', icon: FileText },
    { name: 'Website Copy', icon: PenTool },
    { name: 'SEO Articles', icon: BarChart },
    { name: 'Social Posts', icon: Users },
    { name: 'Email Campaigns', icon: FileText },
    { name: 'Product Content', icon: PenTool }
  ];

  const benefits = [
    'Engages your audience',
    'Improves SEO rankings',
    'Establishes authority',
    'Drives conversions',
    'Builds brand voice',
    'Cost-effective marketing'
  ];

  const process = [
    {
      step: '1',
      title: 'Strategy & Research',
      description: 'Understand your brand, audience, and goals to create a content strategy.'
    },
    {
      step: '2',
      title: 'Content Planning',
      description: 'Develop a content calendar and outline topics that resonate with your audience.'
    },
    {
      step: '3',
      title: 'Writing & Creation',
      description: 'Craft compelling, well-researched content that aligns with your brand voice.'
    },
    {
      step: '4',
      title: 'Editing & Optimization',
      description: 'Edit for clarity, SEO optimization, and ensure brand consistency.'
    },
    {
      step: '5',
      title: 'Review & Delivery',
      description: 'Final review, revisions, and delivery of polished content.'
    },
    {
      step: '6',
      title: 'Performance Tracking',
      description: 'Monitor content performance and provide analytics reports.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-20">
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute w-[500px] h-[500px] bg-teal-500/20 rounded-full blur-3xl top-0 left-1/4 animate-pulse"></div>
          <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl bottom-0 right-1/4 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <PenTool className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Content
              <span className="block bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
                Writing Services
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Professional content writing that engages your audience, boosts SEO, and drives results. From blogs to websites, we create compelling content that converts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {features.slice(0, 4).map((feature, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-900 to-slate-800 p-4 rounded-xl border border-slate-700/50 text-center">
                <CheckCircle className="w-6 h-6 text-teal-400 mx-auto mb-2" />
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
              Content <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">Types</span>
            </h2>
            <p className="text-slate-400 text-lg">We write content that drives engagement</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {contentTypes.map((type, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-2xl border border-slate-700/50 hover:border-teal-500/50 transition-all duration-300 text-center hover:transform hover:-translate-y-2">
                <type.icon className="w-10 h-10 text-teal-400 mx-auto mb-4" />
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
                Why Choose <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">Content Writing?</span>
              </h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Quality content is the foundation of successful digital marketing. Our expert writers create engaging, SEO-optimized content that attracts, informs, and converts your audience.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-400 flex-shrink-0" />
                    <span className="text-slate-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-3xl border border-slate-700/50">
              <div className="text-center mb-6">
                <PenTool className="w-16 h-16 text-teal-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Creative Storytelling</h3>
                <p className="text-slate-400">We craft narratives that connect with your audience emotionally</p>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <BarChart className="w-8 h-8 text-teal-400 mx-auto mb-2" />
                  <p className="text-2xl font-bold">SEO Optimized</p>
                  <p className="text-slate-400 text-sm">Content</p>
                </div>
                <div>
                  <Users className="w-8 h-8 text-teal-400 mx-auto mb-2" />
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
              Our Content <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-slate-400 text-lg">Complete content writing solutions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-xl border border-slate-700/50 hover:border-teal-500/50 transition-all duration-300">
                <CheckCircle className="w-6 h-6 text-teal-400 flex-shrink-0 mt-1" />
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
              Our <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-slate-400 text-lg">How we create content that performs</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {process.map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-2xl border border-slate-700/50 hover:border-teal-500/50 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center text-xl font-bold">
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
          <div className="relative bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-700 rounded-3xl p-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

            <div className="relative text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Ready to Create Compelling Content?
              </h2>
              <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
                Let's craft content that engages your audience and drives your business forward
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-cyan-600 px-10 py-4 rounded-full text-lg font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Start Writing
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
