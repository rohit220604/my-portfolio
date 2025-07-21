export default function About() {
    return (
      <section className="flex flex-col md:flex-row items-center gap-8">
        <img
          src="/image.jpg"
          alt="Rohit Jaliminchi"
          className="w-40 h-40 rounded-full border-4 border-blue-700 shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-bold text-blue-200 mb-2">About Me</h2>
          <p>
            I'm a passionate developer who loves solving real-world problems and making people laugh (sometimes unintentionally). Skilled in React, Next.js, and telling dad jokes.
          </p>
          <ul className="list-disc pl-5 mt-2 text-blue-100">
            <li>Loves dark mode (obviously)</li>
            <li>Has a meme for every occasion</li>
            <li>Can debug code and your mood</li>
          </ul>
        </div>
      </section>
    );
  }
  