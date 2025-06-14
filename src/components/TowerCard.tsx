import React from 'react';

interface TowerCardProps {
  name: string;
  description: string;
  imageUrl: string;
  onClick: () => void;
}

const TowerCard: React.FC<TowerCardProps> = ({
  name,
  description,
  imageUrl,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className='relative group cursor-pointer rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105'
    >
      <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10' />
      <img
        src={imageUrl}
        alt={`${name} tower`}
        className='w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110'
      />
      <div className='absolute bottom-0 left-0 right-0 p-6 z-20 text-white'>
        <h3 className='text-2xl font-bold mb-2'>{name}</h3>
        <p className='text-sm opacity-90'>{description}</p>
      </div>
    </div>
  );
};

export default TowerCard;
