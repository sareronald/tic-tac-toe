import React, { useState } from "react";
import { loginUser } from "../../utils/userFuctions";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();

  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  // const [, appDispatch] = useAppContext();

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
      await loginUser(user);
      // console.log(response);
      history.push("/tictactoe");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="row" style={{ paddingTop: "50px" }}>
        <div
          className="col-md-6 mt-5 mx-auto"
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
    </div>
  );
}

export default Login;
