import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Software Engineer – Full Stack Java Developer',
    company: 'Ford Motor Company (Ford Business Solutions), Chennai, India',
    duration: 'May 2023 – July 2023',
    points: [
      'Migrated key services to GCP, reducing infrastructure costs and streamlining deployments.',
      'Built Kafka streams to support real-time data synchronization across distributed services, enabling dynamic updates and decoupled system communication.',
      'Optimized MySQL performance using query refactoring, stored procedures, and index tuning for faster transactional processing and reporting.',
      'Mentored junior developers and supported cross-functional Agile teams, accelerating onboarding and delivery.',
      'Led client discussions to adopt new PLM features, aligning business needs with technical solutions.',
    ],
  },
  {
    title: 'Junior Engineer – Full Stack Java Developer',
    company: 'Ford Motor Company (Ford Business Solutions), Chennai, India',
    duration: 'Aug 2021 – Apr 2023',
    points: [
      'Upgraded legacy systems to Java 11/17+, enhancing performance, maintainability, and compliance with enterprise standards.',
      'Designed secure REST APIs using Spring Boot and OAuth2, enabling scalable microservices.',
      'Achieved 90%+ test coverage via Test Driven Development (JUnit, Mockito), reducing QA defects by over 60%.',
      'Built and integrated Angular UI components, ensuring seamless backend interaction.',
      'Automated CI/CD pipelines with Jenkins and Tekton, reducing deployment time by 90%.',
      'Containerized applications using Docker and deployed to Google Kubernetes Engine for automated, cloud-native delivery in dev and QA environments.',
      'Implemented SonarQube quality gates and SCA tooling (Cycode/FOSSA), eliminating critical vulnerabilities pre-release.',
      'Integrated 42Crunch API-security scans into the CI/CD pipeline and enforced Swagger / OpenAPI-first contracts, eliminating spec drift and blocking high-risk misconfigurations before production.',
      'Resolved critical production issues through proactive log tracing and root cause analysis.',
      'Automated ETL workflows and reporting using Alteryx, enhancing data accessibility and improving visibility for QA and business teams.',
    ],
  },
];

// Animation helpers
function getInitial(index: number) {
  return {
    opacity: 0,
    x: index % 2 === 0 ? -100 : 100,
  };
}

function getAnimate(index: number) {
  return {
    opacity: 1,
    x: 0,
    transition: {
      delay: index * 0.2,
      duration: 0.6,
      ease: 'easeOut' as const,
    },
  };
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-surface dark:bg-surfaceDark">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center mb-16 text-text dark:text-textDark"
      >
        Experience
      </motion.h2>

      <div className="relative max-w-6xl mx-auto px-4">
        {/* Timeline line */}
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-primary/40 transform -translate-x-1/2"></div>

        <div className="space-y-16">
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                custom={index}
                initial={getInitial(index)}
                whileInView={getAnimate(index)}
                viewport={{ once: true, amount: 0.3 }}
                className={`relative md:w-1/2 w-full ${
                  isLeft ? 'md:pr-10 md:ml-0 md:mr-auto' : 'md:pl-10 md:ml-auto md:mr-0'
                }`}
              >
                <div className="bg-surfaceAlt dark:bg-surfaceAltDark rounded-xl shadow-lg p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src={`${import.meta.env.BASE_URL}assets/ford-logo.png`}
                      alt="Ford Logo"
                      className="h-8 w-auto object-contain"
                    />
                    <h3 className="text-lg font-semibold text-text dark:text-textDark">
                      {exp.title}
                    </h3>
                  </div>

                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {exp.duration}
                    <br />
                    {exp.company}
                  </p>

                  <ul className="mt-3 list-disc list-inside text-sm text-text dark:text-textDark space-y-2">
                    {exp.points.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}