import React from 'react';

const Loading = () => {
  return (
    <div className='flex justify-center items-center h-[calc(100vh-68px)]'>
      <progress className="progress bg-white w-56"></progress>
    </div>
  );
};

export default Loading;