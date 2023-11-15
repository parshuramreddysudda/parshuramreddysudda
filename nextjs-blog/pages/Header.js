// components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full p-4 text-white bg-gray-900">
      <div className="flex items-center">
        <img src="/path-to-your-logo.png" alt="Logo" className="w-8 h-8 mr-2" />
        <h1 className="text-xl font-bold">RAM</h1>
      </div>
    </header>
  );
};

export default Header;
