import React from "react";
import Table from "react-bootstrap/Table";
import { useShow } from "../App";

const TableData = ({ users, onEdit, onDelete }) => {
  const { handleShow } = useShow();

  const handleEdit = (user) => {
    handleShow();
    onEdit(user); // Pass the entire user object to the modal for pre-filling
  };

  return (
    <div className="tableData">
      <Table bordered hover>
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
          {users.length === 0 ? (
            <tr>
              <td colSpan="11" className="text-center text-danger">
                No users found
              </td>
            </tr>
          ) : (
            users.map((user, index) => (
              <tr key={user.id}>
                {" "}
                {/* Use user.id for unique key */}
                <th scope="row">{index + 1}</th>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>{user?.password}</td>
                <td>{user?.confirmPassword}</td>
                <td>{user?.phoneNumber}</td>
                <td>{user?.gender}</td>
                <td>{user?.city}</td>
                <td>{user?.state}</td>
                <td>{user?.pincode}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => handleEdit(user)} // Pass the user to the edit handler
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger ms-2"
                    onClick={() => onDelete(user.id)} // Pass user.id for deleting
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default TableData;
