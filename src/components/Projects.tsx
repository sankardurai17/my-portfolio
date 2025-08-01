import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';
import Masonry from 'react-masonry-css';

const breakpointColumns = {
  default: 3,
  1024: 2,
  640: 1,
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-surface dark:bg-surfaceDark">
      <h2 className="text-3xl font-bold text-center mb-14 text-gray-900 dark:text-gray-100">
        Projects
      </h2>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.1 },
          },
        }}
        className="max-w-6xl mx-auto px-4"
      >
        <Masonry
          breakpointCols={breakpointColumns}
          className="flex gap-6"
          columnClassName="space-y-6"
        >
          {projects.map((p) => (
            <motion.div
              key={p.title}
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            >
              <ProjectCard {...p} />
            </motion.div>
          ))}
        </Masonry>
      </motion.div>
    </section>
  );
}