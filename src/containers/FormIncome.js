/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';

export default class FormIncome extends Component {
  render() {
    return (
      <div className="w-1/2 mx-auto bg-white shadow p-8 flex flex-col items-center rounded-lg">
        <div className="banner w-32 h-32 rounded-full mb-10" />

        <div className="self-start mb-5">
          <span className="font-semibold tracking-wide text-xl text-blue-gray-primary block">
            Form Penerimaan Sumbangan
          </span>
          <span className="tracking-normal text-blue-gray-secondary leading-relaxed text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{' '}
            <br />
            eiusmod ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          </span>
        </div>
        <form action="" className="w-full">
          <div className="self-start flex justify-between w-full mb-4">
            <div className="flex flex-col w-1/2 pr-5">
              <label htmlFor="name" className="text-blue-gray-primary mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Fulan"
                className="appearance-none bg-blue-gray-background  py-3 px-2 rounded focus:outline-none focus:bg-white border border-blue-gray-background focus:border-blue-gray-background"
              />
            </div>

            <div className="flex flex-col w-1/2 pl-5">
              <label htmlFor="email" className="text-blue-gray-primary mb-2">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="mail@fulan.com"
                className="appearance-none bg-blue-gray-background  py-3 px-2 rounded focus:outline-none focus:bg-white border border-blue-gray-background focus:border-blue-gray-background"
              />
            </div>
          </div>

          <div className="self-start flex justify-between w-full mb-4">
            <div className="flex flex-col w-1/2 pr-5">
              <label
                htmlFor="phoneNumber"
                className="text-blue-gray-primary mb-2"
              >
                Nomor Telephone
              </label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="0812xxxxxx"
                className="appearance-none bg-blue-gray-background  py-3 px-2 rounded focus:outline-none focus:bg-white border border-blue-gray-background focus:border-blue-gray-background"
              />
            </div>

            <div className="flex flex-col w-1/2 pl-5">
              <label
                htmlFor="instagram"
                className="text-blue-gray-primary mb-2"
              >
                Instagram Account
              </label>
              <input
                type="text"
                id="instagram"
                name="instagram"
                placeholder="@fulan"
                className="appearance-none bg-blue-gray-background  py-3 px-2 rounded focus:outline-none focus:bg-white border border-blue-gray-background focus:border-blue-gray-background"
              />
            </div>
          </div>

          <div className="self-start flex justify-between w-full mb-4">
            <div className="flex flex-col w-1/2 pr-5">
              <label htmlFor="transfer" className="text-blue-gray-primary mb-2">
                Transfer Menggunakan
              </label>
              <div className="relative">
                <select
                  name="transfer"
                  id="transfer"
                  className="block appearance-none bg-blue-gray-background py-3 px-2 rounded focus:outline-none focus:bg-white border border-blue-gray-background focus:border-blue-gray-background w-full"
                >
                  <option value="bsm" defaultChecked>
                    Bank Syariah Mandiri
                  </option>
                  <option value="gopay">Gopay</option>
                </select>

                <div className="pointer-events-none absolute inset-y-0 right-0 pin-r flex items-center px-2 text-grey-darker">
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
                </div>
              </div>
            </div>

            <div className="flex flex-col w-1/2 pl-5">
              <label htmlFor="jumlah" className="text-blue-gray-primary mb-2">
                Jumlah Transfer
              </label>
              <input
                type="number"
                id="jumlah"
                name="jumlah"
                placeholder="1000000"
                className="appearance-none bg-blue-gray-background  py-3 px-2 rounded focus:outline-none focus:bg-white border border-blue-gray-background focus:border-blue-gray-background"
              />
            </div>
          </div>

          <div className="self-start flex justify-between w-full mb-4">
            <div className="flex flex-col w-1/2 pr-5">
              <label htmlFor="transfer" className="text-blue-gray-primary mb-2">
                Bukti Transfer
              </label>

              <button
                className="w-full rounded bg-another-blue-primary text-white py-3 px-2 shadow"
                type="button"
              >
                Upload Bukti Transfer
              </button>
            </div>

            <div className="flex flex-col w-1/2 pl-5">
              <label htmlFor="tanggal" className="text-blue-gray-primary mb-2">
                Tanggal Transfer
              </label>
              <input
                type="date"
                id="tanggal"
                name="tanggal"
                placeholder="23-03-2019"
                className="appearance-none bg-blue-gray-background py-3 px-2 rounded focus:outline-none focus:bg-white border border-blue-gray-background focus:border-blue-gray-background"
              />
            </div>
          </div>

          <div className="self-start flex justify-between w-full mb-4">
            <div className="flex flex-col w-1/2 pr-5">
              <span className="tracking-wide text-blue-gray-primary block mb-2">
                Persetujuan Penggunaan Sumbangan
              </span>
              <span className="tracking-normal text-blue-gray-secondary leading-relaxed text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit veniam,
              </span>
            </div>

            <div className="flex flex-col w-1/2 pl-5">
              <div className="flex items-start mb-3">
                {/* <div className="w-6 h-6 rounded border border-another-blue-primary mr-4 cursor-pointer" /> */}
                <div className="w-6 h-6 rounded bg-another-blue-primary mr-4 flex items-center justify-center cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="icon-check w-8 h-8"
                  >
                    <path
                      className="fill-gray-100"
                      d="M10 14.59l6.3-6.3a1 1 0 0 1 1.4 1.42l-7 7a1 1 0 0 1-1.4 0l-3-3a1 1 0 0 1 1.4-1.42l2.3 2.3z"
                    />
                  </svg>
                </div>
                <div className="w-5/6">
                  <span className="text-blue-gray-primary block">
                    Setuju untuk setiap uang digunakan
                  </span>
                  <span className="tracking-normal text-blue-gray-secondary leading-relaxed text-sm">
                    Mau digunain apa aja bebas,
                  </span>
                </div>
              </div>

              <div className="flex items-start mb-3">
                {/* <div className="w-6 h-6 rounded border border-another-blue-primary mr-4 cursor-pointer" /> */}
                <div className="w-6 h-6 rounded bg-another-blue-primary mr-4 flex items-center justify-center cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="icon-check w-8 h-8"
                  >
                    <path
                      className="fill-gray-100"
                      d="M10 14.59l6.3-6.3a1 1 0 0 1 1.4 1.42l-7 7a1 1 0 0 1-1.4 0l-3-3a1 1 0 0 1 1.4-1.42l2.3 2.3z"
                    />
                  </svg>
                </div>
                <div className="w-5/6">
                  <span className="text-blue-gray-primary block">
                    10% untuk sumbangan
                  </span>
                  <span className="tracking-normal text-blue-gray-secondary leading-relaxed text-sm">
                    Mau digunain apa aja bebas,
                  </span>
                </div>
              </div>

              <div className="flex items-start mb-3">
                {/* <div className="w-6 h-6 rounded border border-another-blue-primary mr-4 cursor-pointer" /> */}
                <div className="w-6 h-6 rounded-lg bg-another-blue-primary mr-4 flex items-center justify-center cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="icon-check w-8 h-8"
                  >
                    <path
                      className="fill-gray-100"
                      d="M10 14.59l6.3-6.3a1 1 0 0 1 1.4 1.42l-7 7a1 1 0 0 1-1.4 0l-3-3a1 1 0 0 1 1.4-1.42l2.3 2.3z"
                    />
                  </svg>
                </div>
                <div className="w-5/6">
                  <span className="text-blue-gray-primary block">
                    Buat saya jadi anonymous
                  </span>
                  <span className="tracking-normal text-blue-gray-secondary leading-relaxed text-sm">
                    Mau digunain apa aja bebas,
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full">
            <button
              className="w-full rounded-lg bg-another-blue-primary text-white py-3 px-2 shadow"
              type="button"
            >
              Kirim Form pengiriman sumbangan
            </button>
          </div>
        </form>
      </div>
    );
  }
}
