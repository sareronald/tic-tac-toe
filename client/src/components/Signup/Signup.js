import React, { useState } from "react";
import { signupUser } from "../../utils/userFunctions";
import { useHistory } from "react-router-dom";
// import { Navbar } from "../Navbar/Navbar";

function Signup(props) {
  const history = useHistory();

  const [signupState, setSignupState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    userType: "",
    errors: {},
    formIsValid: true,
  });

  const handleValidation = () => {
    // const [errors, formIsValid] = checkFormFields(signupState);
    // setSignupState({ ...signupState, errors, formIsValid });
  };

  const onChange = (event) => {
    setSignupState({
      ...signupState,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    console.log(signupState);
    // let errors = {};
    handleValidation();
    event.preventDefault();
    const userData = {
      firstName: signupState.firstName,
      lastName: signupState.lastName,
      email: signupState.email,
      password: signupState.password,
      userType: signupState.userType,
    };
    if (signupState.formIsValid) {
      signupUser(userData).then((res) => {
        history.push("/login");
      });
      // getUsers().then((data) => {
      // console.log(data);
      // var alreadyRegisteredUser = data.find(
      //   (element) => element.email === signupState.email
      // );
      // if (!alreadyRegisteredUser) {
      // signupUser(userData).then((res) => {
      //   history.push("/login");
      // });
      // console.log("Form submitted");
      // } else {
      //   errors["email"] = "Email already exists";
      //   setSignupState({ ...signupState, errors });
      // }
      // });
    } else {
      console.log("Form has errors.");
    }
  };

  return (
    <div
      style={{
        margin: "auto",
        width: "50%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "60px",
      }}
    >
      <div
        className="signupDiv"
        style={{
          backgroundColor: "#3997FC",
          borderRadius: "4px",
          border: "1px solid rgb(0,0,0,0.1)",
        }}
      >
        <form
          noValidate
          onSubmit={onSubmit}
          style={{
            padding: "20px",
          }}
        >
          <h1
            className="mb-3 h2 font-weight normal"
            style={{ color: "#ffffff", textAlign: "center" }}
          >
            Please Sign up
          </h1>
          <div className="form-group">
            <label htmlFor="first_name">First Name</label>
            <input
              type="text"
              refs="firstName"
              className="form-control"
              name="firstName"
              placeholder="Enter First Name"
              value={signupState.firstName}
              onChange={onChange}
            />
            <span style={{ color: "red" }}>
              {signupState.errors["firstName"]}
            </span>
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              refs="lastName"
              className="form-control"
              name="lastName"
              placeholder="Enter Last Name"
              value={signupState.lastName}
              onChange={onChange}
            />
            <span style={{ color: "red" }}>
              {signupState.errors["lastName"]}
            </span>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              refs="email"
              className="form-control"
              name="email"
              placeholder="Enter Email"
              value={signupState.email}
              onChange={onChange}
            />
            <span style={{ color: "red" }}>{signupState.errors["email"]}</span>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              refs="password"
              className="form-control"
              name="password"
              placeholder="Enter Password"
              value={signupState.password}
              onChange={onChange}
            />
            <span style={{ color: "red" }}>
              {signupState.errors["password"]}
            </span>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Select User Type</label>
            <select
              type="text"
              refs="userType"
              className="form-control"
              name="userType"
              placeholder="Please Choose..."
              value={signupState.userType}
              onChange={onChange}
            >
              <option value="">Please choose...</option>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
          </div>
          <div className="text-center">
            <button type="submit" className="logBtn">
              Signup
            </button>
          </div>
          <hr />
          <div>
            <p className="text-center">
              Already have an account,{" "}
              <a href="/login" style={{ color: "#ffffff" }}>
                Log In.
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
