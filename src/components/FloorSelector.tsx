import React from 'react';

interface FloorSelectorProps {
  floors: number[];
  selectedFloor: number;
  onFloorSelect: (floor: number) => void;
}

const FloorSelector: React.FC<FloorSelectorProps> = ({
  floors,
  selectedFloor,
  onFloorSelect,
}) => {
  return (
    <div className='flex flex-col gap-4 p-6 bg-white rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl'>
      <div className='flex items-center justify-between mb-2 animate-slideUp'>
        <div className='flex items-center gap-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 text-[var(--color-primary)] animate-float'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
            />
          </svg>
          <h2 className='text-xl font-bold text-gray-800'>Floor Selection</h2>
        </div>
        <div className='text-sm text-gray-500 animate-fadeIn'>
          {selectedFloor
            ? `Selected: Floor ${selectedFloor}`
            : 'Please select a floor'}
        </div>
      </div>

      <div className='grid grid-cols-5 gap-3'>
        {floors.map((floor, index) => (
          <button
            key={floor}
            onClick={() => onFloorSelect(floor)}
            className={`relative p-4 rounded-lg transition-all duration-300 transform hover:scale-105 ${
              selectedFloor === floor
                ? 'bg-[var(--color-primary)] text-white scale-105 shadow-lg'
                : 'bg-gray-50 hover:bg-gray-100 text-gray-700 hover:shadow-md'
            }`}
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className='flex flex-col items-center gap-1 animate-fadeIn'>
              <span className='text-lg font-semibold'>{floor}</span>
              <span className='text-xs opacity-75'>Floor</span>
            </div>
            {selectedFloor === floor && (
              <div className='absolute -top-1 -right-1 w-4 h-4 bg-[var(--color-secondary)] rounded-full animate-ping' />
            )}
          </button>
        ))}
      </div>

      <div className='mt-4 p-4 bg-gray-50 rounded-lg transform transition-all duration-300 hover:shadow-md animate-slideUp'>
        <div className='flex items-center gap-2 text-sm text-gray-600'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5 text-[var(--color-secondary)] animate-pulse'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
              clipRule='evenodd'
            />
          </svg>
          <p className='animate-fadeIn'>
            Each floor offers unique views and premium living spaces. Select a
            floor to explore available units.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FloorSelector;
