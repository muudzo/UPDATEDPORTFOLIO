import React from 'react';

interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='relative w-screen h-screen overflow-hidden bg-black text-white select-none'>
      {children}
    </div>
  );
};
