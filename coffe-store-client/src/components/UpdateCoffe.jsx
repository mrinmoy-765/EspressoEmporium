import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, chef, supplier, category, taste, details, photo } = coffee;

  const [updatedCoffee, setUpdatedCoffee] = useState({
    name,
    chef,
    supplier,
    category,
    taste,
    details,
    photo,
  });

  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    setUpdatedCoffee({
      ...updatedCoffee,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Update Response:", data);
        if (data.modifiedCount > 0) {
          alert("Coffee updated successfully!");
          navigate("/allcoffe"); // Redirect after update
        }
      })
      .catch((error) => console.error("Error updating coffee:", error));
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Update Coffee ~ {updatedCoffee.name}</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <label className="block font-semibold text-gray-700">Coffee Name</label>
        <input type="text" name="name" value={updatedCoffee.name} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Enter coffee name" />

        {/* Chef */}
        <label className="block font-semibold text-gray-700">Chef</label>
        <input type="text" name="chef" value={updatedCoffee.chef} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Enter chef name" />

        {/* Supplier */}
        <label className="block font-semibold text-gray-700">Supplier</label>
        <input type="text" name="supplier" value={updatedCoffee.supplier} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Enter supplier" />

        {/* Category */}
        <label className="block font-semibold text-gray-700">Category</label>
        <input type="text" name="category" value={updatedCoffee.category} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Enter category" />

        {/* Taste */}
        <label className="block font-semibold text-gray-700">Taste</label>
        <input type="text" name="taste" value={updatedCoffee.taste} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Describe taste" />

        {/* Photo URL */}
        <label className="block font-semibold text-gray-700">Photo URL</label>
        <input type="text" name="photo" value={updatedCoffee.photo} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Enter photo URL" />

        {/* Details */}
        <label className="block font-semibold text-gray-700">Details</label>
        <textarea name="details" value={updatedCoffee.details} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Enter coffee details"></textarea>

        {/* Submit Button */}
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">
          Update Coffee
        </button>
      </form>
    </div>
  );
};

export default UpdateCoffee;

