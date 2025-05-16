import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Resume from "./components/Resume";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </main>
  );
}
