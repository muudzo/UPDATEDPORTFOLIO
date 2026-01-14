import React from 'react';
import { useOSStore } from '@store/useOSStore';
import { motion } from 'framer-motion';

export const OSSelectionScreen: React.FC = () => {
  const { setOS, setBooted } = useOSStore();

  const handleSelect = (os: 'win7' | 'macos') => {
    setOS(os);
    setBooted(true);
  };

  return (
    <div className='flex flex-col items-center justify-center h-full w-full bg-neutral-900 text-white gap-12'>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className='text-3xl font-light tracking-wide uppercase'
      >
        Select Operating System
      </motion.h2>

      <div className='flex gap-16'>
        {/* Windows 7 Card */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className='group cursor-pointer flex flex-col items-center gap-4'
          onClick={() => handleSelect('win7')}
        >
          <div className='w-64 h-40 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 shadow-2xl border-4 border-transparent group-hover:border-blue-400 transition-all flex items-center justify-center overflow-hidden relative'>
            <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity' />
            <span className='text-4xl font-bold italic'>7</span>
          </div>
          <span className='text-lg font-medium group-hover:text-blue-400 transition-colors'>
            Windows 7
          </span>
        </motion.div>

        {/* Mac OS Card */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className='group cursor-pointer flex flex-col items-center gap-4'
          onClick={() => handleSelect('macos')}
        >
          <div className='w-64 h-40 rounded-lg bg-gradient-to-br from-gray-200 to-gray-400 shadow-2xl border-4 border-transparent group-hover:border-purple-400 transition-all flex items-center justify-center overflow-hidden relative'>
            <div className='absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity' />
            <span className='text-4xl font-bold text-black opacity-80'>X</span>
          </div>
          <span className='text-lg font-medium group-hover:text-purple-400 transition-colors'>
            Mac OS X
          </span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1 }}
        className='absolute bottom-10 text-xs text-gray-500 font-mono'
      >
        v1.0.0-alpha
      </motion.div>
    </div>
  );
};
