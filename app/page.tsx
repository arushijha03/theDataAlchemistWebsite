import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { profile } from "./data/stats";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <footer className="px-6 sm:px-10 lg:px-16 py-8 border-t border-ink/10 text-center">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} Arushi Jha · {profile.brand}
        </p>
      </footer>
    </>
  );
}
