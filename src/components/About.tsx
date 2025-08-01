import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 bg-surface dark:bg-surfaceDark">
      <motion.div
        whileHover={{ y: -8, scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className="
          max-w-5xl mx-auto rounded-2xl
          bg-surfaceAlt dark:bg-surfaceAltDark
          shadow-lg p-10 sm:p-14
          text-text dark:text-textDark
        "
      >
        <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>

        <p className="text-lg md:text-xl leading-relaxed">
          Hey, I’m Durai — a full-stack developer who loves turning complex ideas into elegant, scalable solutions.
          I bring 2+ years of professional experience from Ford Motor Company, where I worked predominantly on Java + Spring Boot backends,
          Angular frontends, SQL & NoSQL Data bases, CI/CD pipelines, and cloud-native deployments on GCP.
        </p>

        <p className="text-lg md:text-xl leading-relaxed mt-6">
          I recently completed my Master’s in Applied Computer Science at Concordia University, Montréal,
          and I’m deeply passionate about writing clean code, building resilient systems, and shipping products that solve real problems.
        </p>

        <p className="text-lg md:text-xl leading-relaxed mt-6">
          Whether it’s designing microservices, mentoring junior devs, or learning a new tech stack — I’m driven by curiosity, collaboration, and impact.
        </p>
      </motion.div>
    </section>
  );
}
