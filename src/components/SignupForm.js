import React from "react";
import "./SigninForm.css";
import img1 from "../images/signup_img1.png";
import twitter from "../images/twitter1.svg";
import facebook from "../images/facebook1.svg";
import google from "../images/google_chrome2.svg";
import minetech from "../images/minetech.svg";
import { Link } from "react-router-dom";
import useForm from "./useForm";
import validation from "./validation";
import { useHistory } from "react-router-dom";

const SignupForm = () => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validation
  );

  let history = useHistory();

  function submitForm() {
    history.push("/");
  }

  return (
    <div className="signin">
      <div className="container">
        <img src={minetech} alt="" className="minetech__logo" />
        <div className="signin__wrapper">
          <div className="signin__image">
            <img src={img1} alt="Signin" />
          </div>
          <form className="signin__form" onSubmit={handleSubmit} noValidate>
            <h2>Sign up </h2>
            <div className="form-inputs">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-input"
                id="name"
                name="name"
                placeholder="Ex: John"
                value={values.name}
                onChange={handleChange}
              />
              {errors.name && <p className="danger">{errors.name}</p>}
            </div>
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
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && <p className="danger">{errors.email}</p>}
            </div>
            <div className="form-inputs-inline">
              <div className="form-inputs">
                <label htmlFor="number" className="form-label">
                  Phone number
                </label>
                <input
                  type="number"
                  className="form-input"
                  id="number"
                  name="number"
                  placeholder="0000000000"
                  value={values.number}
                  onChange={handleChange}
                />
                {errors.number && <p className="danger">{errors.number}</p>}
              </div>
              <div className="form-inputs">
                <label htmlFor="dateOfBirth" className="form-label">
                  Date of Birth
                </label>
                <input
                  type="date"
                  className="form-input"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  placeholder="DD/MM/YY"
                  value={values.dateOfBirth}
                  onChange={handleChange}
                />
                {errors.dateOfBirth && (
                  <p className="danger">{errors.dateOfBirth}</p>
                )}
              </div>
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
                value={values.password}
                onChange={handleChange}
              />
              {errors.password && <p className="danger">{errors.password}</p>}
            </div>
            <div className="checkbox">
              <input type="checkbox" id="term"></input>
              <label htmlFor="term">
                I accept the <Link to="/"> Terms & conditions</Link>
              </label>
            </div>
            <div className="signin__button">
              <button type="submit">Sign up</button>
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
              Already have an account? <Link to="/signin">Login</Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
