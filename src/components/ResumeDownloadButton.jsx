export default function ResumeDownloadButton() {
    return (
      <a
        href="/resume.pdf"
        download
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded shadow transition-colors"
      >
        Download Resume 📄
      </a>
    );
  }
  