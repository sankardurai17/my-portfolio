import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-screen h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      {/* gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-300 via-indigo-300 to-purple-300 dark:from-blue-900 dark:via-indigo-900 dark:to-purple-900" />

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        /* ❯ fluid font size with clamp() */
        className="font-extrabold mb-4 text-[clamp(4.5rem,5vw+1rem,4.5rem)]"
      >
        Hi, I’m <span className="text-primary">Durai</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="max-w-xl text-lg md:text-xl text-gray-700 dark:text-gray-200"
      >
        Full-Stack Developer · Java · Spring Boot · React · MongoDB · GCP
      </motion.p>

      <motion.a
        href={`${import.meta.env.BASE_URL}assets/Durai_Resume.pdf`}
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-10 inline-block rounded-full bg-primary text-white px-8 py-3 hover:opacity-90 transition"
      >
        Download Resume
      </motion.a>
    </section>
  );
}
