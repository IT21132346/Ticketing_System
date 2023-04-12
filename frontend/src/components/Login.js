import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./CValidation";
import Validation from "./CValidation";
import axios from "axios";

const Login = () => {
  //to validate the login credentials
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  //navigate function
  const navigate = useNavigate();
  //to handle the form submition
  const [errors, setErrors] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(Validation(values));
    if (errors.email === "" && errors.password === "") {
      //check weather these fields are empty
      axios
        .post("http://localhost:8081/login", values)
        .then((res) => {
          console.log(res);
          if (res.data === "Success") {
            navigate("/ticketlist");
          } else {
            alert("No Record Existed");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  //to handle the input values
  const handleInput = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: [e.target.values] }));
  };

  return (
    <div className="d-flex justify-content-center">
      <form onSubmit={handleSubmit}>
        <h1 className="h1">Sign-in</h1>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            <strong>Email: </strong>
          </label>
          <input
            type="email"
            name="email"
            placeholder="enter email"
            onChange={handleInput}
          />
          {errors.email && <span className="text-danger">{errors.email}</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            <strong>Password: </strong>
          </label>
          <input
            type="password"
            name="password"
            placeholder="enter password"
            onChange={handleInput}
          />
          {errors.password && (
            <span className="text-danger">{errors.password}</span>
          )}
        </div>

        <button type="submit" className="btn btn-primary">
          Login
        </button>
        <h6 className="h6">Do you have an account?</h6>
        <Link to="/signup" type="button" className="btn btn-success">
          Create a Account
        </Link>
      </form>
    </div>
  );
};

export default Login;
