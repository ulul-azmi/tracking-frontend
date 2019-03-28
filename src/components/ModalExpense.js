import React from 'react';
import Modal from './Modal';
import Struk from '../assets/struk.png';

export default function ModalExpense() {
  return (
    <Modal>
      <div className="relative flex bg-white w-2/5 h-auto shadow-lg rounded-wide flex-col">
        <div className="absolute top-0 right-0 p-4 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-8 icon-close"
          >
            <path
              className="fill-gray-600"
              fillRule="evenodd"
              d="M15.78 14.36a1 1 0 0 1-1.42 1.42l-2.82-2.83-2.83 2.83a1 1 0 1 1-1.42-1.42l2.83-2.82L7.3 8.7a1 1 0 0 1 1.42-1.42l2.83 2.83 2.82-2.83a1 1 0 0 1 1.42 1.42l-2.83 2.83 2.83 2.82z"
            />
          </svg>
        </div>
        <div className="p-8">
          <span className="text-another-blue-dark block text-lg tracking-wide mb-5">
            Detail Pengeluaran
          </span>

          <div className="self-start flex justify-between w-full mb-4">
            <div className="flex flex-col w-1/2 pr-5">
              <span className="text-another-blue-subtle mb-2 text-sm">
                Nama
              </span>

              <span className="text-another-blue-dark block tracking-wide mb-2 font-medium">
                Bayar konsumsi
              </span>
            </div>

            <div className="flex flex-col w-1/2 pl-5">
              <span className="text-another-blue-subtle mb-2 text-sm">
                Jumlah
              </span>

              <span className="text-another-blue-dark block tracking-wide mb-2 font-medium">
                IDR 20,000,000
              </span>
            </div>
          </div>

          <div className="self-start flex justify-between w-full mb-4">
            <div className="flex flex-col w-1/2 pr-5">
              <span className="text-another-blue-subtle mb-2 text-sm">
                Tanggal
              </span>

              <span className="text-another-blue-dark block tracking-wide mb-2 font-medium">
                May 04, 2019
              </span>
            </div>

            <div className="flex flex-col w-1/2 pl-5">
              <span className="text-another-blue-subtle mb-2 text-sm">
                Dibuat Oleh
              </span>

              <span className="text-another-blue-dark block tracking-wide mb-2 font-medium">
                Kesta
              </span>
            </div>
          </div>

          <div className="self-start flex justify-between w-full mb-4">
            <div className="flex flex-col w-full pr-5">
              <span className="text-another-blue-subtle mb-2 text-sm">
                Deskripsi
              </span>

              <span className="text-another-blue-dark block tracking-wide mb-2 font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </span>
            </div>
          </div>

          <div className="self-start flex justify-between w-full mb-4">
            <div className="flex flex-col w-full">
              <span className="text-another-blue-subtle mb-2 text-sm">
                Bukti Transfer
              </span>

              <div className="flex w-full">
                <div
                  className="w-1/3 h-48 rounded-lg border border-another-blue-background cursor-pointer mr-2"
                  style={{
                    backgroundImage: `url(${Struk})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />

                <div
                  className="w-1/3 h-48 rounded-lg border border-another-blue-background cursor-pointer mx-1"
                  style={{
                    backgroundImage: `url(${Struk})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                <div
                  className="w-1/3 h-48 rounded-lg border border-another-blue-background cursor-pointer ml-2"
                  style={{
                    backgroundImage: `url(${Struk})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end  items-center bg-another-blue-background w-full p-3">
          <div className="bg-blue-100 rounded-lg p-3 cursor-pointer">
            <span className="text-blue-300 block tracking-wide text-lg font-medium">
              Revisi
            </span>
          </div>
        </div>
      </div>
    </Modal>
  );
}
