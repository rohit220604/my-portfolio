import Navbar from '../components/Navbar';
import './globals.css';
import { ThemeProvider } from '../components/ThemeContext';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Navbar />
          <div className="max-w-4xl mx-auto px-4 py-8">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
