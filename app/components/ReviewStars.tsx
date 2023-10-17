'use client'
import { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';

const ReviewStars = () => {
  const [hoveredStars, setHoveredStars] = useState(-1);
  const [starsSelected, setStarsSelected] = useState(false);
  
  const stars = [1, 2, 3, 4, 5];
  
  const handleStarHover = (starIndex: number) => {
    setStarsSelected(false)
    setHoveredStars(starIndex);
  };

  const handleStarLeave = () => {
    !starsSelected && setHoveredStars(-1);
  };


  return (
    <div className="star-rating flex">
      {stars.map((starIndex) => (
        <span
          key={starIndex}
          className={`textstar cursor-pointer ${hoveredStars !== -1 && starIndex <= hoveredStars ? 'text-yellow-500' : 'text-gray-400'}`}
          onMouseEnter={() => handleStarHover(starIndex)}
          onMouseLeave={handleStarLeave}
          onClick={() => setStarsSelected(true)}
        >
          <AiFillStar className='h-6 w-6' />
        </span>
      ))}
    </div>
  );
};

export default ReviewStars;
