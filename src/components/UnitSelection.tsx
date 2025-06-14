import React, { useState } from 'react';
import { Apartment } from '../data/mockData';
import UnitCard from './UnitCard';
import UnitDetails from './UnitDetails';

interface UnitSelectionProps {
  apartments: Apartment[];
  selectedApartment: number | null;
  onApartmentSelect: (id: number | null) => void;
  onBack: () => void;
  floor: number;
}

const UnitSelection: React.FC<UnitSelectionProps> = ({
  apartments,
  selectedApartment,
  onApartmentSelect,
  onBack,
  floor,
}) => {
  const [hoveredUnit, setHoveredUnit] = useState<number | null>(null);
  const selectedUnit = apartments.find((a) => a.id === selectedApartment);

  return (
    <div className='max-w-6xl mx-auto animate-fadeIn'>
      <button
        onClick={onBack}
        className='mb-6 text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors flex items-center gap-2 group'
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
        Back to Floors
      </button>

      {!selectedApartment ? (
        <>
          <h2 className='text-2xl font-bold text-gray-800 mb-6 animate-slideUp'>
            Floor {floor} - Available Units
          </h2>
          <div className='relative'>
            {/* Background overlay for hover effect */}
            <div
              className={`absolute inset-0 bg-black transition-opacity duration-300 rounded-xl ${
                hoveredUnit ? 'opacity-10' : 'opacity-0'
              }`}
            />

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10'>
              {apartments.map((apartment, index) => (
                <div
                  key={apartment.id}
                  onMouseEnter={() => setHoveredUnit(apartment.id)}
                  onMouseLeave={() => setHoveredUnit(null)}
                  onTouchStart={() => setHoveredUnit(apartment.id)}
                  onTouchEnd={() => setHoveredUnit(null)}
                  className={`transition-transform duration-300 ${
                    hoveredUnit === apartment.id
                      ? 'scale-105 z-20'
                      : hoveredUnit
                      ? 'scale-95'
                      : ''
                  }`}
                >
                  <UnitCard
                    apartment={apartment}
                    onClick={() => onApartmentSelect(apartment.id)}
                    animationDelay={index * 100}
                  />
                </div>
              ))}
            </div>
          </div>
        </>
      ) : selectedUnit ? (
        <UnitDetails
          unit={selectedUnit}
          floor={floor}
          onBack={() => onApartmentSelect(null)}
        />
      ) : null}
    </div>
  );
};

export default UnitSelection;
