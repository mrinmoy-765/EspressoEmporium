import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import CoffeCard from "./CoffeCard";


const AllCoffe = () => {
  const coffees = useLoaderData();
  return (
    <div>
      <Link to="/">
        <button className="btn btn-dash btn-info mx-1 my-0.5">
          Back to Home
        </button>
      </Link>
      <h1 className="text-center text-3xl font-semibold  mb-7">
        All Coffee's in our Store: {coffees.length}
      </h1>
      <hr />
      <h1 className="text-center text-2xl font-bold m-2 text-purple-500">
        Our Popular Products
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coffees.map((coffee) => (
          <CoffeCard key={coffee._id} coffee={coffee} />
        ))}
      </div>
    </div>
  );
};

export default AllCoffe;
