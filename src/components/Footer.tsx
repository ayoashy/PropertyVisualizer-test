import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className='bg-[#223089] text-white transform transition-all duration-300 hover:shadow-lg flex justify-center'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <div className='flex items-center space-x-2 transform transition-all duration-300 hover:scale-105'>
          <img src='/logo-white.png' alt='logo' className='w-56' />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
