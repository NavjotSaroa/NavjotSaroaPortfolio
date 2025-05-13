'use client';

import { motion } from 'framer-motion';
import Navbar from '../../components/navbar';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export default function AboutPage() {
  return (
    <main className="min-h-screen px-8 py-16 bg-zinc-900 text-white">
      <Navbar />
      <section className="max-w-3xl mx-auto space-y-12">
        {/* Page Container with staggered children */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {/* Heading */}
          <motion.h1
            className="text-5xl font-bold mb-8"
            variants={fadeIn}
          >
            About Me
          </motion.h1>
          
          <motion.hr 
          className='mb-5'
          variants={fadeIn}/>
          {/* Intro Paragraph */}
          <motion.p
            className="text-lg leading-relaxed mb-8"
            variants={fadeIn}
          >
            I’m Navjot, a developer and data scientist passionate about combining machine learning, clean design, and clear storytelling. Whether it’s building smart systems or explaining complex data through visuals, I enjoy making things that work and make sense.
          </motion.p>

          {/* Skills Section */}
          <motion.div className="space-y-6 text-sm sm:text-base" variants={fadeIn}>
            <h2 className="text-2xl font-semibold mb-2">Skills</h2>
            {[
              { label: 'Programming', skills: 'Java, Python, SQL, MATLAB, C++, C, UML, HTML, CSS, JavaScript' },
              { label: 'Tools & Software', skills: 'Arduino, Eclipse, Jupyter Notebooks, Git, MPLAB, VSCode, GitHub, MySQL, SQLite3, Microsoft Office, Docker, JUnit, G-Suite' },
              { label: 'Technical', skills: 'Data Analytics, Data Science, Information Systems' },
              { label: 'Frameworks/Libraries', skills: 'Flask, Pandas, Scikit-learn, Numpy' },
              { label: 'Soft Skills', skills: 'Public speaking, oral and written skills, collaboration, problem-solving skills, attention to detail, time management' },
            ].map(({ label, skills }) => (
              <div key={label} className="grid grid-cols-3 sm:grid-cols-4 gap-4 mb-4">
                <span className="font-semibold text-blue-400 col-span-1">{label}:</span>
                <span className="col-span-2 sm:col-span-3 text-zinc-200">{skills}</span>
              </div>
            ))}
          </motion.div>

          {/* Fun Facts */}
          <motion.div className='mt-12' variants={fadeIn}>
            <h2 className="text-2xl font-semibold mb-2">A Few Things About Me</h2>
            <ul className="list-disc list-inside space-y-2 text-zinc-300">
              <li>🏎️ F1 nerd</li>
              <li>📊 Loves digging into messy datasets</li>
              <li className='mb-8'>💡 Always curious about how stuff works (and how to break it)</li>
            </ul>
          </motion.div>

          {/* Contact Footer */}
          <motion.div className="pt-8 border-t border-zinc-700" variants={fadeIn}>
            <p>Want to work together or chat?</p>
            <a
              href="mailto:navjot.saroa@ucalgary.ca"
              className="text-blue-400 underline hover:text-blue-300"
            >
              Send me an email
            </a>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
