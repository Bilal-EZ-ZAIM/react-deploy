import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./test.css";
import { useDispatch, useSelector } from "react-redux";
import { getProduit, pagination } from "../store/features/product";
import { custumAxios } from "../axios/custumeAxios";
import axios from "axios";
const Test = () => {
  const { products, generatePage } = useSelector((state) => state.products);

  useEffect(() => {
    async () => {
      const data = await custumAxios("post");
      console.log(data);
    };
  }, []);

  const fetchAllData = async () => {
    try {
      await axios
        .all([
          custumAxios.get("posts"),
          custumAxios.get("comments"),
          custumAxios.get("users"),
        ])
        .then(
          axios.spread((posts, comments, users) => {
            console.log("===================");

            console.log(posts.data, comments.data, users.data);

            console.log("===================");
          })
        );
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  const dispatch = useDispatch();
  console.log(products);
  console.log(generatePage);

  const [currentpage, setCurrentpage] = useState(1);
  const [filterData, setFilterData] = useState(products);
  const TOUR_PRE_PAGE = 6;
  const pages = Math.ceil(filterData?.length / TOUR_PRE_PAGE);
  const startIndex = (currentpage - 1) * TOUR_PRE_PAGE;
  const lastIndex = TOUR_PRE_PAGE * currentpage;

  let data = filterData.slice(startIndex, lastIndex);
  const generatePages = [];
  for (let index = 0; index < pages; index++) {
    generatePages.push(index + 1);
  }

  const category = ["All Category"];

  products.forEach((item) => {
    const data = category.find((cat) => cat === item.category);
    if (!data) {
      category.push(item.category);
    }
  });

  const filterByPrice = (e) => {
    let sorting = [...filterData];
    console.log(e.target.value);

    if (e.target.value === "all") {
      console.log("alll");

      sorting = [...products];
    } else if (e.target.value === "h") {
      sorting = sorting.sort((a, b) => b.price - a.price);
    } else {
      sorting = sorting.sort((a, b) => a.price - b.price);
    }
    setFilterData(sorting);
    setCurrentpage(1);
  };

  const filterByCategory = (e) => {
    dispatch(getProduit(e.target.value));

    if (e.target.value === "All Category") {
      setFilterData(products);
    } else {
      data = products.filter((item) => item.category === e.target.value);
      setFilterData(data);
      setCurrentpage(1);
    }
  };

  return (
    <div className="w-full bg-slate-100 text-black flex flex-col items-center p-4">
      {/* Grid for products */}

      <div className="flex flex-wrap gap-3 justify-around sm:justify-between w-full mb-4 mt-4">
        <select
          name=""
          className="w-40 p-1 sm:py-2 sm:px-4 txet-sm cursor-pointer outline-none"
          id=""
          onChange={filterByPrice}
        >
          <option value="all">All Prices</option>
          <option value="h">Highest Price</option>
          <option value="l">Lowest Price</option>
        </select>
        <select
          name=""
          className="w-40 p-1 sm:py-2 sm:px-4 txet-sm  cursor-pointer outline-none"
          id=""
          onChange={filterByCategory}
        >
          {category.map((item, index) => (
            <option value={item} key={index}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-3 w-full max-w-screen-lg">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white text-black p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out flex flex-col"
            style={{ minHeight: "350px" }}
          >
            <div className="h-48 w-full overflow-hidden rounded-lg">
              <img
                src={item.image}
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-200 ease-in-out"
                alt={item.name}
                loading="lazy"
              />
            </div>
            <div className="flex flex-col justify-between flex-grow py-2">
              <h4 className="text-sm font-semibold mb-1 text-gray-700">
                {item.title}
              </h4>
              <h4 className="text-sm font-semibold mb-1 text-gray-700">
                {item.category}
              </h4>
              <p className="text-[12px] truncate-custom text-gray-600 mb-2">
                {item.description}
              </p>
              <span className="text-lg font-bold text-green-500">
                ${item.price}
              </span>
              <Link
                to={`/product/${item.id}`}
                className="text-white bg-indigo-500 hover:bg-indigo-600 p-2 mt-3 rounded-lg text-center transition-colors duration-200 ease-in-out"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-6 flex justify-center space-x-2">
        <button
          onClick={() => setCurrentpage((pre) => pre - 1)}
          disabled={currentpage === 1}
          className={`px-2 py-1 sm:px-4 sm:py-2 rounded-md ${
            currentpage === 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-indigo-500 text-white hover:bg-indigo-600"
          } transition-colors duration-200 ease-in-out`}
        >
          Previous
        </button>
        {generatePages.map((item) => (
          <button
            key={item}
            onClick={() => {
              setCurrentpage(item), dispatch(pagination(item));
            }}
            className={`px-2 py-1 sm:px-4 sm:py-2 border rounded-md text-gray-700 hover:bg-indigo-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
              currentpage === item ? "bg-indigo-500 text-white" : "bg-white"
            } transition-colors duration-200 ease-in-out`}
          >
            {item}
          </button>
        ))}
        <button
          onClick={() => setCurrentpage((pre) => pre + 1)}
          disabled={currentpage === generatePages.length}
          className={`px-2 py-1 sm:px-4 sm:py-2 rounded-md ${
            currentpage === generatePages.length
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-indigo-500 text-white hover:bg-indigo-600"
          } transition-colors duration-200 ease-in-out`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Test;
