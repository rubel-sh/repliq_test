import React from "react";
import Container from "../../sharedComponents/basicComponents/Container";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Title from "../../sharedComponents/basicComponents/Title";
import { RiMenu3Line } from "react-icons/ri";
import { useState } from "react";

const UnlimitedProducts = () => {
  // get CUSTOMER LISTS from server
  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => axios(`${import.meta.env.VITE_API}/api/products`),
  });

  // Loading while fetching data from server
  if (isLoading) {
    return <div>Loading Data</div>;
  }

  return (
    <Container>
      <Title>Products</Title>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-5">
        {products.data.map((info) => (
          <PaymentCard key={info._id} info={info} />
        ))}
      </div>
    </Container>
  );
};

const PaymentCard = ({ info }) => {
  // States
  const [isStock, setIsStock] = useState(true);
  const { name, price, units, product_image } = info;

  return (
    <div className=" bg-white p-2 rounded-md flex items-center hover:shadow hover:bg-slate-50 transition-all">
      <div className="flex justify-between w-full ">
        <div className="flex">
          {/* Product Image */}
          <img
            src={product_image}
            className="w-[110px] mr-4 rounded-md"
            alt={name}
          />
          {/* Name, units, price ... */}
          <div className="flex flex-col justify-between">
            <p className="text-lg text-slate-600 font-medium">{name}</p>
            <small className="text-lg text-slate-400">{units} Units</small>
            <p className="text-lg text-slate-600 font-bold">{price} tk</p>
            <small
              className={`${
                isStock ? "text-green-500" : "text-red-500"
              } font-bold`}
            >
              In stock
            </small>
          </div>
        </div>
        {/* menu, instock toggle */}
        <div className="flex flex-col justify-between">
          {/* expand Menu */}
          <RiMenu3Line className="self-end text-4xl cursor-pointer hover:bg-slate-300 active:bg-slate-400 p-2 rounded-md active:scale-90" />
          {/* toggle */}
          <label className="inline-flex relative items-center cursor-pointer self-end">
            <input
              type="checkbox"
              defaultChecked={isStock}
              onChange={() => setIsStock(!isStock)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default UnlimitedProducts;
