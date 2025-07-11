import ContactForm from '../../components/ContactForm';
import SocialLinks from '../../components/SocialLinks';

export default function Contact() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-blue-200 mb-2">Contact Me</h2>
      <p className="mb-4 text-blue-100">
        Want to hire me, collaborate, or just send a meme? Fill out the form or connect on socials!
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        <ContactForm />
        <div>
          <h3 className="text-xl text-blue-100 mb-2">Find me on:</h3>
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}
