'use client'
export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 py-12 gap-12 bg-blue-950 min-h-screen rounded-2xl">
      {/* Hero Section */}
      <section className="w-full max-w-5xl flex flex-col items-center gap-4 animate-fadeIn">
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-300 drop-shadow-lg">
          Hi, I'm Rohit Jaliminchi <span className="inline-block animate-wave">👋</span>
        </h1>
        <p className="text-2xl text-blue-100 mt-2 font-medium">
          Full Stack Developer | Building cool things with code
        </p>
        <p className="mt-2 text-blue-200 text-lg">
          Welcome to my portfolio! I turn coffee into code and ideas into reality.
        </p>
      </section>

      {/* Profile Section (Curved Edges) */}
      <section className="w-full max-w-5xl flex flex-col md:flex-row items-center bg-blue-900/60 rounded-2xl shadow-lg p-8 gap-8 animate-fadeIn delay-200">
        <img
          src="/image.jpg"
          alt="Rohit Jaliminchi"
          className="w-36 h-36 rounded-full border-4 border-blue-700 shadow-xl object-cover"
        />
        <div className="flex-1 flex flex-col items-center md:items-start gap-4">
          <p className="text-blue-100 text-lg leading-relaxed">
            I’m a passionate developer who loves solving real-world problems, collaborating with teams, and occasionally telling a good tech joke.
          </p>
          <a
            href="/resume"
            className="mt-2 bg-blue-600 hover:bg-blue-700 transition-colors text-white font-bold py-2 px-8 rounded-lg shadow-md"
          >
            View My Resume
          </a>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="w-full max-w-6xl flex flex-col items-center animate-fadeIn delay-400">
        <h2 className="text-3xl font-bold text-blue-200 mb-6 tracking-wide">
          Featured Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2 w-full">
          {/* Example ProjectCard usage */}
          {/* <ProjectCard ... /> */}
        </div>
        <a
          href="/projects"
          className="mt-6 text-blue-400 underline hover:text-blue-200 transition-colors text-lg font-medium"
        >
          See All Projects
        </a>
      </section>

      {/* Footer/Joke Section */}
      <section className="w-full max-w-3xl flex flex-col items-center mt-8 animate-fadeIn delay-600">
        <p className="text-blue-300 italic text-lg text-center">
          “Why did the developer go broke? Because he used up all his cache!” 😄
        </p>
      </section>

      <style jsx>{`
        @keyframes wave {
          0% { transform: rotate(0deg); }
          15% { transform: rotate(14deg); }
          30% { transform: rotate(-8deg); }
          40% { transform: rotate(14deg); }
          50% { transform: rotate(-4deg); }
          60% { transform: rotate(10deg); }
          70% { transform: rotate(0deg); }
          100% { transform: rotate(0deg); }
        }
        .animate-wave {
          animation: wave 2s ease-in-out infinite;
          transform-origin: 70% 70%;
          display: inline-block;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease forwards;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-400 {
          animation-delay: 0.4s;
        }
        .delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
    </main>
  );
}
