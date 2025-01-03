# User Management CRUD Web App

A responsive web application for managing user details. The app allows you to create, read, update, and delete (CRUD) user information, all stored in local storage for persistence.

## Features

- **Add New User**: Register a new user using a modal form.
- **Edit User**: Modify existing user details directly from the user list.
- **Delete User**: Remove a user from the list.
- **Local Storage**: User data is saved in the browser's local storage for persistence.
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript (React.js)
- **Icons**: FontAwesome/React Icons
- **Storage**: LocalStorage API

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/user-management-crud.git
   ```
2. Navigate to the project directory:
   ```bash
   cd user-management-crud
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Usage

1. Click the **New User** button to open the registration modal.
2. Fill out the form and click **Submit** to add the user.
3. View all users in the table on the main page.
4. Use the **Edit** button to modify user details.
5. Use the **Delete** button to remove a user.
6. Data will persist in the browser's local storage.

## Folder Structure

```
src/
├── components/
│   ├── ModalForm.jsx    # Registration form modal
│   ├── UserTable.jsx    # User list table
│   └── EditUser.jsx     # Edit functionality
├── App.jsx              # Main app component
├── index.js             # Entry point
└── styles/
    ├── App.css          # Global styles
    └── Responsive.css   # Responsive styles
```

## Responsive Design

- The app is fully responsive, adapting to devices of all sizes, including desktops, tablets, and smartphones.

## Screenshots

![User Management App Screenshot](link-to-screenshot)

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

Feel free to use this template and adapt it for your project. Let me know if you need additional features or details!
