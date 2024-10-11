import React from "react";
import products from "../data/produit";

const Home = () => {
  console.log(products);

  return (
    <div className="w-full bg-slate-600 text-white flex flex-col items-center p-4">
      <h1 className="text-3xl mb-4">Product List</h1>

      <img
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        className="w-full h-auto"
        alt=""
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-screen-lg">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white text-black p-4 rounded-lg shadow-lg flex flex-col"
          >
            <div className="w-full h-48 mb-2">
              <img
                className="object-cover h-full w-full rounded-t-lg"
                src={item.image}
                alt={item.name}
              />
            </div>
            <div className="flex flex-col flex-grow p-2">
              <h4 className="text-xl font-semibold mb-2">{item.name}</h4>
              <p className="mb-4">{item.description}</p>
              <span className="text-lg font-bold">
                ${item.price.toFixed(2)}
              </span>
              <a
                href="#"
                className="mt-auto bg-blue-500 text-white py-2 px-4 rounded-lg text-center hover:bg-blue-600"
              >
                View Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
