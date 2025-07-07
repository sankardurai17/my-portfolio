export default function About() {
    return (
      <section id="about" className="py-20 bg-surfaceAlt dark:bg-surfaceAltDark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center md:text-left text-gray-900 dark:text-gray-100">
            About Me
          </h2>
  
          <p className="leading-relaxed text-gray-700 dark:text-gray-300">
            I’m a full-stack developer based on canada with 2 + years at Ford Motor Company,
            building scalable enterprise apps using Java, Spring Boot, Angular,
            and Kafka. Skilled in REST API design, CI/CD (Jenkins & Tekton), and
            cloud deployments on GCP.
            <br />
            <br />
            Recently completed my Master of Applied Computer Science at Concordia
            University, Montréal, Canada. Passionate about clean code, cloud-native
            architecture, and solving real-world problems with technology.
          </p>
        </div>
      </section>
    );
  }
  