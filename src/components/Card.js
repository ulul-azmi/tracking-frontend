/* eslint-disable react/prop-types */
import React from 'react';

export default function Card({ theme, title, amount }) {
  return (
    <div className="bg-white rounded-lg shadow-lg flex flex-col">
      <div className="px-4 flex flex-col py-3">
        <span className={`text-${theme}-200  block  mb-1`}>{title}</span>
        <span className={`text-${theme}-300 block text-2xl font-medium mb-2`}>
          IDR {amount.toLocaleString()}
        </span>
      </div>
      <div className={`block text-center bg-${theme}-100 rounded-b-lg p-2`}>
        <span className={`text-center text-${theme}-300 cursor-pointer`}>
          View Detail
        </span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="icon-cheveron-right-circle w-8 h-8 inline-block cursor-pointer "
        >
          <path
            className={`fill-${theme}-200`}
            d="M10.3 8.7a1 1 0 0 1 1.4-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.4-1.4l3.29-3.3-3.3-3.3z"
          />
        </svg>
      </div>
    </div>
  );
}
