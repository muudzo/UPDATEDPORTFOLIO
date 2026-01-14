import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface BootSequenceProps {
  onComplete: () => void;
}

export const BootSequence: React.FC<BootSequenceProps> = ({ onComplete }) => {
  const [lines, setLines] = useState<string[]>([]);

  const bootLines = [
    'BIOS Date 01/14/26 23:20:12 Ver: 1.0.0',
    'CPU: Nostalgia Core @ 3.5GHz',
    'Checking NVRAM..',
    '640K System RAM Passed',
    '16384K Extended RAM Passed',
    'System BIOS Shadowed',
    'Video BIOS Shadowed',
    'Fixed Disk 0: Nostalgia OS-Switcher Volume',
    'Mouse initialized',
    'Loading interface...',
  ];

  useEffect(() => {
    let delay = 0;
    bootLines.forEach((line, index) => {
      delay += Math.random() * 300 + 100;
      setTimeout(() => {
        setLines((prev) => [...prev, line]);
        if (index === bootLines.length - 1) {
          setTimeout(onComplete, 800);
        }
      }, delay);
    });
  }, []);

  return (
    <div className='w-full h-full bg-black text-white font-mono p-10 text-lg flex flex-col justify-start items-start z-50 absolute top-0 left-0 cursor-none'>
      <div className='mb-8 w-full flex justify-between'>
        <span>NOSTALGIA-BIOS (C) 2026 Deepmind Inc.</span>
        <span>Energy Star Ally</span>
      </div>

      <div className='flex flex-col gap-1 w-full'>
        {lines.map((text, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.1 }}
          >
            {text}
          </motion.div>
        ))}
        <motion.div
          className='w-3 h-5 bg-white mt-1'
          animate={{ opacity: [0, 1] }}
          transition={{ repeat: Infinity, duration: 0.5 }}
        />
      </div>

      <div className='absolute bottom-10 left-10 text-gray-500 text-sm'>
        Press DEL to enter Setup
      </div>
    </div>
  );
};
