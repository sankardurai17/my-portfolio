import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Project from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Project />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
