import React from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
const AddCoffe = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const category = form.category.value;
    const taste = form.taste.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = { name, chef, supplier, category, taste, details, photo };
    //console.log(newCoffee);

    //send data to server
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
       // console.log(data);
       if(data.insertedId){
        Swal.fire({
             title: 'Success!',
             text:'New Coffee added into Collection',
             icon: 'success',
             cancelButtonText: 'Cool'
        })
       }
      });

    form.name.value = "";
    form.chef.value = "";
    form.supplier.value = "";
    form.category.value = "";
    form.taste.value = "";
    form.details.value = "";
    form.photo.value = "";
  };

  return (
    <div>
      <Link to="/">
        <button className="btn btn-dash btn-info mx-1 my-0.5">
          Back to Home
        </button>
      </Link>
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-gray-100 p-8 rounded-lg shadow-lg w-[1000px]">
          <h1 className="font-semibold text-center text-3xl mb-6">
            Add New Coffee
          </h1>
          <p className="px-6 py-4">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>

          <form onSubmit={handleAddCoffee}>
            <div className="grid grid-cols-4 gap-4">
              <label className="input w-full col-span-2">
                <input
                  type="text"
                  name="name"
                  className="w-full p-2  rounded-md"
                  placeholder="Coffee Name"
                />
              </label>
              <label className="input w-full col-span-2">
                <input
                  type="text"
                  name="chef"
                  className="w-full p-2  rounded-md"
                  placeholder="Chef"
                />
              </label>
              <label className="input w-full col-span-2">
                <input
                  type="text"
                  name="supplier"
                  className="w-full p-2  rounded-md"
                  placeholder="Supplier"
                />
              </label>
              <label className="input w-full col-span-2">
                <input
                  type="text"
                  name="taste"
                  className="w-full p-2  rounded-md"
                  placeholder="Taste"
                />
              </label>
              <label className="input w-full col-span-2">
                <input
                  type="text"
                  name="category"
                  className="w-full p-2  rounded-md"
                  placeholder="Category"
                />
              </label>
              <label className="input w-full col-span-2">
                <input
                  type="text"
                  name="details"
                  className="w-full p-2  rounded-md"
                  placeholder="Details"
                />
              </label>

              <label className="input w-full col-span-4">
                <input
                  type="text"
                  name="photo"
                  className="w-full p-2  rounded-md"
                  placeholder="Photo URL"
                />
              </label>

              {/* Full-width submit button spanning 3 columns */}
              <input
                type="submit"
                value="Add Coffee"
                className="btn btn-success col-span-4 w-full mt-4"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCoffe;
