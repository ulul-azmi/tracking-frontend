import React from 'react';

export default function Sidebar() {
  return (
    <div className="bg-white py-5 min-h-screen flex flex-col items-center">
      <div className="banner w-32 h-32 rounded-full mb-10 b" />

      <span className="font-normal tracking-wide text-xl text-blue-gray-primary block mb-8">
        Berbagi Bahagia III
      </span>

      <div className="w-full self-center">
        <span className="font-normal tracking-wider text-center py-2 hover:bg-blue-gray-background block  text-xl text-blue-gray-secondary cursor-pointer block mb-2 bg-blue-gray-background">
          Dashboard
        </span>

        <span className="font-normal tracking-wider text-center py-2 hover:bg-blue-gray-background block  text-xl text-blue-gray-secondary cursor-pointer block mb-2">
          Pemasukan
        </span>

        <span className="font-normal tracking-wider text-center py-2 hover:bg-blue-gray-background block  text-xl text-blue-gray-secondary cursor-pointer block mb-2">
          Pengeluaran
        </span>

        <span className="font-normal tracking-wider text-center py-2 hover:bg-blue-gray-background block  text-xl text-blue-gray-secondary cursor-pointer block mb-2">
          User
        </span>
      </div>
    </div>
  );
}
