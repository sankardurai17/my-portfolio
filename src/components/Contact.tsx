import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaPhone
} from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-surface dark:bg-surfaceDark">
      <h2 className="text-3xl font-bold text-center mb-10 text-text dark:text-textDark">
        Get in touch
      </h2>

      {/* Social icons */}
      <div className="flex justify-center gap-8 text-3xl text-gray-600 dark:text-gray-300 mb-12">
        <a
          href="mailto:durai.ap2000@gmail.com"
          aria-label="Email"
          className="hover:text-primary transition"
        >
          <FaEnvelope />
        </a>

        <a
          href="tel:+14387228825"
          aria-label="Phone"
          className="hover:text-primary transition"
        >
          <FaPhone />
        </a>

        <a
          href="https://www.linkedin.com/in/duraipaandiyaan-a-p/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="hover:text-primary transition"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/sankardurai17"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="hover:text-primary transition"
        >
          <FaGithub />
        </a>
      </div>

      {/* Contact form */}
      <form
        action="https://formspree.io/f/movwzgor"
        method="POST"
        className="max-w-xl mx-auto grid gap-6"
      >
        {/* Name */}
        <div className="grid gap-2">
          <label htmlFor="name" className="text-sm text-white font-medium ">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="px-4 py-3 text-white rounded-lg bg-surfaceAlt dark:bg-surfaceAltDark border border-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary focus:ring-1 outline-none transition"
          />
        </div>

        {/* Email */}
        <div className="grid gap-2">
          <label htmlFor="email" className="text-sm text-white font-medium text-white">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="px-4 py-3 text-white rounded-lg bg-surfaceAlt dark:bg-surfaceAltDark border border-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary focus:ring-1 outline-none transition"
          />
        </div>

        {/* Message */}
        <div className="grid gap-2">
          <label htmlFor="message" className="text-sm text-white  font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="px-4 py-3 text-white rounded-lg bg-surfaceAlt dark:bg-surfaceAltDark border border-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary focus:ring-1 outline-none transition"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="justify-self-start rounded-full bg-primary text-white px-8 py-3 hover:opacity-90 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
