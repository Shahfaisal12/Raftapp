"use client"

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface TeamMember {
  id: string;
  name: string;
  position: string;
  image: string;
}

interface TeamCarouselProps {
  teamMembers: TeamMember[];
}

const TeamCarousel = ({ teamMembers }: TeamCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  
  const minSwipeDistance = 50;

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
    );
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrevious();
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  const getVisibleMemberIndices = () => {

    const indices = [];
    const totalMembers = teamMembers.length;
    
    for (let i = currentIndex - 2; i <= currentIndex + 2; i++) {
      const normalizedIndex = ((i % totalMembers) + totalMembers) % totalMembers;
      indices.push(normalizedIndex);
    }
    
    return indices;
  };

  const visibleIndices = getVisibleMemberIndices();

  return (
    <div className="relative w-full overflow-hidden py-12  ">
      <h2 className="text-center text-3xl font-bold mb-12 text-black dark:text-white">Meet Our Talented Team</h2>
      
      <div 
        className="relative flex items-center justify-center"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <button
          onClick={handlePrevious}
          className="absolute left-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/30 dark:bg-white/30 text-primary backdrop-blur-sm hover:bg-black/50 dark:hover:bg-white/50  transition-all"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        
        <div className="flex w-full justify-center transition-all duration-300 ease-in-out">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 px-4 md:px-8">
            {visibleIndices.map((index, i) => {
              const member = teamMembers[index];
              const isCurrent = index === currentIndex;
              
              return (
                <div 
                  key={member.id} 
                  className={`
                    transition-all duration-300 ease-in-out
                    ${i === 0 || i === 4 ? 'hidden lg:block' : ''}
                    ${i === 1 || i === 3 ? 'hidden md:block' : ''}
                    ${isCurrent ? 'scale-110 z-10' : 'scale-100 opacity-80'}
                  `}
                >
                  <div className={`
                    relative overflow-hidden rounded-lg bg-gray-800
                    ${isCurrent ? 'border-2 border-blue-400 shadow-lg shadow-blue-400/20' : ''}
                  `}>
                    <div className="aspect-[3/4] relative">
                      <Image 
                        src={member.image} 
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="font-bold text-white text-lg">{member.name}</h3>
                      <p className="text-gray-300 text-sm">{member.position}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        <button
          onClick={handleNext}
          className="absolute right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full  bg-black/30 dark:bg-white/30 text-primary backdrop-blur-sm hover:bg-black/50 dark:hover:bg-white/50 transition-all"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
      
      <div className="flex justify-center mt-8 space-x-2">
        {teamMembers.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-blue-400 w-6' : 'bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamCarousel;