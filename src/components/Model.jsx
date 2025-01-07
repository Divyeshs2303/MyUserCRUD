import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { v4 as uuidv4 } from "uuid";

const Model = ({ onSubmit, userToEdit, onUpdate }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    gender: "",
    city: "",
    state: "",
    pincode: "",
    checkbox: false,
  });

  const [show, setShow] = useState(false);

  useEffect(() => {
    if (userToEdit) {
      setFormData({ ...userToEdit });
      setShow(true);
    }
  }, [userToEdit]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userToEdit) {
      onUpdate(formData);
    } else {
      const newUser = { id: uuidv4(), ...formData };
      onSubmit(newUser);
    }
    handleClose();
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      phoneNumber: "",
      gender: "",
      city: "",
      state: "",
      pincode: "",
      checkbox: false,
    });
  };

  return (
    <>
      <button type="button" className="buttons" onClick={handleShow}>
        {userToEdit ? "Edit User" : "New User"}
      </button>

      {/* Modal */}
      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        className="text-black"
      >
        <Modal.Header closeButton>
          <Modal.Title>{userToEdit ? "Edit User" : "Add New User"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="forgrid">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                  <span>
                    <i
                      className="fa-solid fa-star-of-life fa-2xs"
                      style={{ color: "#f00505" }}
                    />
                  </span>
                </label>
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                  <span>
                    <i
                      className="fa-solid fa-star-of-life fa-2xs"
                      style={{ color: "#f00505" }}
                    />
                  </span>
                </label>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  aria-describedby="emailHelp"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                  <span>
                    <i
                      className="fa-solid fa-star-of-life fa-2xs"
                      style={{ color: "#f00505" }}
                    />
                  </span>
                </label>
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password
                  <span>
                    <i
                      className="fa-solid fa-star-of-life fa-2xs"
                      style={{ color: "#f00505" }}
                    />
                  </span>
                </label>
                <input
                  name="confirmPassword"
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="phoneNumber" className="form-label">
                Phone Number
                <span>
                  <i
                    className="fa-solid fa-star-of-life fa-2xs"
                    style={{ color: "#f00505" }}
                  />
                </span>
              </label>
              <input
                name="phoneNumber"
                type="tel"
                className="form-control"
                id="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="forgrid">
              <div className="mb-3">
                <label htmlFor="gender" className="form-label">
                  Gender
                  <span>
                    <i
                      className="fa-solid fa-star-of-life fa-2xs"
                      style={{ color: "#f00505" }}
                    />
                  </span>
                </label>
                <select
                  className="form-control"
                  name="gender"
                  id="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="city" className="form-label">
                  City
                  <span>
                    <i
                      className="fa-solid fa-star-of-life fa-2xs"
                      style={{ color: "#f00505" }}
                    />
                  </span>
                </label>
                <input
                  name="city"
                  type="text"
                  className="form-control"
                  id="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="state" className="form-label">
                  State
                  <span>
                    <i
                      className="fa-solid fa-star-of-life fa-2xs"
                      style={{ color: "#f00505" }}
                    />
                  </span>
                </label>
                <input
                  name="state"
                  type="text"
                  className="form-control"
                  id="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="pincode" className="form-label">
                  Pincode
                  <span>
                    <i
                      className="fa-solid fa-star-of-life fa-2xs"
                      style={{ color: "#f00505" }}
                    />
                  </span>
                </label>
                <input
                  name="pincode"
                  type="text"
                  className="form-control"
                  id="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="mb-3 form-check">
              <input
                name="checkbox"
                type="checkbox"
                className="form-check-input"
                id="checkbox"
                checked={formData.checkbox}
                onChange={handleChange}
                required
              />
              <label className="form-check-label" htmlFor="checkbox">
                I agree to the Terms and Conditions
                <span>
                  <i
                    className="fa-solid fa-star-of-life fa-2xs"
                    style={{ color: "#f00505" }}
                  />
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              {userToEdit ? "Update User" : "Add User"}
            </button>
            <button
              type="button"
              className="btn btn-secondary ms-3"
              onClick={handleClose}
            >
              Close
            </button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <div className="text-center me-5 text-body-tertiary">
            &#169; Divesh solanki
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Model;
