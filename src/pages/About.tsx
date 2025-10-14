import { Link } from 'react-router-dom';
import {
  Target,
  Eye,
  Heart,
  Users,
  Award,
  TrendingUp,
  Zap,
  CheckCircle,
  Code2,
  Lightbulb,
  Shield
} from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We constantly explore new technologies and approaches to deliver cutting-edge solutions.'
    },
    {
      icon: Heart,
      title: 'Client-Focused',
      description: 'Your success is our priority. We build lasting relationships through exceptional service.'
    },
    {
      icon: CheckCircle,
      title: 'Quality',
      description: 'We maintain the highest standards in every project, ensuring flawless execution.'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Transparency and honesty guide every decision and interaction with our clients.'
    }
  ];

  const team = [
    {
      name: 'Alex Thompson',
      role: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: '15+ years experience in software development and business leadership.'
    },
    {
      name: 'Sarah Mitchell',
      role: 'CTO',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Expert in scalable architecture and emerging technologies.'
    },
    {
      name: 'David Chen',
      role: 'Lead Developer',
      image: 'https://images.pexels.com/photos/2182975/pexels-photo-2182975.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Full-stack specialist with expertise in modern web frameworks.'
    },
    {
      name: 'Emily Roberts',
      role: 'UI/UX Designer',
      image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Creative designer focused on user-centered design principles.'
    },
    {
      name: 'Michael Lee',
      role: 'Mobile Developer',
      image: 'https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'iOS and Android expert building native and cross-platform apps.'
    },
    {
      name: 'Lisa Anderson',
      role: 'Project Manager',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Agile methodology specialist ensuring smooth project delivery.'
    }
  ];

  const stats = [
    { icon: Users, value: '50+', label: 'Team Members' },
    { icon: Award, value: '100+', label: 'Awards Won' },
    { icon: TrendingUp, value: '500+', label: 'Projects Delivered' },
    { icon: Zap, value: '10+', label: 'Years Experience' }
  ];

  const milestones = [
    { year: '2014', title: 'Company Founded', description: 'Started with a vision to transform digital experiences' },
    { year: '2016', title: 'Team Expansion', description: 'Grew to 20+ talented professionals' },
    { year: '2018', title: 'International Reach', description: 'Expanded services to clients worldwide' },
    { year: '2020', title: 'Innovation Award', description: 'Recognized for excellence in development' },
    { year: '2023', title: '500+ Projects', description: 'Milestone of successful project deliveries' },
    { year: '2025', title: 'Leading Agency', description: 'Established as top development company' }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-20">
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl top-0 right-0"></div>
          <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl bottom-0 left-0"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-3 mb-6">
              Building Digital Excellence
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Since 2014
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              We are a passionate team of developers, designers, and innovators dedicated to creating exceptional digital solutions that drive business growth and deliver measurable results.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 text-center"
              >
                <stat.icon className="w-10 h-10 text-cyan-400 mb-3 mx-auto" />
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-8 h-8 text-cyan-400" />
                <h2 className="text-3xl sm:text-4xl font-bold">Our Mission</h2>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                To empower businesses with innovative technology solutions that transform ideas into reality. We strive to be the trusted partner for companies seeking to accelerate their digital transformation and achieve sustainable growth.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed">
                Through cutting-edge development practices and unwavering commitment to quality, we deliver solutions that exceed expectations and create lasting value.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <Eye className="w-8 h-8 text-cyan-400" />
                <h2 className="text-3xl sm:text-4xl font-bold">Our Vision</h2>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                To become the world's most trusted development partner, recognized for excellence in delivering transformative digital experiences that shape the future of technology.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed">
                We envision a future where every business, regardless of size, has access to enterprise-grade technology solutions that drive innovation and success.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-slate-400 text-lg">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 text-center hover:transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Meet Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-slate-400 text-lg">
              Talented professionals dedicated to your success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:-translate-y-2"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-cyan-400 text-sm mb-3">{member.role}</p>
                  <p className="text-slate-400 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-slate-400 text-lg">
              Key milestones in our growth story
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-500 to-blue-600 hidden lg:block"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row gap-8 items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
                      <h3 className="text-2xl font-bold mb-2">{milestone.title}</h3>
                      <p className="text-slate-400">{milestone.description}</p>
                    </div>
                  </div>

                  <div className="relative flex items-center justify-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center font-bold text-lg z-10">
                      {milestone.year}
                    </div>
                  </div>

                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-br from-cyan-600 via-blue-600 to-purple-700 rounded-3xl p-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

            <div className="relative text-center">
              <Code2 className="w-16 h-16 text-white mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Join Us on This Journey
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Partner with a team that's committed to your success
              </p>
              <Link
                to="/contact"
                className="inline-block bg-white text-blue-600 px-10 py-4 rounded-full text-lg font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
