import ProjectCard from '../../components/ProjectCard';

const projects = [
  {
    slug: 'funny-todo',
    title: 'Funny Todo App',
    description: 'A todo app that roasts you if you procrastinate.',
    tech: ['Next.js', 'Tailwind', 'Jest'],
  },
  {
    slug: 'portfolio',
    title: 'This Portfolio',
    description: 'The very site you’re looking at, built with love and caffeine.',
    tech: ['Next.js', 'Tailwind', 'EmailJS'],
  },
];

export default function Projects() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-blue-200 mb-4">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((proj) => (
          <ProjectCard key={proj.slug} {...proj} />
        ))}
      </div>
      <p className="mt-6 text-blue-100 italic">
        Click a project for more info. Warning: May contain puns.
      </p>
    </section>
  );
}
