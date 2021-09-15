import React, { useState } from "react";
import "./SigninForm.css";
import img1 from "../images/signup_img1.png";
import twitter from "../images/twitter1.svg";
import facebook from "../images/facebook1.svg";
import google from "../images/google_chrome2.svg";
import minetech from "../images/minetech.svg";
import { Link, useHistory } from "react-router-dom";

const SigninForm = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [userNotFound, setUserNotFound] = useState(false);

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let users = localStorage.getItem("users");
    if (!!users) {
      users = JSON.parse(users);
      const existingUser = users.find(
        (usr) => usr.email === user.email && usr.password === user.password
      );
      if (existingUser) {
        history.push("/");
      } else {
        setUserNotFound(true);
      }
    }
  };
  return (
    <div className="signin">
      <div className="container">
        <img src={minetech} alt="" className="minetech__logo" />
        <div className="signin__wrapper">
          <div className="signin__image">
            <img src={img1} alt="Signin" />
          </div>
          <form className="signin__form" onSubmit={onSubmit} noValidate>
            {userNotFound && (
              <div style={{ color: "red" }}>
                The entered credentials are not found.
              </div>
            )}
            <h2>Login </h2>
            <div className="form-inputs">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-input"
                id="email"
                name="email"
                placeholder="Ex: johndoe@gmail.com"
                value={user.email}
                onChange={onChange}
              />
            </div>
            <div className="form-inputs">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-input"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={user.password}
                onChange={onChange}
              />
            </div>
            <div className="signin__button">
              <button type="submit">Log in</button>
            </div>
            <p className="account">Or Log in using</p>
            <div className="social__sigin">
              <Link to="/">
                <img src={twitter} alt="Twitter" />
              </Link>
              <Link to="/">
                <img src={facebook} alt="facebook" />
              </Link>
              <Link to="/">
                <img src={google} alt="google" />
              </Link>
            </div>
            <span>
              Don't have an account? <Link to="/signup">Sign Up</Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SigninForm;
