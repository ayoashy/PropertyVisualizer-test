import React from 'react';
import { Apartment } from '../data/mockData';

interface UnitCardProps {
  apartment: Apartment;
  onClick: () => void;
  animationDelay: number;
}

const UnitCard: React.FC<UnitCardProps> = ({
  apartment,
  onClick,
  animationDelay,
}) => {
  return (
    <div
      className='animate-slideUp'
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      <div
        onClick={onClick}
        className='bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer'
      >
        <div className='relative'>
          <img
            src={apartment.imageUrl}
            alt={apartment.unitType}
            className='w-full h-48 object-cover'
          />
          <div className='absolute top-4 right-4'>
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                apartment.status === 'available'
                  ? 'bg-green-100 text-green-800'
                  : apartment.status === 'reserved'
                  ? 'bg-yellow-100 text-yellow-800'
                  : 'bg-red-100 text-red-800'
              }`}
            >
              {apartment.status.charAt(0).toUpperCase() +
                apartment.status.slice(1)}
            </span>
          </div>
        </div>
        <div className='p-6'>
          <h3 className='text-xl font-bold text-gray-800 mb-2'>
            {apartment.unitType}
          </h3>
          <div className='grid grid-cols-2 gap-4 mb-4'>
            <div>
              <p className='text-gray-600 text-sm'>Area</p>
              <p className='text-lg font-semibold'>{apartment.area} sq.ft</p>
            </div>
            <div>
              <p className='text-gray-600 text-sm'>Price</p>
              <p className='text-lg font-semibold'>
                ${apartment.price.toLocaleString()}
              </p>
            </div>
          </div>
          <div className='flex flex-wrap gap-2'>
            {apartment.features.slice(0, 3).map((feature, idx) => (
              <span
                key={idx}
                className='px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs'
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnitCard;
