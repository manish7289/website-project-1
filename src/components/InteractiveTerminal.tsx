import { useState, useEffect, useRef } from 'react';
import { Terminal, Play } from 'lucide-react';

const commands = [
  {
    command: 'npm install',
    output: 'Installing dependencies...\n✓ react@18.2.0\n✓ react-dom@18.2.0\n✓ typescript@4.9.5\n✓ tailwindcss@3.3.0\n✓ lucide-react@0.263.1\n\nDependencies installed successfully!'
  },
  {
    command: 'npm run build',
    output: 'Building for production...\n\n✓ 123 modules transformed.\n✓ Generated an empty chunk: "vendor-[hash].js"\n✓ Generated an empty chunk: "main-[hash].js"\n✓ Built in 1.2s\n\nBuild completed successfully!'
  },
  {
    command: 'git status',
    output: 'On branch main\nYour branch is up to date with \'origin/main\'.\n\nChanges to be committed:\n  (use "git restore --staged <file>..." to unstage)\n        modified:   src/components/Home.tsx\n        new file:   src/components/CodeShowcase.tsx\n\nUntracked files:\n  (use "git add <file>..." to include in what will be committed)\n        .env.local'
  },
  {
    command: 'docker build -t myapp .',
    output: 'Sending build context to Docker daemon  2.048kB\n\nStep 1/7 : FROM node:18-alpine\nStep 2/7 : WORKDIR /app\nStep 3/7 : COPY package*.json ./\nStep 4/7 : RUN npm ci --only=production\nStep 5/7 : COPY . .\nStep 6/7 : RUN npm run build\nStep 7/7 : EXPOSE 3000\n\nSuccessfully built 123456789abc\nSuccessfully tagged myapp:latest'
  }
];

export default function InteractiveTerminal() {
  const [currentCommand, setCurrentCommand] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showOutput, setShowOutput] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);

  const runCommand = () => {
    if (isTyping) return;

    setIsTyping(true);
    setShowOutput(false);
    setDisplayedText('');

    const command = commands[currentCommand].command;
    let index = 0;

    const typeCommand = () => {
      if (index < command.length) {
        setDisplayedText(prev => prev + command[index]);
        index++;
        setTimeout(typeCommand, 100);
      } else {
        setTimeout(() => {
          setShowOutput(true);
          setIsTyping(false);
        }, 500);
      }
    };

    typeCommand();
  };

  const nextCommand = () => {
    setCurrentCommand((prev) => (prev + 1) % commands.length);
    setDisplayedText('');
    setShowOutput(false);
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [displayedText, showOutput]);

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Interactive Demo</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-3 mb-4">
            See Development <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">in Action</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Watch as we execute common development commands in real-time
          </p>
        </div>

        <div className="bg-slate-900 rounded-2xl border border-slate-700 overflow-hidden shadow-2xl">
          {/* Terminal Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-slate-800 border-b border-slate-700">
            <div className="flex items-center gap-2">
              <Terminal className="w-5 h-5 text-cyan-400" />
              <span className="text-slate-300 font-medium">Terminal</span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={runCommand}
                disabled={isTyping}
                className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 disabled:bg-slate-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                <Play className="w-4 h-4" />
                Run Command
              </button>
              <button
                onClick={nextCommand}
                className="bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Next Command
              </button>
            </div>
          </div>

          {/* Terminal Body */}
          <div
            ref={terminalRef}
            className="h-96 p-4 font-mono text-sm overflow-y-auto bg-slate-950"
          >
            <div className="text-green-400 mb-2">
              user@devcraft:~/project$
            </div>

            <div className="flex items-center text-cyan-400">
              <span>{displayedText}</span>
              {isTyping && <span className="terminal-cursor">█</span>}
            </div>

            {showOutput && (
              <div className="mt-4 text-slate-300 whitespace-pre-line">
                {commands[currentCommand].output}
              </div>
            )}

            {!isTyping && !showOutput && (
              <div className="text-slate-500 mt-2">
                Click "Run Command" to see the magic happen!
              </div>
            )}
          </div>
        </div>

        {/* Command Info */}
        <div className="mt-6 text-center">
          <p className="text-slate-400 text-sm">
            Current command: <span className="text-cyan-400 font-mono">{commands[currentCommand].command}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
