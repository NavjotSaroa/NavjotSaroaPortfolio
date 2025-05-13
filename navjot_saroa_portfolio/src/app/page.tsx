import Home from '../components/home';
import F1AIStrat from '../components/f1_ai_strat';
import BonoGPT from '../components/bonogpt_project';
import ResearchPaper from '../components/research_paper';
import Navbar from '../components/navbar';
import ScrollToTopSection from '../components/scrollback';

export default function HomePage() {
  return (
      <main className="relative z-0">
        <Navbar />
        <section id="home" className="h-screen">
          <Home />
        </section>

        <F1AIStrat />
        <BonoGPT />
        <ResearchPaper />
        <ScrollToTopSection />
      </main>

  );
}

