import React, { useState, useEffect } from "react";
import "./App.css";
import Model from "./components/Model";
import Table from "./components/Table";
import { TailSpin } from "react-loader-spinner";

function App() {
  const [users, setUsers] = useState([]);
  console.log("🚀 ~ App ~ users:", users);

  const [isLoading, setIsLoading] = useState(true);
  console.log("🚀 ~ App ~ isLoading:", isLoading);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  const deleteUser = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  };

  return (
    <>
      {isLoading ? (
        <div className="loader-container ">
          <TailSpin
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <>
          <div className="navbar">
            <h2>MYUSERCRUD</h2>
            <Model onSubmit={addUser} />
          </div>
          <Table users={users} onDelete={deleteUser} />
        </>
      )}
    </>
  );
}

export default App;
