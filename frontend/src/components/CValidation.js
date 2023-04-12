function Validation(values) {
  //for login credential Validation
  let error = {};
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //for email Validation
  const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/; //for password Validation

  //error messages for invalid names
  if (values.name === "") {
    error.name = "Name should not be empty";
  } else {
    error.name = "";
  }

  //error messages for invalid emails
  if (values.email === "") {
    error.email = "Email should not be empty";
  }
  else if(!email_pattern.test(values.email)){
      error.email="Email did not match"
  }
  else {
    error.email = "";
  }

  //error messages for invalid passwords
  if (values.password === "") {
    error.password = "Password should not be empty";
  }
  else if(!password_pattern.test(values.password)){
      error.password = "Password did not match"
  }
  else {
    error.password = "";
  }

  //return error message
  return error;
}

export default Validation;
