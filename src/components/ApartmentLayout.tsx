import React from 'react';

interface ApartmentLayoutProps {
  imageUrl: string;
  area: number;
  unitType: string;
  roomCount: number;
  onClick: () => void;
}

const ApartmentLayout: React.FC<ApartmentLayoutProps> = ({
  imageUrl,
  area,
  unitType,
  roomCount,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className='group relative cursor-pointer rounded-xl overflow-hidden bg-white shadow-lg transition-all duration-300 hover:shadow-2xl'
    >
      <div className='relative'>
        <img
          src={imageUrl}
          alt={`${unitType} layout`}
          className='w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105'
        />
        <div className='absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300' />
      </div>
      <div className='p-4'>
        <h3 className='text-lg font-semibold text-gray-800 mb-2'>{unitType}</h3>
        <div className='flex justify-between text-sm text-gray-600'>
          <span>{area} sq.ft</span>
          <span>{roomCount} rooms</span>
        </div>
      </div>
    </div>
  );
};

export default ApartmentLayout;
