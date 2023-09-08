import React from 'react';

const Toggle = () => {
  return (
    <>
    
    

    <div className="flex w-full mb-12">
      {/* Toggle B */}
      <label htmlFor="toggleB" className="flex items-center cursor-pointer">
        {/* toggle */}
        <div className="relative">
          {/* input */}
          <input type="checkbox" id="toggleB" className="sr-only" />
          {/* line */}
          <div className="block bg-[#7d74ea] w-12 h-[22px] rounded-full"></div>
          {/* dot */}
          <div className="dot absolute left-[28px] top-1 bg-white w-[14px] h-[14px] rounded-full transition"></div>
        </div>
     
       
      </label>
    </div>

    
    </>
  );
};

export default Toggle;
