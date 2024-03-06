import React from 'react';
import { Tooltip } from 'react-tooltip'

const Works = () => {
  const imageNames = Array.from({ length: 9 }, (_, index) => `img${index + 1}.jpg`);
  const imagePath = '/imgs/'; // Adjust the path based on your project structure

  return (
    <div>
      <a data-tooltip-id="my-tooltip" data-tooltip-content="My blogs" data-tooltip-place="top" className=""><h2 className="brrr justify-center md:-mt-28 mt-10 flex items-center text-primary-brown">
        Work<span className="text-idkfrl">:Blogs</span>
      </h2></a>
      <Tooltip id="my-tooltip"  />
      <div className="grid grid-cols-3 md:gap-11 gap-4 p-4 max-w-screen-md mx-auto">
        {imageNames.map((imageName, index) => (
          <img
          key={index}
          src={`${imagePath}${imageName}`}
          alt={`Image ${index + 1}`}
          className="w-full h-auto rounded-lg object-cover hover:scale-105 transition-all"
        />
        ))}
      </div>
    </div>
  );
};

export default Works;
