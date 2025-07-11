import Link from 'next/link';

export default function ProjectCard({ slug, title, description, tech }) {
  return (
    <div className="bg-blue-800 rounded-lg p-4 shadow hover:scale-105 transition-transform">
      <h3 className="text-xl font-bold text-blue-100">{title}</h3>
      <p className="text-blue-200">{description}</p>
      <div className="flex gap-2 mt-2">
        {tech.map((t) => (
          <span key={t} className="bg-blue-700 px-2 py-1 rounded text-xs">{t}</span>
        ))}
      </div>
      <Link href={`/projects/${slug}`} className="block mt-3 text-blue-400 underline">
        See Details
      </Link>
    </div>
  );
}
