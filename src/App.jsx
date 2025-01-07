import React, { useState, useEffect, useContext, createContext } from "react";
import "./App.css";
import Model from "./components/Model";
import TableData from "./components/TableData";
import { TailSpin } from "react-loader-spinner";
import Button from "react-bootstrap/Button";
import { v4 as uuidv4 } from "uuid"; // Import uuid

// Create the ShowContext with default values (false for show state)
const ShowContext = createContext();

// ShowProvider will provide the context value to its children
const ShowProvider = ({ children }) => {
  const [show, setShow] = useState(false);

  // Function to show the modal
  const handleShow = () => setShow(true);

  // Function to hide the modal
  const handleClose = () => setShow(false);

  return (
    <ShowContext.Provider value={{ show, handleShow, handleClose }}>
      {children}
    </ShowContext.Provider>
  );
};

// Custom hook to consume the context value
export const useShow = () => {
  return useContext(ShowContext);
};

function App() {
  const storedName = JSON.parse(localStorage.getItem("users")) || [];
  const [users, setUsers] = useState(storedName);
  const [isLoading, setIsLoading] = useState(true);
  const [file, setFile] = useState();
  const [userToEdit, setUserToEdit] = useState(null); // Track the user being edited

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const addUser = (newUser) => {
    const newUserWithId = { ...newUser, id: uuidv4() }; // Add UUID to the user
    setUsers([...users, newUserWithId]); // Add the user with UUID
  };

  const editUser = (user) => {
    setUserToEdit(user);
  };

  const updateUser = (updatedUser) => {
    setUsers(
      users.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  // import export
  function downloadCSV(csv, filename) {
    var csvFile;
    var downloadLink;

    // CSV file
    csvFile = new Blob([csv], { type: "text/csv" });

    // Download link
    downloadLink = document.createElement("a");
    console.log("🚀 ~ downloadCSV ~ downloadLink:", downloadLink);

    // File name
    downloadLink.download = filename;

    // Create a link to the file
    downloadLink.href = window.URL.createObjectURL(csvFile);

    // Hide download link
    downloadLink.style.display = "none";

    // Add the link to DOM
    document.body.appendChild(downloadLink);

    // Click download link
    downloadLink.click();
  }

  function exportTableToCSV(filename) {
    var csv = [];
    let headers = Object.keys(users[0]);

    csv.push(headers.join(",")); // Add headers to CSV

    users.forEach((row) => {
      var rowData = [];

      headers.forEach((header) => {
        var cellValue = row[header];
        if (typeof cellValue === "boolean") {
          rowData.push(cellValue ? "true" : "false");
        } else {
          rowData.push('"' + cellValue + '"');
        }
      });

      csv.push(rowData.join(","));
    });
    // Download CSV file
    downloadCSV(csv.join("\n"), filename);
  }
  const handleOnFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
    importCSV(file);
  };

  const importCSV = (file) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      const csvData = event.target.result;
      const parsedData = parseCSV(csvData);
    };

    reader.readAsText(file);
  };

  const parseCSV = (csvData) => {
    const rows = csvData.split("\n");
    const headers = rows[0].split(",");

    const parsedData = [];

    for (let i = 1; i < rows.length; i++) {
      const rowData = rows[i].split(",");
      const dataObject = {};
      for (let j = 0; j < headers.length; j++) {
        const header = headers[j];
        let value = rowData[j];

        value = value.replace(/^"(.*)"$/, "$1");

        if (header === "status") {
          dataObject[header] = value === "true"; // Convert 'true' to boolean true
        } else {
          dataObject[header] = value; // Keep other values as strings
        }
      }
      parsedData.push(dataObject);
    }

    console.log("Parsed Data", parsedData);

    const importUpdatedUser = [...users, ...parsedData];
    setUsers(importUpdatedUser);
    localStorage.setItem("users", JSON.stringify(importUpdatedUser));
    // dispatch(ImportData(parsedData));

    return parsedData;
  };

  return (
    <ShowProvider>
      {isLoading ? (
        <div className="loader-container">
          <TailSpin height="80" width="80" color="#4fa94d" />
        </div>
      ) : (
        <>
          <div className="navbar">
            <h2>MYUSERCRUD</h2>
            {/* <Button variant="success">Import</Button> */}
            <label htmlFor="importBtn" className="import-btn-on">
              <span
                className="btn btn-warning addWithIcon"
                style={{ color: "#450000" }}
              >
                <span>
                  <i className="fa-solid fa-file-import addIcon" />
                </span>
                <span>Import</span>
              </span>
            </label>

            <input
              type="file"
              name="importBtn"
              id="importBtn"
              onChange={handleOnFileChange}
              accept=".csv"
              style={{ display: "none" }}
            />
            <Button
              variant="success"
              onClick={() => exportTableToCSV("table_data.csv")}
            >
              Export
            </Button>

            <Model
              onSubmit={addUser}
              userToEdit={userToEdit}
              onUpdate={updateUser}
            />
          </div>
          <TableData users={users} onDelete={deleteUser} onEdit={editUser} />
        </>
      )}
    </ShowProvider>
  );
}

export default App;
