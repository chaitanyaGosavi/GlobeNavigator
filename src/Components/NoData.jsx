import React from 'react'

const NoData = ({type}) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <svg
        className="w-16 h-16 mb-4 text-gray-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 13h6m2 0a2 2 0 100-4H7a2 2 0 100 4h10z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 8V6a2 2 0 012-2h10a2 2 0 012 2v2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 16v2a2 2 0 002 2h10a2 2 0 002-2v-2" />
      </svg>
      <p className="text-lg font-medium">No data available</p>
      <p className="text-sm mt-1 text-center">Try Clicking on a city in the map to add {type}.</p>
    </div>
  );
}

export default NoData
