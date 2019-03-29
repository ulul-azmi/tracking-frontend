/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';

export default class FormIncome extends Component {
  render() {
    return (
      <div className="w-1/2 mx-auto bg-white shadow p-8 flex flex-col items-center rounded-lg my-8">
        <div className="banner w-32 h-32 rounded-full mb-10" />

        <div className="self-start mb-5">
          <span className="font-semibold tracking-wide text-xl text-blue-gray-primary block">
            Login ke dalam aplikasi
          </span>
          <span className="tracking-normal text-blue-gray-secondary leading-relaxed text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{' '}
            <br />
            eiusmod ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          </span>
        </div>
        <form action="" className="w-full">
          <div className="self-start flex justify-between w-full mb-4">
            <div className="flex flex-col w-full pr-5">
              <label htmlFor="name" className="text-blue-gray-primary mb-2">
                Email
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="mail@mail.com"
                className="appearance-none bg-blue-gray-background  py-3 px-2 rounded focus:outline-none focus:bg-white border border-blue-gray-background focus:border-blue-gray-background"
              />
            </div>
          </div>

          <div className="self-start flex justify-between w-full mb-4">
            <div className="flex flex-col w-full pr-5">
              <label htmlFor="name" className="text-blue-gray-primary mb-2">
                Password
              </label>
              <input
                type="password"
                id="name"
                name="name"
                placeholder="123456"
                className="appearance-none bg-blue-gray-background  py-3 px-2 rounded focus:outline-none focus:bg-white border border-blue-gray-background focus:border-blue-gray-background"
              />
            </div>
          </div>

          <div className="flex flex-col w-full">
            <button
              className="w-full rounded-lg bg-another-blue-primary text-white py-3 px-2 shadow"
              type="button"
            >
              Masuk
            </button>
          </div>
        </form>
      </div>
    );
  }
}
