import ResumeDownloadButton from '../../components/ResumeDownloadButton';

export default function Resume() {
  return (
    <section className="flex flex-col items-center">
      <h2 className="text-3xl font-bold text-blue-200 mb-4">My Resume</h2>
      <ResumeDownloadButton />
      <p className="mt-4 text-blue-100 italic">
        Download, print, and frame it if you want. I won’t judge.
      </p>
    </section>
  );
}
