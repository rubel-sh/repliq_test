import React from "react";
import useTitle from "../../hooks/useTitle";
import styles from "./Home.module.css";

const Home = () => {
  useTitle("Home");
  return (
    <div className={`${styles.heroSection} flex justify-center items-center`}>
      <div className="md:w-full justify-self-start md:container mx-auto px-4">
        <h1 className="font-extrabold text-5xl md:text-7xl lg:text-8xl text-slate-800">
          Managers Portal
        </h1>
        <p className="mt-4 text-2xl font-bold text-slate-600">
          Please register and login to get access.
        </p>
      </div>
    </div>
  );
};

export default Home;
