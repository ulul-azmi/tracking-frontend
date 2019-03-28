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
            Form Pengeluaran
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
                Nama Kebutuhan
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Konsumsi"
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
                Jumlah Pengeluaran
              </label>
              <input
                type="number"
                id="jumlah"
                name="jumlah"
                placeholder="1000000"
                className="appearance-none bg-blue-gray-background  py-3 px-2 rounded focus:outline-none focus:bg-white border border-blue-gray-background focus:border-blue-gray-background"
              />
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
            <div className="flex flex-col w-full pr-5">
              <label htmlFor="transfer" className="text-blue-gray-primary mb-2">
                Deskripsi
              </label>

              <textarea className="appearance-none bg-blue-gray-background  py-3 px-2 rounded focus:outline-none focus:bg-white border border-blue-gray-background focus:border-blue-gray-background" />
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
