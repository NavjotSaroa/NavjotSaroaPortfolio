'use client';

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

  const textX = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6], ['100%', '75%', '75%', '75%']);
  const imageX = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6], ['-100%', '-95%', '-95%', '-95%']);
  const opacity = useTransform(scrollYProgress, [0.05, 0.2, 0.35, 0.9], [0, 1, 1, 0]);

  return (
    <motion.section
      ref={ref}
      className="h-[350vh] relative"
      style={{ backgroundColor }}
    >
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="container mx-auto flex items-center justify-between w-full px-12">
          <motion.div style={{ x: textX, opacity, color: '#ffffff' }} className="w-1/2 text-right">
            <h2 className="text-4xl font-bold mb-4">F1 AI Strat</h2>
            <p className="text-lg">Let your AI engineer focus on the pit strategy while you race</p>
          </motion.div>

          <motion.div style={{ x: imageX, opacity }} className="w-1/2">
            <Image src="/f1-car.png" alt="F1 Project" className="w-full" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
