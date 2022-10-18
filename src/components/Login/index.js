import React, { useContext, useState } from "react";
import "./login.css";
import baseApi from "../../api/baseApi";
import { LOGIN_URL } from "../../api/Urls";

function Login() {
  const [phonee, setPhone] = useState("");
  const [passworde, setPassword] = useState("");

  const SubmitHandler = (e) => {
    e.preventDefault();
    baseApi
      .create(LOGIN_URL, { phone: phonee, password: passworde })
      .then((res) => window.localStorage.setItem("tooken", res.data.data))
      .catch((err) => console.log(err));
  };

  return (
    <section className="login-form h-100">
      <div className="container h-100 d-flex align-items-center justify-content-center">
        <form onSubmit={(e) => SubmitHandler(e)}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => setPhone(e.target.value)}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Login;
