import React from "react";

const Sidebar: React.FC = () => {
  return (
    <aside className="bg-gray-900 text-white p-4 mt-20">
      <h2 className="mb-4 text-xl font-semibold uppercase tracking-wide">
        Categories
      </h2>
      <ul className="space-y-2">
        <li>
          <a href="#" className="hover:text-blue-500">
            Technology
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-500">
            Business
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-500">
            Health
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
