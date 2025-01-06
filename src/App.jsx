import React, { useState, useEffect } from "react";
import "./App.css";
import Model from "./components/Model";
import TableData from "./components/TableData";
import { TailSpin } from "react-loader-spinner";

function App() {
  const storedName = JSON.parse(localStorage.getItem("users")) || [];
  const [users, setUsers] = useState(storedName);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  const editUser = (index, updatedUser) => {
    const updatedUsers = [...users];
    updatedUsers[index] = updatedUser;
    setUsers(updatedUsers);
  };

  const deleteUser = (index) => {
    setUsers(users.filter((_, i) => i !== index));
  };

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return (
    <>
      {isLoading ? (
        <div className="loader-container">
          <TailSpin height="80" width="80" color="#4fa94d" />
        </div>
      ) : (
        <>
          <div className="navbar">
            <h2>MYUSERCRUD</h2>
            <Model onSubmit={addUser} />
          </div>
          <TableData users={users} onDelete={deleteUser} onEdit={editUser} />
        </>
      )}
    </>
  );
}

export default App;
