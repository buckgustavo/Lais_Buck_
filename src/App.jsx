import { useTheme } from './hooks/useTheme';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ForWhom from './components/ForWhom';
import Pillars from './components/Pillars';
import Results from './components/Results';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import CTAFinal from './components/CTAFinal';
import Footer from './components/Footer';

export default function App() {
  const [theme, toggleTheme] = useTheme();

  return (
    <>
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <ForWhom />
        <Pillars />
        <Results />
        <Testimonials />
        <Process />
        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}
