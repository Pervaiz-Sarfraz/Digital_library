import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logoImg from "../assets/logo.png";

export default function Signup() {
  const [inputs, setInputs] = useState("");
  // const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handlesubmit = async (event) => {
    event.preventDefault();

    if (
      inputs.email == "" ||
      inputs.username == "" ||
      inputs.password == "" ||
      inputs.confirmPassword == ""
    ) {
      toast.error("Missing input fields", { autoClose: 1000 });
      return;
    }

    if (inputs.password !== inputs.confirmPassword) {
      toast.error("confirm Password and Password didn't matched", {
        autoClose: 1000,
      });
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(inputs.email)) {
      toast.error("Invalid email format", { autoClose: 1000 });
      return;
    }
    try {
      // Check if email already exists
      const emailCheckResponse = await axios.get(
        `http://localhost:8080/signup.php?email=${inputs.email}`
      );

      if (emailCheckResponse.data.hasOwnProperty("error")) {
        toast.error("Error checking email existence", { autoClose: 1000 });
        return;
      }

      if (emailCheckResponse.data.count > 0) {
        toast.error("Email already exists", { autoClose: 1000 });
        return;
      }

      // Check if username is unique
      const usernameCheckResponse = await axios.get(
        `http://localhost:8080/signup.php?username=${inputs.username}`
      );

      if (usernameCheckResponse.data.hasOwnProperty("error")) {
        toast.error("Error checking username existence", { autoClose: 1000 });
        return;
      }

      if (usernameCheckResponse.data.count > 0) {
        toast.error("Username is already taken", { autoClose: 1000 });
        return;
      }

      // Assuming both email and username are valid and unique, proceed with registration
      const response = await axios.post(
        "http://localhost:8080/signup.php",
        inputs
      );

      if (response.status === 200) {
        toast.success("Registered successfully", { autoClose: 500 });
        navigate("/login");
      } else {
        toast.error("Failed to create record. " + response.data.message, {
          autoClose: 1000,
        });
      }
    } catch (error) {
      console.error("Error during API request:", error);
      toast.error("An error occurred during the request", { autoClose: 1000 });
    }
  };

  return (
    <section className="signup" style={{ backgroundColor: "orange" }}>
      <div className="signup-page">
        <div className="row">
          <div className="signup-container">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row ">
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <div className="d-flex align-items-center mb-3 pb-1">
                      <img
                        className="signup-logo"
                        src={logoImg}
                        alt="site logo"
                      />
                    </div>

                    <h5
                      className="fw-normal mb-3 pb-3"
                      style={{ letterSpacing: "1px" }}
                    >
                      Register your account
                    </h5>
                    <form onSubmit={handlesubmit}>
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="form2Example17"
                          className="form-control form-control-lg"
                          name="email"
                          onChange={handleChange}
                        />
                        <label className="form-label" htmlFor="form2Example17">
                          Email address
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="form2Example07"
                          className="form-control form-control-lg"
                          name="username"
                          onChange={handleChange}
                        />
                        <label className="form-label" htmlFor="form2Example17">
                          User Name
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form2Example27"
                          className="form-control form-control-lg"
                          name="password"
                          onChange={handleChange}
                        />
                        <label className="form-label" htmlFor="form2Example27">
                          Password
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form2Example28"
                          className="form-control form-control-lg"
                          name="confirmPassword"
                          onChange={handleChange}
                        />
                        <label className="form-label" htmlFor="form2Example27">
                          Confirm Password
                        </label>
                      </div>

                      <div className="pt-1 mb-4">
                        <button
                          className="btn btn-dark btn-lg btn-block"
                          type="submit"
                        >
                          Register
                        </button>
                      </div>
                      <p className="mb-5 pb-lg-2">
                        Already have an account?{" "}
                        <span
                          className="login-link"
                          style={{ color: "#638139", cursor: "pointer" }}
                          onClick={handleLogin}
                        >
                          Login
                        </span>
                      </p>
                    </form>
                  </div>
                </div>
                <div className="col-md-6 col-lg-5 d-flex d-md-block">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                    alt="Signup form"
                    className="signup-logo-img"
                    style={{ borderRadius: "1rem", height: "100%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
