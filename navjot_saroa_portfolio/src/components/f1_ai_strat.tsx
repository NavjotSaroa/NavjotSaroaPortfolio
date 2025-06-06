'use client';

import Link from 'next/link';
import Image from 'next/image';
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
    ['#000000', '#000000', '#000000', '#000000']
  );

  const textX = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.5, 0.6, 0.8, 1], ['200%', '125%', '125%', '125%', '125%', '200%', "200%"]);
  const imageX = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.5, 0.6, 0.8, 1], ['-200%', '-95%', '-95%', '-95%', '-95%', '-200%', '-200%']);
  const opacity = useTransform(scrollYProgress, [0.05, 0.2, 0.35, 0.6, 0.7], [0, 1, 1, 1, 0]);

  return (
    <motion.section
        ref={ref}
        className="relative h-[350vh] sm:h-[250vh] md:h-[300vh] lg:h-[350vh]"
        style={{ backgroundColor }}
        >

      <div className="sticky top-0 h-screen flex items-center justify-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between w-full px-12 gap-8">
          <motion.div style={{ x: textX, opacity, color: '#ffffff' }} className="w-1/2 max-w-[400px] text-right ml-auto">
          <h2 className="text-4xl font-bold mb-4">
          <Link
  href="/projects#f1-ai-strat"
  style={{
    textDecoration: 'underline',
    textDecorationColor: '#60a5fa', // Tailwind's blue-400
    textDecorationThickness: '2px'
  }}
  className="text-blue-400 underline-offset-4 transition-colors duration-200 cursor-pointer"
>
  F1 Strategy Generator
</Link>
          </h2>
          <p className="text-lg">Let your AI engineer focus on the pit strategy while you race. Click on link to learn more!</p>
          </motion.div>

          <motion.div style={{ x: imageX, opacity }} className="w-1/2">
            <Image
  src="/f1-car.png"
  alt="F1 Car"
  width={1920}
  height={1080}
  className="w-full h-auto"
/>

          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
