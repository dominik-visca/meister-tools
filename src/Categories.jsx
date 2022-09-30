import React from "react";

const Categories = ({ filterItems, categories }) => {

  return (
    <div>
      <div className="hidden sm:block">
        <nav className="flex space-x-4" aria-label="Tabs">
          {categories.map((category, index) => (
            <button
              key={index}
              type="button"
              className="px-3 py-2 font-medium text-sm rounded-md text-gray-500 hover:text-gray-700"
              onClick={() => filterItems(category)}
            >
              {category}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Categories;
