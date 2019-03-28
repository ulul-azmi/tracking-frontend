import React, { Component } from 'react';
import ThankyouSvg from '../assets/thankyou.svg';

export default class Thankyou extends Component {
  render() {
    return (
      <div className="w-1/2 mx-auto bg-white shadow p-8 flex flex-col items-center rounded-lg my-8">
        <div className="banner w-32 h-32 rounded-full mb-10" />

        <span className="block font-semibold text-2xl tracking-wide text-blue-gray-primary mb-5">
          Terima kasih bosqu
        </span>

        <div className="mb-5">
          <img src={ThankyouSvg} className="block h-64" alt="Thank You SVG" />
        </div>

        <span className="block font-normal leading-relaxed text-blue-gray-secondary px-10 py-5 text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut culpa
          qui officia deserunt mollit anim id est laborum.
        </span>

        <div className="flex flex-col w-full px-10">
          <button
            className="w-full rounded-lg bg-another-blue-primary text-white py-3 px-2 shadow"
            type="button"
          >
            Kembali ke halaman utama
          </button>
        </div>
      </div>
    );
  }
}
