import { useParams, Link } from 'react-router-dom';
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Share2,
  Bookmark,
  Facebook,
  Twitter,
  Linkedin,
  ChevronRight
} from 'lucide-react';

export default function BlogPost() {
  const { id } = useParams();

  // Mock blog post data - in a real app, this would come from an API or CMS
  const blogPosts = [
    {
      id: '1',
      title: 'The Future of React Development: What to Expect in 2025',
      content: `
        <p className="text-lg text-slate-300 mb-6 leading-relaxed">
          As we stand on the brink of 2025, the React ecosystem continues to evolve at a rapid pace. With the recent release of React 19 and the growing adoption of modern development practices, developers can expect several exciting changes that will shape the future of web development.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-8">React 19 and Concurrent Features</h2>
        <p className="text-slate-300 mb-4 leading-relaxed">
          React 19 brings significant improvements to concurrent rendering capabilities. The new <code className="bg-slate-800 px-2 py-1 rounded text-cyan-400">use()</code> hook allows components to read resources like promises directly, simplifying data fetching patterns. This change eliminates the need for complex state management solutions in many cases.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-8">Server Components Evolution</h2>
        <p className="text-slate-300 mb-4 leading-relaxed">
          Server Components are becoming more powerful with improved bundling strategies and better integration with existing React patterns. The ability to render components on the server while maintaining client-side interactivity is revolutionizing how we think about web applications.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-8">TypeScript Integration</h2>
        <p className="text-slate-300 mb-4 leading-relaxed">
          TypeScript continues to be the gold standard for React development. With improved type inference and better support for advanced patterns, TypeScript makes React applications more maintainable and less prone to runtime errors.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-8">Performance Optimizations</h2>
        <p className="text-slate-300 mb-4 leading-relaxed">
          React's compiler improvements and better tree-shaking capabilities mean faster bundle sizes and improved runtime performance. The new React Compiler automatically optimizes components without requiring manual intervention.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-8">Looking Ahead</h2>
        <p className="text-slate-300 mb-6 leading-relaxed">
          The future of React development looks bright. With continued focus on developer experience, performance, and modern web standards, React remains the framework of choice for building interactive web applications. As we move into 2025, staying updated with these trends will be crucial for developers looking to build cutting-edge applications.
        </p>
      `,
      author: 'DevCraft Team',
      date: '2025-01-15',
      readTime: '5 min read',
      category: 'Web Development',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800&h=400',
      tags: ['React', 'JavaScript', 'Web Development', 'Frontend']
    },
    {
      id: '2',
      title: 'Building Scalable Mobile Apps with React Native',
      content: `
        <p className="text-lg text-slate-300 mb-6 leading-relaxed">
          React Native has revolutionized mobile app development by allowing developers to build native applications using familiar web technologies. However, building truly scalable React Native apps requires careful planning and adherence to best practices.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-8">Architecture Patterns</h2>
        <p className="text-slate-300 mb-4 leading-relaxed">
          Choosing the right architecture is crucial for scalability. Popular patterns include:</p>
        <ul className="list-disc list-inside text-slate-300 mb-4 space-y-2">
          <li><strong>Feature-based structure:</strong> Organize code by features rather than type</li>
          <li><strong>Atomic design:</strong> Break down components into reusable atoms, molecules, and organisms</li>
          <li><strong>State management:</strong> Use Redux Toolkit or Zustand for complex state scenarios</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4 mt-8">Performance Optimization</h2>
        <p className="text-slate-300 mb-4 leading-relaxed">
          Performance is key to user experience. Implement these strategies:</p>
        <ul className="list-disc list-inside text-slate-300 mb-4 space-y-2">
          <li>Memoization with React.memo and useMemo</li>
          <li>Optimized list rendering with FlashList</li>
          <li>Image optimization and lazy loading</li>
          <li>Bundle splitting and code splitting</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4 mt-8">Testing Strategies</h2>
        <p className="text-slate-300 mb-4 leading-relaxed">
          Comprehensive testing ensures reliability:</p>
        <ul className="list-disc list-inside text-slate-300 mb-4 space-y-2">
          <li>Unit tests with Jest</li>
          <li>Integration tests with React Native Testing Library</li>
          <li>E2E tests with Detox</li>
          <li>Visual regression testing</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4 mt-8">Deployment and CI/CD</h2>
        <p className="text-slate-300 mb-6 leading-relaxed">
          Automate your deployment process with tools like Fastlane, CodePush for over-the-air updates, and CI/CD pipelines. This ensures consistent releases and quick bug fixes across both iOS and Android platforms.
        </p>
      `,
      author: 'Sarah Johnson',
      date: '2025-01-10',
      readTime: '7 min read',
      category: 'Mobile Apps',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800&h=400',
      tags: ['React Native', 'Mobile', 'iOS', 'Android']
    },
    {
      id: '3',
      title: 'Why Your Business Needs a Custom Software Solution',
      content: `
        <p className="text-lg text-slate-300 mb-6 leading-relaxed">
          In today's competitive business landscape, off-the-shelf software solutions often fall short of meeting unique business requirements. Custom software solutions offer tailored functionality that can give your business a significant competitive advantage.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-8">Competitive Advantage</h2>
        <p className="text-slate-300 mb-4 leading-relaxed">
          Custom software is designed specifically for your business processes, giving you features that competitors using generic software simply don't have. This can lead to improved efficiency, better customer experiences, and ultimately, increased market share.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-8">Scalability and Flexibility</h2>
        <p className="text-slate-300 mb-4 leading-relaxed">
          As your business grows, your software needs to grow with it. Custom solutions can be designed with scalability in mind, allowing you to add features and users as needed without being constrained by the limitations of off-the-shelf products.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-8">Integration Capabilities</h2>
        <p className="text-slate-300 mb-4 leading-relaxed">
          Custom software can seamlessly integrate with your existing systems, eliminating data silos and improving workflow efficiency. This level of integration is often difficult or impossible to achieve with generic software solutions.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-8">Cost-Effectiveness</h2>
        <p className="text-slate-300 mb-6 leading-relaxed">
          While the initial investment may be higher, custom software often proves more cost-effective in the long run. You avoid ongoing licensing fees, unnecessary features, and the costs associated with workarounds for software limitations.
        </p>
      `,
      author: 'Michael Chen',
      date: '2025-01-08',
      readTime: '6 min read',
      category: 'Business',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800&h=400',
      tags: ['Business', 'Custom Software', 'Strategy']
    }
  ];

  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-950 text-white pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-slate-400 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl top-0 right-0"></div>
          <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl bottom-0 left-0"></div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <div className="mb-8">
            <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium mb-4 inline-block">
              {post.category}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {post.author}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString()}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative mb-12">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-96 object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent rounded-2xl"></div>
          </div>

          <div className="prose prose-lg prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-slate-800">
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm hover:bg-slate-700 transition-colors"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Share and Actions */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-slate-400 text-sm">Share this article:</span>
                <div className="flex gap-2">
                  <button className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors">
                    <Facebook className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors">
                    <Twitter className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors">
                <Bookmark className="w-4 h-4" />
                Save
              </button>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-16 pt-8 border-t border-slate-800">
            <h3 className="text-2xl font-bold mb-8">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {blogPosts.filter(p => p.id !== post.id).slice(0, 2).map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.id}`}
                  className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold mb-2 group-hover:text-cyan-400 transition-colors leading-tight">
                      {relatedPost.title}
                    </h4>
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <Clock className="w-3 h-3" />
                      {relatedPost.readTime}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-12 flex justify-between items-center">
            <Link
              to="/blog"
              className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 font-medium"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
