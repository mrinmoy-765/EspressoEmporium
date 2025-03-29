import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, chef, supplier, category, taste, details, photo } = coffee;

  //handle delete
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Coffee has been deleted.", "success");
  
              // **Update state to remove deleted coffee**
              setCoffees(coffees.filter((c) => c._id !== _id));
            }
          });
      }
    });
  };
  
  // State to handle modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Coffee Card */}
      <div className="flex items-center bg-white shadow-lg rounded-lg p-4 w-full max-w-lg mx-auto hover:shadow-xl transition-shadow duration-300 gap-4">
        {/* Image Section */}
        <div className="w-1/4">
          <img
            src={photo}
            alt={name}
            className="rounded-lg w-full h-32 object-cover"
          />
        </div>

        {/* Coffee Details Section */}
        <div className="w-2/4">
          <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
          <p className="text-gray-600 text-sm">
            <span className="font-medium">Chef:</span> {chef}
          </p>
          <p className="text-gray-600 text-sm">
            <span className="font-medium">Category:</span> {category}
          </p>
        </div>

        {/* Button Section (Aligned Beside Details) */}
        <div className="flex flex-col items-center space-y-2 w-1/4">
          {/* Edit Button */}
          <Link to = {`/updateCoffee/${_id}`}>
          <button className="p-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition duration-300">
            <FaEdit size={18} />
          </button>
          </Link>

          {/* Delete Button */}
          <button onClick={() => handleDelete(_id)} className="p-2 bg-red-500 text-white rounded-full shadow-md hover:bg-red-600 transition duration-300">
            <RiDeleteBin6Fill size={18} />
          </button>

          {/* View Details Button */}
          <button
            className="bg-amber-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-amber-600 transition duration-300"
            onClick={() => setIsModalOpen(true)} // Open modal on click
          >
            Details
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-xl"
              onClick={() => setIsModalOpen(false)} // Close modal on click
            >
              &times;
            </button>

            {/* Modal Content */}
            <img
              src={photo}
              alt={name}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
            <p className="text-gray-600">
              <span className="font-medium">Chef:</span> {chef}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Supplier:</span> {supplier}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Category:</span> {category}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Taste:</span> {taste}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Details:</span> {details}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default CoffeeCard;