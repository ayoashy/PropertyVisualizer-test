import React, { useState, useEffect } from 'react';
import TowerCard from '../components/TowerCard';
import FloorSelector from '../components/FloorSelector';
import UnitSelection from '../components/UnitSelection';
import { towers, apartments } from '../data/mockData';

const TowerOverview: React.FC = () => {
  const [selectedTower, setSelectedTower] = useState<string | null>(null);
  const [selectedFloor, setSelectedFloor] = useState<number | null>(null);
  const [selectedApartment, setSelectedApartment] = useState<number | null>(
    null
  );

  const floors = Array.from({ length: 15 }, (_, i) => i + 1);

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedTower, selectedFloor, selectedApartment]);

  const handleTowerSelect = (towerId: string) => {
    setSelectedTower(towerId);
    setSelectedFloor(null);
    setSelectedApartment(null);
  };

  const handleFloorSelect = (floor: number) => {
    setSelectedFloor(floor);
    setSelectedApartment(null);
  };

  const handleApartmentSelect = (apartmentId: number | null) => {
    setSelectedApartment(apartmentId);
  };

  return (
    <div className='min-h-screen bg-gray-50 p-6 mt-20'>
      {!selectedTower ? (
        <div className='max-w-6xl mx-auto animate-fadeIn'>
          <div className='text-center mb-12'>
            <h1 className='text-4xl font-bold text-gray-800 mb-4 animate-slideUp'>
              Welcome to Property Visualizer
            </h1>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto animate-slideUp delay-100'>
              Discover your dream home in our premium residential towers. Each
              tower offers unique views and luxurious living spaces designed for
              your comfort.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {towers.map((tower, index) => (
              <div
                key={tower.id}
                className='animate-slideUp'
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <TowerCard
                  name={tower.name}
                  description={tower.description}
                  imageUrl={tower.imageUrl}
                  onClick={() => handleTowerSelect(tower.id)}
                />
              </div>
            ))}
          </div>
        </div>
      ) : !selectedFloor ? (
        <div className='max-w-4xl mx-auto animate-fadeIn'>
          <button
            onClick={() => setSelectedTower(null)}
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
            Back to Towers
          </button>
          <div className='text-center mb-8 animate-slideUp'>
            <h2 className='text-3xl font-bold text-gray-800 mb-4'>
              Welcome to {towers.find((t) => t.id === selectedTower)?.name}
            </h2>
            <p className='text-lg text-gray-600'>
              Which floor would you like to explore? Each floor offers unique
              views and premium living spaces.
            </p>
          </div>
          <FloorSelector
            floors={floors}
            selectedFloor={selectedFloor || 0}
            onFloorSelect={handleFloorSelect}
          />
        </div>
      ) : (
        <UnitSelection
          apartments={apartments}
          selectedApartment={selectedApartment}
          onApartmentSelect={handleApartmentSelect}
          onBack={() => setSelectedFloor(null)}
          floor={selectedFloor}
        />
      )}
    </div>
  );
};

export default TowerOverview;
