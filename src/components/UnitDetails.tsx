import React from 'react';
import { Apartment } from '../data/mockData';

interface UnitDetailsProps {
  unit: Apartment;
  floor: number;
  onBack: () => void;
}

const UnitDetails: React.FC<UnitDetailsProps> = ({ unit, floor, onBack }) => {
  return (
    <div className='bg-white rounded-xl shadow-lg overflow-hidden animate-slideUp'>
      <div className='relative'>
        <img
          src={unit.imageUrl}
          alt={unit.unitType}
          className='w-full h-[60vh] object-cover'
        />
        <div className='absolute top-4 right-4'>
          <span
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              unit.status === 'available'
                ? 'bg-green-100 text-green-800'
                : unit.status === 'reserved'
                ? 'bg-yellow-100 text-yellow-800'
                : 'bg-red-100 text-red-800'
            }`}
          >
            {unit.status.charAt(0).toUpperCase() + unit.status.slice(1)}
          </span>
        </div>
      </div>
      <div className='p-8'>
        <div className='flex justify-between items-start mb-6'>
          <div>
            <h2 className='text-3xl font-bold text-gray-800 mb-2'>
              {unit.unitType}
            </h2>
            <p className='text-gray-600'>
              Floor {floor} • {unit.view} • {unit.orientation}
            </p>
          </div>
          <div className='text-right'>
            <p className='text-gray-600 text-sm'>Price</p>
            <p className='text-2xl font-bold text-[var(--color-primary)]'>
              ${unit.price.toLocaleString()}
            </p>
          </div>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-8'>
          <div className='bg-gray-50 p-4 rounded-lg'>
            <p className='text-gray-600 text-sm'>Area</p>
            <p className='text-xl font-semibold'>{unit.area} sq.ft</p>
          </div>
          <div className='bg-gray-50 p-4 rounded-lg'>
            <p className='text-gray-600 text-sm'>Bedrooms</p>
            <p className='text-xl font-semibold'>{unit.floorPlan.bedrooms}</p>
          </div>
          <div className='bg-gray-50 p-4 rounded-lg'>
            <p className='text-gray-600 text-sm'>Bathrooms</p>
            <p className='text-xl font-semibold'>{unit.floorPlan.bathrooms}</p>
          </div>
          <div className='bg-gray-50 p-4 rounded-lg'>
            <p className='text-gray-600 text-sm'>Parking</p>
            <p className='text-xl font-semibold'>{unit.floorPlan.parking}</p>
          </div>
        </div>

        <div className='space-y-6'>
          <div>
            <h3 className='text-lg font-semibold text-gray-800 mb-3'>
              Features
            </h3>
            <div className='flex flex-wrap gap-2'>
              {unit.features.map((feature, idx) => (
                <span
                  key={idx}
                  className='px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm'
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className='text-lg font-semibold text-gray-800 mb-3'>
              Amenities
            </h3>
            <div className='flex flex-wrap gap-2'>
              {unit.amenities.map((amenity, idx) => (
                <span
                  key={idx}
                  className='px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm'
                >
                  {amenity}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className='mt-8 flex justify-end'>
          <button
            onClick={onBack}
            className='px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2 group'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5 transform transition-transform group-hover:-translate-x-1'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z'
                clipRule='evenodd'
              />
            </svg>
            Back to Units
          </button>
        </div>
      </div>
    </div>
  );
};

export default UnitDetails;
