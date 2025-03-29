import React from "react";
import { Link } from "react-router-dom";

const AddCoffe = () => {
  return (
    <div>
     <Link to="/">
     <button className="btn btn-dash btn-info mx-1 my-0.5">Back to Home</button>
     </Link>
      <div className="flex items-center justify-center min-h-screen">
             
      <div className="bg-gray-100 p-8 rounded-lg shadow-lg w-[1000px]">
        <h1 className="font-semibold text-center text-3xl mb-6">
          Add New Coffee
        </h1>
        <p className="px-6 py-4">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>

        <div className="grid grid-cols-4 gap-4">
          <label className="input w-full col-span-2">
            <input
              type="text"
              className="w-full p-2  rounded-md"
              placeholder="Coffee Name"
            />
          </label>
          <label className="input w-full col-span-2">
            <input
              type="text"
              className="w-full p-2  rounded-md"
              placeholder="Chef"
            />
          </label>
          <label className="input w-full col-span-2">
            <input
              type="text"
              className="w-full p-2  rounded-md"
              placeholder="Supplier"
            />
          </label>
          <label className="input w-full col-span-2">
            <input
              type="text"
              className="w-full p-2  rounded-md"
              placeholder="Taste"
            />
          </label>
          <label className="input w-full col-span-2">
            <input
              type="text"
              className="w-full p-2  rounded-md"
              placeholder="Category"
            />
          </label>
          <label className="input w-full col-span-2">
            <input
              type="text"
              className="w-full p-2  rounded-md"
              placeholder="Details"
            />
          </label>

          {/* Full-width submit button spanning 3 columns */}
          <button className="btn btn-success col-span-4 w-full mt-4">
            Submit
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AddCoffe;
