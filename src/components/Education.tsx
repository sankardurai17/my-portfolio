import { motion } from 'framer-motion';

interface CardProps {
  degree: string;
  school: string;
  location: string;
  dates: string;
  url: string;
  courses: string[];
}

function EduCard({ degree, school, location, dates, url, courses }: CardProps) {
  /* variants let the overlay react to the parent’s hover state */
  const overlay = {
    hidden: { opacity: 0, scale: 0.9 },
    show:   { opacity: 1, scale: 1 },
  };

  return (
    <a href={url} target="_blank" rel="noreferrer">
      <motion.div
        initial="hidden"
        whileHover="show"
        variants={{ hidden: {}, show: {} }} 
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="relative rounded-xl bg-surfaceAlt dark:bg-surfaceAltDark
                   shadow-md cursor-pointer overflow-hidden"
      >
        {/* front */}
        <div className="p-8 flex flex-col gap-2 min-h-[180px]">
          <h3 className="text-xl font-semibold text-text dark:text-textDark">
            {degree}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{school}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">{location}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">{dates}</p>
        </div>

        {/* overlay */}
        <motion.div
          variants={overlay}
          className="absolute inset-0 flex flex-col justify-center items-center text-center
                     rounded-xl bg-primary/90 text-white px-8 py-10"
        >
          <h4 className="text-lg font-bold mb-4">Key Courses</h4>
          <ul className="text-sm space-y-1">
            {courses.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </a>
  );
}

export default function Education() {
  return (
    <section id="education" className="py-20 bg-surface dark:bg-surfaceDark">
      <h2 className="text-3xl font-bold text-center mb-12 text-text dark:text-textDark">
        Education
      </h2>

      <div className="max-w-6xl mx-auto grid gap-8
                      [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
        <EduCard
          degree="Master of Applied Computer Science"
          school="Concordia University"
          location="Montréal, QC, Canada"
          dates="2023 – 2025"
          url="https://www.concordia.ca/"
          courses={[
            'Algorithm Design',
            'Distributed Systems',
            'Advanced Programming Practices',
            'Applied AI',
          ]}
        />
        <EduCard
          degree="B.E. Computer Science Engineering"
          school="Sri Krishna College of Technology (Anna University)"
          location="Coimbatore, TN, India"
          dates="2017 – 2021"
          url="https://skct.edu.in/"
          courses={[
            'Object Oriented Programming',
            'Data Structures',
            'Database Management System',
            'Computer Networks',
          ]}
        />
      </div>
    </section>
  );
}
