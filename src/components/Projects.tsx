import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-surface dark:bg-surfaceDark">
      <h2 className="text-3xl font-bold text-center mb-14 text-gray-900 dark:text-gray-100">
        Projects
      </h2>

      {/* auto-fit grid → 280 px min, fills as many cols as space allows */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.15 },
          },
        }}
        className="grid gap-10 max-w-6xl mx-auto
                   [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]"
      >
        {projects.map((p) => (
          <motion.div
            key={p.title}
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          >
            <ProjectCard {...p} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
