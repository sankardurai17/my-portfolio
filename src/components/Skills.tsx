import { motion } from 'framer-motion';
import type { JSX } from 'react';
import {
  FaCode,
  FaLaptopCode,
  FaCheckCircle,
  FaCogs,
  FaRocket,
  FaTools,
  FaLayerGroup,
} from 'react-icons/fa';

/*──────── Small “What I Do” card ────────*/
interface CardProps {
  icon: JSX.Element;
  title: string;
  blurb: string;
  delay: number;
}
function WorkCard({ icon, title, blurb, delay }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ y: 1, scale: 1.05 }}
      className="flex flex-col items-center text-center p-8 rounded-xl shadow-md
                 bg-surfaceAlt dark:bg-surfaceAltDark text-text dark:text-textDark"
    >
      <div className="text-3xl text-primary mb-3">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-xs text-gray-500 dark:text-gray-400">{blurb}</p>
    </motion.div>
  );
}

/*──────── Tech-stack panel ────────*/
function TechStackPanel() {
  const categories = [
    {
      label: 'Programming',
      items:
        'Java · Python · SQL · JavaScript · TypeScript · C · C++',
    },
    {
      label: 'Back-end',
      items:
        'Spring Boot · Play · Django / DRF · Apache Kafka',
    },
    {
      label: 'Front-end',
      items: 'React · Angular · Bootstrap · PrimeNG',
    },
    {
      label: 'Database',
      items:
        'MySQL · PostgreSQL · MongoDB · Oracle · SQLite · DB2 · Neo4J · H2B',
    },
    {
      label: 'DevOps / CI-CD',
      items:
        'Jenkins · Git · Maven · Gradle · Tekton · Docker · Kubernetes · Heroku',
    },
    {
      label: 'Cloud',
      items: 'Google Cloud Platform (GCP) · AWS',
    },
    {
      label: 'Testing / QA',
      items:
        'JUnit · Mockito · SonarQube · SonarLint · Postman · Jasmine · JaCoCo · ReadyAPI · JMeter',
    },
    {
      label: 'Security & Monitoring',
      items:
        '42Crunch · FOSSA · Cycode · Dynatrace · Wireshark · JIRA · Alteryx',
    },
    {
      label: 'Scripting',
      items: 'Shell scripts · Cron Jobs · Log Monitoring',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="col-span-full lg:col-span-1 lg:row-span-3 rounded-xl p-8 shadow-lg
                 bg-primary/90 text-white flex flex-col"
    >
      <div className="flex items-center gap-3 mb-6">
        <FaLayerGroup className="text-3xl" />
        <h3 className="text-2xl font-semibold">Tech Stack</h3>
      </div>

      <div className="space-y-4 text-sm leading-relaxed overflow-y-auto">
        {categories.map((c) => (
          <div key={c.label}>
            <p className="font-semibold">{c.label}</p>
            <p className="text-xs">{c.items}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

/*──────── Section wrapper ────────*/
export default function WhatIDo() {
  return (
    <section id="whatido" className="py-24 bg-surface dark:bg-surfaceDark">
      <h2 className="text-3xl font-bold text-center mb-12 text-text dark:text-textDark">
        What I Do
      </h2>

      {/* Parent grid: 3 cols on lg (2 for cards, 1 for tech) */}
      <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-3 ">
        {/* Left side: 6 cards, 2-column grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 lg:col-span-2">
          <WorkCard
            icon={<FaCode />}
            title="Backend Development"
            blurb="Scalable REST APIs with Java 17 + Spring Boot; Kafka event streams."
            delay={0}
          />
          <WorkCard
            icon={<FaLaptopCode />}
            title="Frontend Development"
            blurb="Responsive React & Angular UIs with Bootstrap and PrimeNG."
            delay={0.1}
          />
          <WorkCard
            icon={<FaCheckCircle />}
            title="Testing / TDD"
            blurb="JUnit, Mockito, SonarQube — 90 %+ coverage, zero-surprise releases."
            delay={0.2}
          />
          <WorkCard
            icon={<FaCogs />}
            title="CI/CD Pipelines"
            blurb="Jenkins, Tekton & GitHub Actions automate build and release."
            delay={0.3}
          />
          <WorkCard
            icon={<FaRocket />}
            title="Cloud & DevOps"
            blurb="Docker, Kubernetes, GCP & AWS for reliable, cloud-native delivery."
            delay={0.4}
          />
          <WorkCard
            icon={<FaTools />}
            title="End-to-End Ownership"
            blurb="Requirements → monitoring: design, code, secure & iterate."
            delay={0.5}
          />
        </div>

        {/* Right side: tech-stack panel */}
        <TechStackPanel />
      </div>
    </section>
  );
}