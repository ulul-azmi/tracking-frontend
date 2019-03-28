/* eslint-disable react/prop-types */
import React from 'react';

export default function Modal({ children }) {
  return (
    <div className="fixed inset-0 bg-smokeLight-100 z-50 flex justify-center items-center">
      {children}
    </div>
  );
}
