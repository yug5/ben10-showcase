"use client";
import React, { useState, useEffect } from 'react';
import { classicAliens } from '../details/classic';

const radius = 320;        
const centerX = 400;
const centerY = 400;

export default function AlienGallery() {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    if (selectedIndex !== -1) {
      setShowDetails(true);
    } else {
      setShowDetails(false);
    }
  }, [selectedIndex]);

  const N = classicAliens.length;

  const rotation = (2 * Math.PI * selectedIndex) / N + Math.PI / 2;

  return (
    <div className="flex flex-col items-center space-y-6">
      <div className="relative w-[800px] h-[800px]">
        <div
          className="absolute w-full h-full transition-transform duration-[2000ms]  ease-in-out"
          style={{ transform: `rotate(-${rotation}rad)` }}
        >
          {classicAliens.map((alien, i) => {
            const angle = (2 * Math.PI * i) / N;
            const x = centerX + radius * Math.cos(angle) - 48; 
            const y = centerY + radius * Math.sin(angle) - 48;

            return (
              <img
                key={alien.id}
                src={alien.image}
                alt={alien.name}
                className="absolute w-24 h-24 rounded-full cursor-pointer"
                style={{
                  left: x,
                  top: y,
                  transform: `rotate(${rotation}rad)`, 
                  transition: 'transform 0.3s ease',
                }}
                onClick={() => setSelectedIndex(i)}
              />
            );
          })}
        </div>

        {showDetails && <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-center max-w-[300px]">
          <img
            src={classicAliens[selectedIndex].image}
            alt={classicAliens[selectedIndex].name}
            className="w-[250px] h-[250px] rounded-full mb-4 mx-auto"
          />
          <h2 className="text-2xl font-bold">{classicAliens[selectedIndex].name}</h2>
          <p className="text-lg">{classicAliens[selectedIndex].description}</p>
          <p className="text-sm text-gray-500">{classicAliens[selectedIndex].powers}</p>
        </div>}
      </div>
    </div>
  );
}
