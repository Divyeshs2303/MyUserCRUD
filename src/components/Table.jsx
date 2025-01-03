// Table.jsx
import React, { useState } from "react";
const Table = ({ users, onEdit, onDelete }) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email Id</th>
            <th scope="col">Password</th>
            <th scope="col">Con Password</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Gender</th>
            <th scope="col">City</th>
            <th scope="col">State</th>
            <th scope="col">Pincode</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>{user.confirmPassword}</td>
              <td>{user.phoneNumber}</td>
              <td>{user.gender}</td>
              <td>{user.city}</td>
              <td>{user.state}</td>
              <td>{user.pincode}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-primary"
                  //   onClick={() => onEdit(index)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="btn btn-danger ms-2"
                  onClick={() => onDelete(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
