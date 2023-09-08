import React from 'react';

const RangeSlider = () => {
  return (
    <div className="flex flex-col  mt-3 ">
      <label htmlFor="rangeInput" className="font-medium">Your Ranking</label>
      <input
        type="range"
        id="rangeInput"
        name="rangeInput"
        className="appearance-none w-[260px] h-4 rounded-full bg-gradient-to-r from-purple-400 via-purple-400 to-gray-600 slider-thumb-purple mt-2" 
        min="0"
        max="100"
        step="1"
      />
    </div>
  );
};

export default RangeSlider;
