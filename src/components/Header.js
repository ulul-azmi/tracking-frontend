import React from 'react';
import Image from '../assets/default_avatar_thumb.png';
import Logo from '../assets/logo.svg';

export default function Header() {
  return (
    <div className="bg-white p-5 flex justify-between border-b">
      <img className="w-32 h-12" src={Logo} alt="Logo" />
      {/* <span className="font-semibold tracking-wider text-gray-900 self-center">
        Ulul Azmi Berbagi
      </span> */}
      {/* Sudah login */}
      {/* <div className="flex items-center">
        <img
          className="w-10 h-10 rounded-full mr-2 cursor-pointer"
          src={Image}
          alt="Avatar of user"
        />
        <span className="font-semibold text-gray-900 tracking-wider">
          Minseo
        </span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-8 h-8 icon-cheveron-down cursor-pointer fill-gray-800"
        >
          <path
            className="fill-white"
            fillRule="evenodd"
            d="M15.3 10.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"
          />
        </svg>
      </div> */}

      {/* Belum Login */}
      <div className="flex items-center">
        <button
          type="button"
          className="text-white py-2 px-4 font-semibold tracking-wide bg-another-blue-primary rounded-lg"
        >
          Daftar
        </button>
      </div>
    </div>
  );
}
