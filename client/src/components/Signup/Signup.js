import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { signupUser } from "../../utils/userFuctions";
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
    let errors = {};
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
      // getUsers()
      // .then((data) => {
      //   console.log(data);
      //   var alreadyRegisteredUser = data.find(
      //     (element) => element.email === signupState.email
      //   );
      //   if (!alreadyRegisteredUser) {
      //     signupUser(userData).then((res) => {
      //       history.push("/login");
      //     });
      //     console.log("Form submitted");
      //   } else {
      //     errors["email"] = "Email already exists";
      //     setSignupState({ ...signupState, errors });
      //   }
      // });
    } else {
      console.log("Form has errors.");
    }
  };

  return (
    <div className="container">
      {/* <Navbar /> */}
      <div className="row" style={{ paddingTop: "80px" }}>
        <div className="mx-auto mt-5 col-md-6">
          <form noValidate onSubmit={onSubmit}>
            <h1 className="mb-3 h3 font-weight normal">Please Sign in</h1>
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
              <span style={{ color: "red" }}>
                {signupState.errors["email"]}
              </span>
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
            {/* <DropdownButton
              alignRight
              title="Dropdown right"
              id="dropdown-menu-align-right"
            >
              <Dropdown.Item eventKey="Student">Student</Dropdown.Item>
              <Dropdown.Item eventKey="Teacher">Teacher</Dropdown.Item>
            </DropdownButton> */}
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">
                Select User Type
              </label>
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
            <button type="submit" className="btn btn-lg btn-primary btn-block">
              Signup
            </button>
            <hr />
            <div>
              <p className="text-center">
                Already have an account <a href="/login">Login</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
