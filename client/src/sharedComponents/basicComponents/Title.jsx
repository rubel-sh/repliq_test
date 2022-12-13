import React from "react";

export const Title = ({ children }) => {
  return (
    <h1 className="text-2xl md:text-2xl lg:text-4xl text-slate-700 font-bold my-5">
      {children}
    </h1>
  );
};

export default Title;
