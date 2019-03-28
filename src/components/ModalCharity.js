import React from 'react';
import Modal from './Modal';
import Struk from '../assets/struk.png';

export default function ModalCharity() {
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
            Detail Penerimaan Sumbangan
          </span>

          <div className="self-start flex justify-between w-full mb-4">
            <div className="flex flex-col w-1/2 pr-5">
              <span className="text-another-blue-subtle mb-2 text-sm">
                Nama
              </span>

              <span className="text-another-blue-dark block tracking-wide mb-2 font-medium">
                Kosasih binti tan
              </span>
            </div>

            <div className="flex flex-col w-1/2 pl-5">
              <span className="text-another-blue-subtle mb-2 text-sm">
                Email
              </span>

              <span className="text-another-blue-dark block tracking-wide mb-2 font-medium">
                kosasin@bin.ti.tan
              </span>
            </div>
          </div>

          <div className="self-start flex justify-between w-full mb-4">
            <div className="flex flex-col w-1/2 pr-5">
              <span className="text-another-blue-subtle mb-2 text-sm">
                Transfer menuju
              </span>

              <span className="text-another-blue-dark block tracking-wide mb-2 font-medium">
                Bank Syariah Mandiri
              </span>
            </div>

            <div className="flex flex-col w-1/2 pl-5">
              <span className="text-another-blue-subtle mb-2 text-sm">
                Jumlah Transfer
              </span>

              <span className="text-another-blue-dark block tracking-wide mb-2 font-medium">
                IDR 10,000,000
              </span>
            </div>
          </div>

          <div className="self-start flex justify-between w-full mb-4">
            <div className="flex flex-col w-1/2 pr-5">
              <span className="text-another-blue-subtle mb-2 text-sm">
                Bukti Transfer
              </span>

              <div
                className="w-full h-64 rounded-lg border border-another-blue-background cursor-pointer"
                style={{
                  backgroundImage: `url(${Struk})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </div>

            <div className="flex flex-col w-1/2 pl-5">
              <span className="text-another-blue-subtle mb-2 text-sm">
                Tanggal Transfer
              </span>

              <span className="text-another-blue-dark block tracking-wide mb-4 font-medium">
                May 04, 2019
              </span>

              <div className="flex flex-col w-full mt-2">
                <div className="flex items-start mb-3">
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
          </div>
        </div>

        <div className="flex justify-end  items-center bg-another-blue-background w-full p-3">
          <span className="text-red-300 block tracking-wide text-lg font-medium mr-3 cursor-pointer">
            Tolak
          </span>
          <div className="bg-blue-100 rounded-lg p-3 cursor-pointer">
            <span className="text-blue-300 block tracking-wide text-lg font-medium">
              Terima
            </span>
          </div>
        </div>
      </div>
    </Modal>
  );
}
