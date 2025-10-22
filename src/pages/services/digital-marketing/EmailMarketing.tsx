import { Link } from 'react-router-dom';
import { Mail, Users, BarChart, Target, ArrowRight, CheckCircle, Zap } from 'lucide-react';

export default function EmailMarketing() {
  const features = [
    'Email List Building',
    'Newsletter Design & Creation',
    'Automated Email Campaigns',
    'A/B Testing & Optimization',
    'Email Deliverability Management',
    'Segmentation & Personalization',
    'Performance Analytics',
    'Compliance & Best Practices'
  ];

  const campaignTypes = [
    { name: 'Welcome Series', icon: Mail },
    { name: 'Newsletter', icon: Users },
    { name: 'Promotional', icon: Target },
    { name: 'Transactional', icon: BarChart },
    { name: 'Re-engagement', icon: Mail },
    { name: 'Lead Nurturing', icon: Users }
  ];

  const benefits = [
    'Direct communication channel',
    'High ROI compared to other channels',
    'Personalized messaging',
    'Measurable results',
    'Build customer relationships',
    'Drive repeat business'
  ];

  const process = [
    {
      step: '1',
      title: 'Strategy Development',
      description: 'Define email marketing goals, target audience, and campaign objectives.'
    },
    {
      step: '2',
      title: 'List Building & Segmentation',
      description: 'Grow your email list and segment subscribers based on behavior and preferences.'
    },
    {
      step: '3',
      title: 'Content Creation',
      description: 'Design engaging email templates and create compelling copy.'
    },
    {
      step: '4',
      title: 'Automation Setup',
      description: 'Set up automated email sequences and workflows.'
    },
    {
      step: '5',
      title: 'Testing & Launch',
      description: 'A/B test campaigns and launch optimized email sequences.'
    },
    {
      step: '6',
      title: 'Monitoring & Optimization',
      description: 'Track performance metrics and continuously optimize campaigns.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-20">
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl top-0 left-1/4 animate-pulse"></div>
          <div className="absolute w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl bottom-0 right-1/4 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Email
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Marketing
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Build lasting relationships with your customers through targeted email campaigns. Our email marketing strategies drive engagement, conversions, and customer loyalty.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {features.slice(0, 4).map((feature, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-900 to-slate-800 p-4 rounded-xl border border-slate-700/50 text-center">
                <CheckCircle className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
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
              Campaign <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Types</span>
            </h2>
            <p className="text-slate-400 text-lg">We create emails that deliver results</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {campaignTypes.map((type, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 text-center hover:transform hover:-translate-y-2">
                <type.icon className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
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
                Why Choose <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Email Marketing?</span>
              </h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Email marketing offers one of the highest ROIs of any digital marketing channel. It allows for personalized communication and direct engagement with your audience.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-slate-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-3xl border border-slate-700/50">
              <div className="text-center mb-6">
                <Target className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Personalized</h3>
                <p className="text-slate-400">Reach customers with tailored messages that resonate</p>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <BarChart className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                  <p className="text-2xl font-bold">Trackable</p>
                  <p className="text-slate-400 text-sm">Results</p>
                </div>
                <div>
                  <Users className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                  <p className="text-2xl font-bold">Direct</p>
                  <p className="text-slate-400 text-sm">Communication</p>
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
              Our Email <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-slate-400 text-lg">Complete email marketing management</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
                <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
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
              Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-slate-400 text-lg">How we build successful email campaigns</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {process.map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center text-xl font-bold">
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
          <div className="relative bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-700 rounded-3xl p-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

            <div className="relative text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Ready to Connect with Your Customers?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's create email campaigns that nurture leads and drive conversions
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-10 py-4 rounded-full text-lg font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Start Email Campaign
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
