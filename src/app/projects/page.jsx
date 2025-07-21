  import ProjectCard from '../../components/ProjectCard';

  const projects = [
    {
      slug: 'cineapp',
      title: 'CineApp 🎬',
      description: 'A full-stack social movie tracking web app with reviews, recommendations, and Google login.',
      tech: ['React, Node.js, GraphQL, MongoDB'],
    },
    {
      slug: 'linkme',
      title: 'LinkMe 🌐',
      description: 'A full-stack link-in-bio app with profiles, Google login, and JWT/OTP authentication.',
      tech: ['React, Express, MongoDB'],
    },
    {
      slug: 'drowsy-driver-detection',
      title: 'Drowsy Driver Detection System 🚗💤',
      description: 'A real-time computer vision + Arduino system for detecting driver drowsiness, with instant hardware alerts and visual feedback.',
      tech: ['Python (OpenCV, Dlib), Arduino, Computer Vision, Real-Time Hardware Control'],
    },
    {
      slug: 'secureusb',
      title: 'SecureUsb 🔐',
      description: 'A cross-platform utility for secure USB drive management, with drive detection, encryption, and USB access control using Python.',
      tech: ['Python (PyQt, LUKS, cryptography), USB Device Management'],
    }
    
  ];

  export default function Projects() {
    return (
      <section>
        <h2 className="text-3xl font-bold text-blue-200 mb-4">Projects</h2>
        <div className="grid gap-6 grid-cols-1">
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
  