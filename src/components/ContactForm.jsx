// EmailJS integration requires setup with your EmailJS account and public key
'use client';
import { useRef, useState } from 'react';

export default function ContactForm() {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    // Replace with actual EmailJS logic
    setSent(true);
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="bg-blue-800 rounded-lg p-6 flex flex-col gap-4 shadow">
      <input className="bg-blue-900 rounded px-3 py-2 text-white" type="text" name="user_name" placeholder="Your Name" required />
      <input className="bg-blue-900 rounded px-3 py-2 text-white" type="email" name="user_email" placeholder="Your Email" required />
      <textarea className="bg-blue-900 rounded px-3 py-2 text-white" name="message" placeholder="Your Message" required />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 rounded px-4 py-2 font-bold transition-colors"
      >
        Send 🚀
      </button>
      {sent && <span className="text-green-400 mt-2">Message sent! I’ll reply faster than my code compiles.</span>}
    </form>
  );
}
