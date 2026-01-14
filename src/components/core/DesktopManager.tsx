import React from 'react';
import { useOSStore } from '@store/useOSStore';
import { Win7Desktop } from '@components/os/win7/Desktop';
import { MacOSDesktop } from '@components/os/macos/Desktop';
import { AnimatePresence, motion } from 'framer-motion';

export const DesktopManager: React.FC = () => {
  const { currentOS } = useOSStore();

  return (
    <div className='w-full h-full relative overflow-hidden'>
      <AnimatePresence mode='wait'>
        {currentOS === 'win7' && (
          <motion.div
            key='win7'
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className='w-full h-full'
          >
            <Win7Desktop />
          </motion.div>
        )}

        {currentOS === 'macos' && (
          <motion.div
            key='macos'
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className='w-full h-full'
          >
            <MacOSDesktop />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
