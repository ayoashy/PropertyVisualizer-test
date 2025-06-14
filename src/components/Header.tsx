import React from 'react';

const Header: React.FC = () => {
  return (
    <header className='fixed top-0 left-0 right-0 bg-[#223089] text-white shadow-lg z-50 transform transition-all duration-300'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo and Brand */}
          <div className='flex items-center'>
            <div className='flex-shrink-0'>
              <div className='flex items-center space-x-2 transform transition-all duration-300 hover:scale-105'>
                <img
                  src='/logo-white.png'
                  alt='logo'
                  className='w-56'
                />
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className='md:hidden'>
            <button className='text-white hover:text-white/80 focus:outline-none transform transition-all duration-300 hover:scale-110'>
              <svg
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
