import React from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
//import Validation from './CValidation'
import { useState } from "react";
import axios from "axios";

const Signup = () => {
  //to validate the login credentials
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  //after sign-up navigate to the login page
  const navigate = useNavigate();

  //to handle the form submition
  const [errors, setErrors] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    //setErrors(Validation(values))
    if (errors.name === "" && errors.email === "" && errors.password === "") {
      //check weather these fields are empty
      axios
        .post("http://localhost:8081/signup", values)
        .then((res) => {
          console.log(res);
          navigate("/");
        })
        .catch((err) => console.log(err));
    }
  };

  //to handle the input values
  const handleInput = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: [e.target.values] }));
  };

  return (
    <div>
      <div className="d-flex justify-content-center">
        <form action="" onSubmit={handleSubmit}>
          <h1 className="h1">Sign-up</h1>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              <strong>Name: </strong>
            </label>
            <input
              type="name"
              name="name"
              placeholder="enter name"
              onChange={handleInput}
            />
            {errors.name && <span className="text-danger">{errors.name}</span>}
          </div>
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
            {errors.email && (
              <span className="text-danger">{errors.email}</span>
            )}
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
          <div>
            <button type="submit" className="btn btn-primary">
              Sign-up
            </button>
          </div>
          <div>
            <p>if you agree to our terms and conditions</p>
          </div>
          <Link to="/" type="submit" className="btn btn-primary">
            Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
