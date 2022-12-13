import React from "react";
import Container from "../../sharedComponents/basicComponents/Container";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Title from "../../sharedComponents/basicComponents/Title";

const OnlinePayments = () => {
  // get CUSTOMER LISTS from server
  const { data: payments, isLoading } = useQuery({
    queryKey: ["customers"],
    queryFn: async () => axios(`${import.meta.env.VITE_API}/api/payments`),
  });
  // console.log(customers, isLoading);

  if (isLoading) {
    return <div>Loading Data</div>;
  }
  return (
    <Container>
      <Title>Payments</Title>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-5">
        {payments.data.map((info) => (
          <PaymentCard key={info._id} info={info} />
        ))}
      </div>
    </Container>
  );
};

const PaymentCard = ({ info }) => {
  const { order_id, price, order_placed_time, image } = info;
  return (
    <div className="bg-white p-2 rounded-md flex items-center hover:shadow hover:bg-slate-50 transition-all">
      <div className="flex justify-between w-full">
        {/* Image + Order + Time */}
        <div className="flex justify-between">
          <img src={image} className="max-w-[60px] rounded-md" alt="" />
          <div className="flex flex-col justify-around h-full ml-2 ">
            <h2 className="text-lg font-medium">Order #{order_id}</h2>
            <p className="text-sm text-slate-700">
              12/14/2022, {order_placed_time}
            </p>
          </div>
        </div>

        {/* Price + Status */}
        <div className="flex flex-col justify-between">
          <p className="text-blue-600 text-lg font-medium self-end">
            {price} tk
          </p>
          <p className="text-green-800 bg-green-300 rounded-md px-1 font-medium">
            Received
          </p>
        </div>
      </div>
    </div>
  );
};

export default OnlinePayments;
