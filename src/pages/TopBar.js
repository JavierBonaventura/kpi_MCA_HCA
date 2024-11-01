// TopBar.js
import React from 'react';

const TopBar = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-20 bg-gradient-to-b from-[#265c4f] to-[#16362e] text-white flex items-center justify-between px-5 text-2xl z-10">
      <img src="https://i.imgur.com/Zolobvu.png" alt="Logo" className="h-14" />
      <img src="https://i.imgur.com/dceYKLW.png" alt="Logo" className="w-[220px] h-auto" />
      <img src="https://i.imgur.com/2FO5LPI.png" alt="Logo" className="w-[10%] h-auto" />
    </div>
  );
};

export default TopBar;
