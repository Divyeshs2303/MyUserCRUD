# CRUD Application with React, Bootstrap, and Context API

This is a CRUD (Create, Read, Update, Delete) web application built using HTML, CSS, React, Bootstrap, and the Context API. The application allows users to register, manage, and display user data in a tabular format. Additional features include CSV file export and import functionality.

## Features

1. **User Registration**
   - Users can register by clicking the "New User" button.
   - A modal form is displayed for the user to enter their details.

2. **Data Display in Table Format**
   - Registered users are displayed in a table format.
   - The table contains columns for Name, Email, Password, Phone Number, Gender, City, State, Pincode, and Actions.

3. **Edit and Delete User**
   - Users can edit their details by clicking the "Edit" button in the Actions column.
   - Users can delete a row by clicking the "Delete" button.

4. **CSV File Export and Import**
   - The user data can be exported to a CSV file.
   - CSV files can be imported to add bulk user data.

5. **Responsive Design**
   - The application is fully responsive and adapts to different screen sizes.

## Technologies Used

- **React.js**: Front-end library for building user interfaces.
- **Bootstrap**: CSS framework for styling and responsive design.
- **Context API**: For managing state across the application.
- **HTML & CSS**: For structuring and styling the application.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```

2. Navigate to the project directory:
   ```bash
   cd your-repo-name
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

## Usage

1. Click the "New User" button to open the registration modal.
2. Fill in the user details and click "Add User" to save the data.
3. View the added user in the table.
4. Use the "Edit" button to modify user details or the "Delete" button to remove the user.
5. Export the user data to a CSV file using the "Export" button.
6. Import a CSV file using the "Import" button to add bulk users.

## Folder Structure

```
project-root
|-- public
|-- src
    |-- components
        |-- UserTable.js
        |-- UserFormModal.js
        |-- ImportExportButtons.js
    |-- context
        |-- UserContext.js
    |-- styles
        |-- App.css
    |-- App.js
    |-- index.js
```

## Screenshots

### User Registration Modal
![User Registration Modal](./path-to-img_1.png)

### User Data Table
![User Data Table](./path-to-img_2.png)

## Dependencies

- React
- React Bootstrap
- FileSaver.js (for exporting CSV files)

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

**Author**: Divesh Solanki
