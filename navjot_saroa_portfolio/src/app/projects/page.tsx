'use client';

import { motion } from 'framer-motion';
import Navbar from '../../components/navbar';
import {
  CpuChipIcon,
  MicrophoneIcon,
  BookOpenIcon,
} from '@heroicons/react/24/outline';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen px-8 py-16 bg-zinc-900 text-white">
      <Navbar />
      <section className="max-w-4xl mx-auto">
        <motion.h1
          className="text-5xl font-bold text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          Projects
        </motion.h1>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="space-y-12"
        >
          {/* Project Card */}
          <motion.div
            id="f1-ai-strat"
            variants={fadeIn}
            className="bg-zinc-800 p-6 rounded-2xl shadow-md border border-zinc-700 scroll-mt-24"
          >
            <div className="flex items-center gap-3 mb-4 text-blue-400">
              <CpuChipIcon className="w-6 h-6" />
              <h2 className="text-2xl font-semibold">F1 AI Strategy Generator</h2>
            </div>
            <ul className="list-disc list-inside space-y-3 text-zinc-300 leading-relaxed text-base">
              <li>
                An AI based race strategy generator for the F1 23 game. This was a three phased project involving data collection,
                feature extrapolation, and strategy prediction.
              </li>
              <li>
                Phase 1: Collected race car telemetry from F1 23&apos;s UDP broadcast of telemetry data at 120 Hz. This data was collected,
                processed, and stored in a SQLite3 table.
              </li>
              <li>
                Phase 2: Data was preprocessed and was used to train a random forest regressor model. To make the most of the 500,000 data
                points that were collected. Each data point was attributed to the same track position in the next lap, thus effectively extracting
                half a million laps worth of data from just 200 laps.
              </li>
              <li>
                Phase 3: Trained model was used to predict future features of race car (tyre/brake/engine temperatures). A genetic algorithm was then
                developed to simulate multiple races, and the best race was chosen. This determined the optimal pit strategy.
              </li>
            </ul>
          </motion.div>

          <motion.div
            id="bono-gpt"
            variants={fadeIn}
            className="bg-zinc-800 p-6 rounded-2xl shadow-md border border-zinc-700"
          >
            <div className="flex items-center gap-3 mb-4 text-blue-400">
              <MicrophoneIcon className="w-6 h-6" />
              <h2 className="text-2xl font-semibold">BonoGPT</h2>
            </div>
            <ul className="list-disc list-inside space-y-3 text-zinc-300 leading-relaxed text-base">
              <li>Project manager and data scientist; leading a team of 4.</li>
              <li>
                Designed a website where users could access race telemetry data of real-life F1 drivers, and compare their own
                driving in the F1 game series to their&apos;s.
              </li>
              <li>
                Harnessed the power of AI (ChatGPT 4o) to design a race engineer that gave feedback to the user on how to improve over the lap.
              </li>
            </ul>
          </motion.div>

          <motion.div
            id="research-paper"
            variants={fadeIn}
            className="bg-zinc-800 p-6 rounded-2xl shadow-md border border-zinc-700"
          >
            <div className="flex items-center gap-3 mb-4 text-blue-400">
              <BookOpenIcon className="w-6 h-6" />
              <h2 className="text-2xl font-semibold">Research Paper</h2>
            </div>
            <ul className="list-disc list-inside space-y-3 text-zinc-300 leading-relaxed text-base">
              <li>
                Title: Influence of Artificial Intelligence on Microservices Architecture
              </li>
              <li>
                Literature review of the benefits and pitfalls of using AI in microservices architectures through the lens of security and
                efficiency.
              </li>
              <li>Review of 20 academic papers in the field published in the past decade.</li>
            </ul>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
