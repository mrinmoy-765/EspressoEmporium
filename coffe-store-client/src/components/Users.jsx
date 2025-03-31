import React from "react";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);
  return (
    <div>
      <h2 class="text-2xl font-extrabold text-center">
        Expresso Emporium Users
      </h2>
    
        <h2 className="flex justify-center items-center mt-5">Total Users: {users.length}</h2>
        

        {/* user display Table */}
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Created At</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {
                users.map(user =><tr key={user._id}>
                    <th>{user.name}</th>
                    <td>{user.email}</td>
                    <td>{user.createdAt}</td>
                    <td className="space-x-1.5">
                    <button className="btn btn-outline btn-warning">Edit</button>
                    <button className="btn btn-outline btn-error">Delete</button>
                    </td>
                  </tr>)
              }
            </tbody>
          </table>
        </div>
        </div>
  );
};

export default Users;
