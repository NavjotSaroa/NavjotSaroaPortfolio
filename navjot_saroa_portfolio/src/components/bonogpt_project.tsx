'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function F1AIStrat() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const backgroundColor = useTransform(
    scrollYProgress,
    [0.0, 0.1, 0.9, 1.0],
    ['#000000', '#ffffff', '#ffffff', '#ffffff']
  );

  const textX = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.5, 0.6, 0.8, 1],  ['-100%', '-25%', '-25%', '-25%', '-25%', '-100%', '-100%']);
  const imageX = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.5, 0.6, 0.8, 1], ['100%', '5%', '5%', '5%', '5%', '100%', "100%"]);
  const opacity = useTransform(scrollYProgress, [0.05, 0.2, 0.35, 0.6, 0.7], [0, 1, 1, 1, 0]);

  return (
    <motion.section
  ref={ref}
  className="relative h-[350vh] sm:h-[250vh] md:h-[300vh] lg:h-[350vh]"
  style={{ backgroundColor }}
>

      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="container mx-auto flex items-center justify-between w-full px-12">
        <motion.div style={{ x: textX, opacity, color: '#000000' }} className="w-1/2 max-w-[400px] text-left ml-auto">
          <h2 className="text-4xl font-bold mb-4">
          <Link
  href="/projects#bono-gpt"
  style={{
    textDecoration: 'underline',
    textDecorationColor: '#60a5fa', // Tailwind's blue-400
    textDecorationThickness: '2px'
  }}
  className="text-blue-400 underline-offset-4 transition-colors duration-200 cursor-pointer"
>
  BonoGPT
</Link>


          </h2>
          <p className="text-lg">Improve your racing skills with the help of AI</p>
          </motion.div>

          <motion.div style={{ x: imageX, opacity}} className="w-1/2">
          <video
            src="/f1-race.mp4"
            className="h-full"
            autoPlay
            muted
            loop
            playsInline
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
