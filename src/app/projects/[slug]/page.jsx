export default function ProjectDetail({ params }) {
    const project = {
      title: 'Funny Todo App',
      description: 'A todo app that roasts you if you procrastinate.',
      tech: ['Next.js', 'Tailwind', 'Jest'],
      link: 'https://github.com/yourusername/funny-todo',
      demo: 'https://funny-todo.vercel.app',
    };
  
    return (
      <article>
        <h2 className="text-3xl font-bold text-blue-200">{project.title}</h2>
        <p className="mt-2">{project.description}</p>
        <div className="flex gap-2 mt-4">
          {project.tech.map((t) => (
            <span key={t} className="bg-blue-700 px-2 py-1 rounded text-xs">{t}</span>
          ))}
        </div>
        <div className="mt-4 flex gap-4">
          <a href={project.demo} className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">Live Demo</a>
          <a href={project.link} className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
        <blockquote className="mt-6 text-blue-300 italic">
          “This app made me laugh and actually finish my tasks!” – Definitely not my mom
        </blockquote>
      </article>
    );
  }
  