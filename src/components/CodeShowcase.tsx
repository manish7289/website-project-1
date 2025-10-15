import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const codeExamples = {
  react: {
    title: 'React Component',
    language: 'jsx',
    code: `import React, { useState, useEffect } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`Count: \${count}\`;
  }, [count]);

  return (
    <div className="p-6 bg-slate-800 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">
        Counter: {count}
      </h2>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
      >
        Increment
      </button>
    </div>
  );
}`
  },
  node: {
    title: 'Node.js API',
    language: 'javascript',
    code: `const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json({
      success: true,
      data: users,
      count: users.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});`
  },
  python: {
    title: 'Python Backend',
    language: 'python',
    code: `from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    email = db.Column(db.String(120), unique=True)

@app.route('/api/users', methods=['GET'])
def get_users():
    users = User.query.all()
    return jsonify([{
        'id': user.id,
        'name': user.name,
        'email': user.email
    } for user in users])

if __name__ == '__main__':
    db.create_all()
    app.run(debug=True)`
  }
};

export default function CodeShowcase() {
  const [activeTab, setActiveTab] = useState('react');
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(codeExamples[activeTab].code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <section className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Code Examples</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-3 mb-4">
            See Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Code in Action</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Explore real code examples from our development projects
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-900 rounded-2xl border border-slate-700 overflow-hidden">
            {/* Tab Navigation */}
            <div className="flex border-b border-slate-700">
              {Object.entries(codeExamples).map(([key, example]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-6 py-4 font-medium transition-colors ${
                    activeTab === key
                      ? 'text-cyan-400 border-b-2 border-cyan-400 bg-slate-800/50'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {example.title}
                </button>
              ))}
            </div>

            {/* Code Display */}
            <div className="relative">
              <div className="flex items-center justify-between px-4 py-2 bg-slate-800 border-b border-slate-700">
                <span className="text-sm text-slate-400">
                  {codeExamples[activeTab].language}
                </span>
                <button
                  onClick={copyToClipboard}
                  className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>

              <pre className="p-6 overflow-x-auto text-sm">
                <code className="text-slate-300">
                  {codeExamples[activeTab].code.split('\n').map((line, index) => (
                    <div key={index} className="flex">
                      <span className="text-slate-500 w-8 select-none mr-4">
                        {index + 1}
                      </span>
                      <span className="flex-1">
                        {line.split(' ').map((word, wordIndex) => {
                          let className = 'text-slate-300';

                          // Basic syntax highlighting
                          if (word.includes('import') || word.includes('from') || word.includes('const') || word.includes('let') || word.includes('var') || word.includes('function') || word.includes('class') || word.includes('def') || word.includes('app')) {
                            className = 'text-purple-400';
                          } else if (word.includes('React') || word.includes('useState') || word.includes('useEffect') || word.includes('express') || word.includes('Flask') || word.includes('SQLAlchemy')) {
                            className = 'text-cyan-400';
                          } else if (word.includes('true') || word.includes('false') || word.includes('null') || word.includes('undefined')) {
                            className = 'text-orange-400';
                          } else if (word === 'return' || word === 'try' || word === 'catch' || word === 'if' || word === 'else' || word === 'for' || word === 'while') {
                            className = 'text-yellow-400';
                          } else if (word.startsWith('"') || word.startsWith("'") || word.startsWith('`')) {
                            className = 'text-green-400';
                          }

                          return (
                            <span key={wordIndex} className={className}>
                              {word}{' '}
                            </span>
                          );
                        })}
                      </span>
                    </div>
                  ))}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
