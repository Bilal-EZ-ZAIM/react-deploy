import React, { useState } from "react";
import products from "../data/produit";
const Paginit = () => {
  const [currentpage, setCurrentpage] = useState(1);
  const TOUR_PRE_PAGE = 6;
  const pages = Math.ceil(products?.length / TOUR_PRE_PAGE);
  const startIndex = (currentpage - 1) * TOUR_PRE_PAGE;
  const lastIndex = TOUR_PRE_PAGE * currentpage;
  console.log("start " + startIndex);
  console.log("end " + lastIndex);

  const data = products.slice(startIndex, lastIndex);
  const generatePages = [];
  for (let index = 0; index < pages; index++) {
    generatePages.push(index + 1);
  }
  return (
    <div className="flex space-x-2">
      <button
        onClick={() => setCurrentpage((pre) => pre - 1)}
        disabled={currentpage === 1}
        className="style-button"
        type="button"
      >
        Previous
      </button>
      {generatePages?.map((item, index) => (
        <button
          key={index}
          onClick={() => setCurrentpage(item)}
          className={`px-4 py-2 border rounded-md text-gray-700 hover:bg-indigo-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
            currentpage === item ? "bg-indigo-500 text-white" : ""
          }`}
          type="button"
        >
          {item}
        </button>
      ))}
      <button
        onClick={() => setCurrentpage((pre) => pre + 1)}
        disabled={currentpage === generatePages.length}
        className="style-button"
        type="button"
      >
        Next
      </button>
    </div>
  );
};

export default Paginit;
