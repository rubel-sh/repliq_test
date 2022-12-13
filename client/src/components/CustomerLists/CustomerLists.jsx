import React from "react";
import Container from "../../sharedComponents/basicComponents/Container";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Title from "../../sharedComponents/basicComponents/Title";

const CustomerLists = () => {
  // get CUSTOMER LISTS from server
  const { data: customers, isLoading } = useQuery({
    queryKey: ["customers"],
    queryFn: async () => axios(`${import.meta.env.VITE_API}/api/customers`),
  });
  // console.log(customers, isLoading);

  if (isLoading) {
    return <div>Loading Data</div>;
  }
  return (
    <Container>
      <Title>Customer List</Title>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-5">
        {customers.data.map((info) => (
          <CustomerCard key={info._id} info={info} />
        ))}
      </div>
    </Container>
  );
};

const CustomerCard = ({ info }) => {
  const { profileImage, orders, name } = info;
  return (
    <div className="bg-white p-2 rounded-md flex items-center hover:shadow hover:bg-slate-50 transition-all">
      <img src={profileImage} className="max-w-[60px] rounded-md" alt="" />
      <div className="flex flex-col justify-around h-full ml-2 ">
        <h2 className="text-lg font-medium">{name}</h2>
        <p className="text-sm text-slate-700">{orders} orders</p>
      </div>
    </div>
  );
};

export default CustomerLists;
