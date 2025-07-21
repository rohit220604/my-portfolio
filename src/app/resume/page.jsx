import ResumeDownloadButton from '../../components/ResumeDownloadButton';

export default function Resume() {
  return (
    <section className="flex flex-col items-center px-4 md:px-8">
      <h2 className="text-3xl font-bold text-blue-200 mb-8 mt-8">
        My Resume
      </h2>

      {/* Download button with extra spacing */}
      <div className="mb-6">
        <ResumeDownloadButton />
      </div>

      {/* Resume image with clear border and spacing */}
      <div className="w-full flex justify-center mb-10">
        <img
          src="/resume.jpg"
          alt="Resume preview"
          className="rounded shadow-lg border border-blue-700 max-w-full"
          style={{ maxWidth: "800px" }}
        />
      </div>

      <p className="mt-2 text-blue-100 italic text-center">
        Download, print, and frame it if you want. I won’t judge.
      </p>
    </section>
  );
}
