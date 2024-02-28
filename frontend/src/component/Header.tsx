import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto px-4 py-4">
        <a
          href="#"
          className="text-gray-900 font-bold text-xl no-underline hover:no-underline focus:no-underline"
        >
          Medium
        </a>
      </nav>
    </header>
  );
};

export default Header;
