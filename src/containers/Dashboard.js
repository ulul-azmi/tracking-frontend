/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from 'react';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';
import Image from '../assets/default_avatar_thumb.png';
import Struk from '../assets/struk.png';
import ModalExpense from '../components/ModalExpense';
import ModalCharity from '../components/ModalCharity';

export default class Dashboard extends Component {
  render() {
    return (
      <div className="flex">
        {/* Modal detail sumbangan */}
        {/* <ModalCharity /> */}
        {/* Modal Detail Pengeluaran */}
        <ModalExpense />
        <div className="w-1/5 bg-white">
          <Sidebar />
        </div>
        <div className="flex-1 py-8 px-10 center">
          <div className="flex mb-5">
            <div className="w-1/3 mr-10">
              <Card theme="green" title="Total Pemasukan" amount={9000000} />
            </div>
            <div className="w-1/3 mr-10">
              <Card theme="red" title="Total Pengeluaran" amount={9000000} />
            </div>
            <div className="w-1/3 mr-10">
              <Card theme="blue" title="Total Sumbangan" amount={1000000} />
            </div>
          </div>

          {/* Sumbangan terbaru */}
          <div className="my-10">
            <span className="text-another-blue-text block font-medium text-lg tracking-wide mb-2">
              Sumbangan Terbaru
            </span>
            <table className="w-full shadow-lg rounded-lg">
              <thead>
                <tr className="bg-another-blue-background py-5 text-left text-sm uppercase">
                  <th className="text-center">Nama</th>
                  <th>Tanggal</th>
                  <th className="text-center">Status</th>
                  <th>Pembayaran</th>
                  <th className="text-right">Jumlah</th>
                  <th>Penerima</th>
                  <th />
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="text-left flex">
                    <img
                      className="w-12 h-12 rounded-full mr-2 cursor-pointer"
                      src={Image}
                      alt="Avatar of user"
                    />
                    <span className="self-center">Minseo</span>
                  </td>
                  <td className="text-left">May 04, 2019</td>
                  <td className="text-left">
                    <span className="bg-blue-100 p-3 text-blue-300 shadow rounded-wide text-sm font-medium">
                      Diterima
                    </span>
                  </td>
                  <td className="text-left">
                    <span className="bg-blue-100 p-3 text-blue-300 shadow rounded-wide text-sm font-medium">
                      BSM
                    </span>
                  </td>
                  <td className="text-right">IDR 1,000,000</td>
                  <td className="text-left">Kesta</td>
                  <td className="text-center cursor-pointer">Detail</td>
                </tr>

                <tr>
                  <td className="text-left flex">
                    <img
                      className="w-12 h-12 rounded-full mr-2 cursor-pointer"
                      src={Image}
                      alt="Avatar of user"
                    />
                    <span className="self-center">Minseo</span>
                  </td>

                  <td className="text-left">May 04, 2019</td>
                  <td className="text-left">
                    <span className="bg-yellow-100 p-3 text-yellow-300 shadow rounded-wide text-sm font-medium">
                      Pending
                    </span>
                  </td>
                  <td className="text-left">
                    <span className="bg-green-100 p-3 text-green-300 shadow rounded-wide text-sm font-medium">
                      Gopay
                    </span>
                  </td>
                  <td className="text-right">IDR 1,000,000</td>
                  <td className="text-left">-</td>
                  <td className="text-center cursor-pointer">Detail</td>
                </tr>

                <tr>
                  <td className="text-left flex">
                    <img
                      className="w-12 h-12 rounded-full mr-2 cursor-pointer"
                      src={Image}
                      alt="Avatar of user"
                    />
                    <span className="self-center">Anonymous</span>
                  </td>

                  <td className="text-left">May 04, 2019</td>
                  <td className="text-left">
                    <span className="bg-blue-100 p-3 text-blue-300 shadow rounded-wide text-sm font-medium">
                      Diterima
                    </span>
                  </td>
                  <td className="text-left">
                    <span className="bg-blue-100 p-3 text-blue-300 shadow rounded-wide text-sm font-medium">
                      BSM
                    </span>
                  </td>
                  <td className="text-right">IDR 1,000,000</td>
                  <td className="text-left">Kesta</td>
                  <td className="text-center cursor-pointer">Detail</td>
                </tr>

                <tr>
                  <td className="text-left flex">
                    <img
                      className="w-12 h-12 rounded-full mr-2 cursor-pointer"
                      src={Image}
                      alt="Avatar of user"
                    />
                    <span className="self-center">Minseo</span>
                  </td>

                  <td className="text-left">May 04, 2019</td>
                  <td className="text-left">
                    <span className="bg-red-100 p-3 text-red-300 shadow rounded-wide text-sm font-medium">
                      Ditolak
                    </span>
                  </td>
                  <td className="text-left">
                    <span className="bg-blue-100 p-3 text-blue-300 shadow rounded-wide text-sm font-medium">
                      BSM
                    </span>
                  </td>
                  <td className="text-right">IDR 1,000,000</td>
                  <td className="text-left">-</td>
                  <td className="text-center cursor-pointer">Detail</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Pengeluaran Terbaru */}
          <div className="mt-10 ">
            <span className="text-another-blue-text block font-medium text-lg tracking-wide mb-2">
              Pengeluaran Terbaru
            </span>
            <table className="w-full shadow-lg rounded-lg">
              <thead>
                <tr className="bg-another-blue-background py-5 text-left text-sm uppercase">
                  <th className="text-center">Nama</th>
                  <th>Tanggal</th>
                  <th>Untuk</th>
                  <th className="text-right">Jumlah</th>
                  <th>Bukti</th>
                  <th>Dibuat</th>
                  <th />
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="text-left flex">
                    <img
                      className="w-12 h-12 rounded-full mr-2 cursor-pointer"
                      src={Image}
                      alt="Avatar of user"
                    />
                    <span className="self-center">Minseo</span>
                  </td>
                  <td className="text-left">May 04, 2019</td>
                  <td className="text-left">Bayar Konsumsi</td>
                  <td className="text-right">IDR 1,000,000</td>
                  <td className="text-left">
                    <div
                      className="w-12 h-12 rounded-lg border border-another-blue-background cursor-pointer"
                      style={{
                        backgroundImage: `url(${Struk})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    />
                  </td>
                  <td className="text-left">Kesta</td>
                  <td className="text-center cursor-pointer">Detail</td>
                </tr>
                <tr>
                  <td className="text-left flex">
                    <img
                      className="w-12 h-12 rounded-full mr-2 cursor-pointer"
                      src={Image}
                      alt="Avatar of user"
                    />
                    <span className="self-center">Minseo</span>
                  </td>
                  <td className="text-left">May 04, 2019</td>
                  <td className="text-left">Bayar Konsumsi</td>
                  <td className="text-right">IDR 1,000,000</td>
                  <td className="text-left">
                    <div
                      className="w-12 h-12 rounded-lg border border-another-blue-background cursor-pointer"
                      style={{
                        backgroundImage: `url(${Struk})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    />
                  </td>
                  <td className="text-left">Kesta</td>
                  <td className="text-center cursor-pointer">Detail</td>
                </tr>
                <tr>
                  <td className="text-left flex">
                    <img
                      className="w-12 h-12 rounded-full mr-2 cursor-pointer"
                      src={Image}
                      alt="Avatar of user"
                    />
                    <span className="self-center">Minseo</span>
                  </td>
                  <td className="text-left">May 04, 2019</td>
                  <td className="text-left">Bayar Konsumsi</td>
                  <td className="text-right">IDR 1,000,000</td>
                  <td className="text-left">
                    <div
                      className="w-12 h-12 rounded-lg border border-another-blue-background cursor-pointer"
                      style={{
                        backgroundImage: `url(${Struk})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    />
                  </td>
                  <td className="text-left">Kesta</td>
                  <td className="text-center cursor-pointer">Detail</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
