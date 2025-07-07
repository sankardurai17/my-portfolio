import { motion } from 'framer-motion';

interface CardProps {
  degree: string;
  school: string;
  dates: string;
  url: string;
  courses: string[];
}

function EduCard({ degree, school, dates, url, courses }: CardProps) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noreferrer"
      whileHover={{ scale: 1.04 }}
      className="relative flex flex-col h-full rounded-xl bg-surfaceAlt dark:bg-surfaceAltDark
                 shadow-md hover:shadow-xl group overflow-hidden cursor-pointer transition"
    >
      {/* Front */}
      <div className="p-6 flex flex-col gap-1 grow">
        <h3 className="text-xl font-semibold text-text dark:text-textDark">
          {degree}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">{school}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">{dates}</p>
      </div>

      {/* Slide-up overlay */}
      <div
  className="absolute inset-0 h-full w-full rounded-xl bg-primary/80 backdrop-blur-md
             flex flex-col justify-center items-center text-center
             px-6 py-8 text-white translate-y-full group-hover:translate-y-0
             transition-transform duration-300 ease-in-out"
>
        <h4 className="text-lg font-bold mb-3">Key Courses</h4>
        <ul className="text-sm space-y-1">
          {courses.map(c => <li key={c}>{c}</li>)}
        </ul>
        <p className="mt-6 text-xs opacity-80">Click to visit school site</p>
      </div>
    </motion.a>
  );
}

export default function Education() {
  return (
    <section id="education" className="py-20 bg-surface dark:bg-surfaceDark">
      <h2 className="text-3xl font-bold text-center mb-12 text-text dark:text-textDark">
        Education
      </h2>

      {/* Auto-fit grid — cards grow/shrink naturally */}
      <div
        className="
          max-w-6xl mx-auto grid gap-8
          [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]
        "
      >
        <EduCard
          degree="Master of Applied Computer Science"
          school="Concordia University · Montréal"
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
          dates="2017 – 2021"
          url="https://skct.edu.in/"
          courses={['OOP', 'Data Structures', 'DBMS', 'Computer Networks']}
        />
      </div>
    </section>
  );
}
