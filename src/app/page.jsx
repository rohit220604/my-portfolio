export default function Home() {
  return (
    <main className="flex flex-col items-center text-center gap-8">
      <section>
        <h1 className="text-5xl font-bold text-blue-300 drop-shadow-lg">Hi, I'm Rohit Jaliminchi 👋</h1>
        <p className="text-xl text-blue-100 mt-2">Full Stack Developer | Building cool things with code</p>
        <p className="mt-4 text-blue-200">
          Welcome to my portfolio! I turn coffee into code and ideas into reality.
        </p>
      </section>

      <section className="flex flex-col md:flex-row gap-6 items-center">
        <img src="/profile.jpg" alt="Your Name" className="w-32 h-32 rounded-full border-4 border-blue-700 shadow-lg" />
        <div>
          <p className="text-blue-100">
            I’m a passionate developer who loves solving real-world problems, collaborating with teams, and occasionally telling a good tech joke.
          </p>
          <a
            href="/resume"
            className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded shadow transition-colors"
          >
            View My Resume
          </a>
        </div>
      </section>

      <section className="w-full">
        <h2 className="text-2xl font-bold text-blue-200 mb-4">Featured Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {/* Example ProjectCard usage */}
          {/* <ProjectCard ... /> */}
        </div>
        <a
          href="/projects"
          className="inline-block mt-4 text-blue-400 underline hover:text-blue-200"
        >
          See All Projects
        </a>
      </section>

      <section>
        <p className="mt-8 text-blue-300 italic">
          “Why did the developer go broke? Because he used up all his cache!” 😄
        </p>
      </section>
    </main>
  );
}
