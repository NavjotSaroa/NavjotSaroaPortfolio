'use client';

import { motion } from 'framer-motion';

export default function ScrollToTopSection() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="h-screen flex items-center justify-center bg-zinc-900 text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-6"
      >
        <h2 className="text-4xl font-bold">That&apos;s All!</h2>
        <p className="text-lg">Want to take another look?</p>
        <button
  onClick={handleScrollTop}
  className="mt-4 px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition cursor-pointer"
>
  Scroll to Top
</button>
      </motion.div>
    </section>
  );
}
