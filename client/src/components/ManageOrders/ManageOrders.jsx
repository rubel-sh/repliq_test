import React from "react";
import Container from "../../sharedComponents/basicComponents/Container";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Title from "../../sharedComponents/basicComponents/Title";

const ManageOrders = () => {
  // get CUSTOMER LISTS from server
  const { data: orders, isLoading } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => axios(`${import.meta.env.VITE_API}/api/orders`),
  });

  // Loading status while fetching data
  if (isLoading) {
    return <div>Loading Data</div>;
  }
  return (
    <Container>
      <Title>Manage Orders</Title>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-5">
        {orders.data.map((info) => (
          <OrderCard key={info._id} info={info} />
        ))}
      </div>
    </Container>
  );
};

const OrderCard = ({ info }) => {
  const {
    order_id,
    item,
    shipping_status,
    payment_status,
    price,
    order_placed_time,
    image,
  } = info;
  return (
    <div className="bg-white p-2 md:p-5 rounded-md flex flex-col gap-2 items-center hover:shadow hover:bg-slate-50 transition-all">
      {/* OrderID + Time */}
      <div className="flex justify-between w-full">
        <h2 className="font-bold text-slate-700">
          Order #{order_id}{" "}
          <span className="text-white bg-emerald-600 px-1 rounded-md text-sm font-thin">
            NEW
          </span>
        </h2>
        <p className="text-slate-400 text-sm">Today, {order_placed_time}</p>
      </div>
      {/* Product Image + Paid_Status */}
      <div className="flex justify-between items-center w-full">
        <div className="flex h-full">
          <img src={image} className="max-w-[60px] rounded-md" alt="" />
          <div className="flex flex-col justify-around h-full ml-2 ">
            <p className="text-slate-600 font-medium">{item} ITEMS</p>
            <p className="text-sm text-blue-500 font-medium">{price} /=</p>
          </div>
        </div>
        <p
          className={`${
            payment_status === "PAID"
              ? "text-[#dd1a1a] bg-[#fc674d]"
              : "text-[#e0740f] bg-[#fab274]"
          } rounded-md h-6 px-2 font-medium`}
        >
          {payment_status}
        </p>
      </div>
      <hr />
      {/* Pending + Detail Btn */}
      <div className="flex justify-between items-center w-full">
        <h2 className="font-bold text-slate-400 uppercase flex items-center">
          <span
            className={`
            ${
              shipping_status === "accepted"
                ? "bg-green-400"
                : shipping_status === "pending"
                ? "bg-orange-400"
                : "bg-blue-400"
            } w-[8px] h-[8px] inline-block rounded-full mr-2
          `}
          ></span>
          {shipping_status}
        </h2>
        <button className="border rounded-md px-2 py-1 hover:bg-slate-100 text-slate-700">
          Details{" "}
        </button>
      </div>
    </div>
  );
};

export default ManageOrders;
