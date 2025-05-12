import Home from '../components/home';
import F1AIStrat from '../components/f1_ai_strat';
import BonoGPT from '../components/bonogpt_project';
import ResearchPaper from '../components/research_paper';
import Navbar from '../components/navbar';

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <section className="h-screen">
        <Home />
      </section>

      {/* Each project gets its own section */}
      <F1AIStrat />
      <BonoGPT />
      <ResearchPaper />
    </main>
  );
}
