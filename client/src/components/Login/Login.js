import React, { useState } from "react";
import { loginUser } from "../../utils/userFunctions";
import { useHistory } from "react-router-dom";
// import { Navbar } from "../Navbar/Navbar";
import { SET_CURRENT_USER } from "../../utils/actions";
import { useAppContext } from "../../store";

function Login() {
  const history = useHistory();

  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const [, appDispatch] = useAppContext();

  const onChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      email: formState.email,
      password: formState.password,
    };
    try {
      const res = await loginUser(user);
      appDispatch({ type: SET_CURRENT_USER, payload: res.data });
      history.push("/dashboard");
    } catch (error) {
      console.log(error);
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
        className="loginDiv"
        style={{
          backgroundColor: "#3997FC",
          border: "1px solid rgb(0,0,0,0.1)",
          borderRadius: "4px",
        }}
      >
        <form
          noValidate
          onSubmit={handleSubmit}
          style={{
            padding: "20px",
          }}
        >
          <h1
            className="h2 mb-3 font-weight normal text-center"
            style={{ color: "#ffffff" }}
          >
            Log in
          </h1>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Enter Email"
              value={formState.email}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Enter Password"
              value={formState.password}
              onChange={onChange}
            />
          </div>
          <div className="text-center">
            <button type="submit" className="logBtn">
              Log in
            </button>
          </div>
          <hr />
          <div>
            {/* add a link to the SIGNUP PAGE HERE */}
            <p className="text-center">
              Don't have an account?{" "}
              <a
                href="/signup"
                style={{ color: "#ffffff", fontWeight: "bolder" }}
              >
                Sign up
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
    // </div>
  );
}

export default Login;
