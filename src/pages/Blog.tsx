import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  Search,
  Tag,
  ChevronRight,
  BookOpen,
  Code,
  Smartphone,
  TrendingUp
} from 'lucide-react';

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    { name: 'All', count: 12 },
    { name: 'Web Development', count: 5 },
    { name: 'Mobile Apps', count: 3 },
    { name: 'Technology', count: 2 },
    { name: 'Business', count: 2 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of React Development: What to Expect in 2025',
      excerpt: 'Explore the upcoming features and trends that will shape React development in the coming year.',
      author: 'DevCraft Team',
      date: '2025-01-15',
      readTime: '5 min read',
      category: 'Web Development',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800&h=400',
      featured: true
    },
    {
      id: 2,
      title: 'Building Scalable Mobile Apps with React Native',
      excerpt: 'Learn best practices for creating high-performance mobile applications that scale.',
      author: 'Sarah Johnson',
      date: '2025-01-10',
      readTime: '7 min read',
      category: 'Mobile Apps',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800&h=400',
      featured: false
    },
    {
      id: 3,
      title: 'Why Your Business Needs a Custom Software Solution',
      excerpt: 'Discover how tailored software can give your business a competitive edge.',
      author: 'Michael Chen',
      date: '2025-01-08',
      readTime: '6 min read',
      category: 'Business',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800&h=400',
      featured: false
    },
    {
      id: 4,
      title: 'The Rise of AI in Web Development',
      excerpt: 'How artificial intelligence is transforming the way we build websites.',
      author: 'Emily Rodriguez',
      date: '2025-01-05',
      readTime: '8 min read',
      category: 'Technology',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800&h=400',
      featured: false
    },
    {
      id: 5,
      title: 'Optimizing Performance in React Applications',
      excerpt: 'Essential techniques for building fast and efficient React apps.',
      author: 'DevCraft Team',
      date: '2025-01-03',
      readTime: '6 min read',
      category: 'Web Development',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800&h=400',
      featured: false
    },
    {
      id: 6,
      title: 'Cross-Platform Development: Pros and Cons',
      excerpt: 'A comprehensive guide to choosing between native and cross-platform development.',
      author: 'Alex Thompson',
      date: '2025-01-01',
      readTime: '9 min read',
      category: 'Mobile Apps',
      image: 'https://images.pexels.com/photos/1108102/pexels-photo-1108102.jpeg?auto=compress&cs=tinysrgb&w=800&h=400',
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl top-0 right-0"></div>
          <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl bottom-0 left-0"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Our Blog</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-3 mb-6">
              Insights & <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Knowledge</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Stay updated with the latest trends, tips, and insights in web development, mobile apps, and technology.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="pb-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
              <div className="grid lg:grid-cols-2">
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium">
                      Featured Article
                    </span>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                    {featuredPost.title}
                  </h2>
                  <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-6 mb-8 text-sm text-slate-400">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {new Date(featuredPost.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <Link
                    to={`/blog/${featuredPost.id}`}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 font-medium w-fit"
                  >
                    Read Full Article
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="relative">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Search and Filter */}
      <section className="pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    selectedCategory === category.name
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.filter(post => !post.featured).map((post) => (
              <article
                key={post.id}
                className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group cursor-pointer"
              >
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
                  <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>

                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center gap-2 text-cyan-400 font-medium hover:gap-3 transition-all group-hover:text-cyan-300"
                  >
                    Read More
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-slate-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">No articles found</h3>
              <p className="text-slate-400">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-slate-400 mb-8">
            Subscribe to our newsletter for the latest insights and updates in web development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
            />
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
