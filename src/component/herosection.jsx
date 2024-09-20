import React from 'react';
import MyImage from '../Assets/images.jpeg';

const Herosection = () => {
  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: `images.jpeg(${MyImage})` }}>
      <h1 className="text-white text-center pt-20">Welcome to Our Website</h1>



      <div className='m-4 grid gap-4 sm:grid-cols-12'>
        <div className='min-h-[100px] rounded bg-red-500 shadow-xl sm:col-span-4 col-span-2'></div>
        <div className='min-h-[100px] rounded bg-orange-500 shadow-xl sm:col-span-2 col-span-2'></div>
        <div className='min-h-[100px] rounded bg-green-500 shadow-xl sm:col-span-2'></div>

      </div>
    </div>
  );
};
export default Herosection;
