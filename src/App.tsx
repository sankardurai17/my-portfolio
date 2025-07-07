import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact'
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Hero />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
