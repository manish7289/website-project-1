import { useEffect, useState } from 'react';

const codeSnippets = [
  'const', 'function', 'import', 'export', 'class', 'interface',
  'async', 'await', 'try', 'catch', 'if', 'else', 'for', 'while',
  'return', 'let', 'const', 'var', '=>', 'React', 'useState',
  'useEffect', 'Component', 'props', 'state', 'render', 'npm',
  'yarn', 'git', 'commit', 'push', 'pull', 'merge', 'branch',
  '<div>', '</div>', '<p>', '</p>', '<span>', '</span>', 'className',
  'onClick', 'useRef', 'useContext', 'Provider', 'Consumer',
  'TypeScript', 'JavaScript', 'Python', 'Node.js', 'Express',
  'MongoDB', 'PostgreSQL', 'AWS', 'Docker', 'Kubernetes',
  '{ }', '( )', '[ ]', '&&', '||', '===', '!==', '++', '--',
  'map', 'filter', 'reduce', 'slice', 'splice', 'push', 'pop'
];

export default function CodeParticles() {
  const [particles, setParticles] = useState<Array<{
    id: number;
    text: string;
    x: number;
    y: number;
    delay: number;
    duration: number;
    size: number;
  }>>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 25; i++) {
        newParticles.push({
          id: i,
          text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
          x: Math.random() * 100,
          y: Math.random() * 100,
          delay: Math.random() * 10,
          duration: 8 + Math.random() * 12,
          size: 10 + Math.random() * 8
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="code-particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
            fontSize: `${particle.size}px`
          }}
        >
          {particle.text}
        </div>
      ))}
    </div>
  );
}
