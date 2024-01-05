import GithubContribution from '@/components/GithubContribution';
import About from '@/sections/About';
import Education from '@/sections/Education';
import Footer from '@/sections/Footer';
import Hero from '@/sections/Hero';
import Project from '@/sections/Project';
import Skills from '@/sections/Skills';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Project />
      <Education/>
      <Skills />
     <GithubContribution/>
      <Footer />
    </main>
  );
}
