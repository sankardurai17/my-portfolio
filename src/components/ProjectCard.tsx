import type { Project } from '../data/projects';
import { motion } from 'framer-motion';

export default function ProjectCard(props: Project) {
  const { title, description, tech, link, image } = props;

  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.02 }}
      className="rounded-xl bg-surface dark:bg-surfaceDark shadow-md hover:shadow-lg transition overflow-hidden"
    >
      <img src={`${import.meta.env.BASE_URL}${image}`} alt={title} className="h-70 w-full object-cover" />

      <div className="p-5 flex flex-col gap-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm">{description}</p>
        <p className="text-xs text-gray-500">{tech.join(' • ')}</p>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="mt-auto self-start text-primary hover:underline"
        >
          Source code →
        </a>
      </div>
    </motion.article>
  );
}
