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
          I’m a full-stack developer based in Canada with 2 + years at Ford Motor
          Company, building scalable enterprise apps using&nbsp;Java, Spring Boot,
          Angular, and Kafka. Skilled in REST-API design, CI/CD (Jenkins&nbsp;&amp; Tekton),
          and cloud deployments on&nbsp;GCP.
        </p>

        <p className="text-lg md:text-xl leading-relaxed mt-6">
          Recently completed my Master of Applied Computer Science at Concordia
          University, Montréal. Passionate about clean code, cloud-native
          architecture, and solving real-world problems with technology.
        </p>
      </motion.div>
    </section>
  );
}
