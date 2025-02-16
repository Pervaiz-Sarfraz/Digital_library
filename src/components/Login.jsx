import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logoImg from '../assets/logo.png';
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const { login, isLoggedIn } = useAuth();

  const handleSignup = () => {
    navigate("/signup");
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values,[name]:value}));
  };
  const handleLogin = async (event) => {
    event.preventDefault();

    if (inputs.email.trim() === '' || inputs.password.trim() === '') {
      toast.error("Email or Password can't be empty", { autoClose: 1000 });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(inputs.email) && inputs.email !== '') {
      toast.error("Invalid email format", { autoClose: 1000 });
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post('http://localhost:8080/login.php', inputs);
      console.log(response);
      if (response.data.status === "success") {
        toast.success('Logged In', {autoClose: 3000});
        login();
        navigate("/");
      } else {
        toast.error("Email or Password is invalid " + response.data.message, { autoClose: 1000 });
      }
    } catch (error) {
      console.error('Error during API request:', error);
      toast.error("An error occurred during the request", { autoClose: 1000 });
    } finally {
      setLoading(false); // Set loading back to false after the response is received
    }

  };
  return (
    <div className='login'>
    <section className="login-page" >
      <div className="row ">
        <div className="login-container ">
          <div className="col ">
            <div className="card" style={{ borderRadius: '1rem' }}>
              <div className="row ">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                    alt="login form"
                    className="login-logo-img"
                    style={{ borderRadius: '1rem 0 0 1rem' }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    
                      <div className="d-flex align-items-center mb-3 pb-1">
                      <img className="login-logo" src={logoImg} alt="site logo" />
                      </div>

                      <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>
                        Sign into your account
                      </h5>
                      <form onSubmit={handleLogin}>
                      <div className="form-outline mb-4">
                        <input type="email" id="form2Example17" className="form-control form-control-lg" name='email' onChange={handleChange} />
                        <label className="form-label" htmlFor="form2Example17">
                          Email address
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input type="password" id="form2Example27" className="form-control form-control-lg" name='password' onChange={handleChange} />
                        <label className="form-label" htmlFor="form2Example27">
                          Password
                        </label>
                      </div>

                      <div className="pt-1 mb-4">
                        <button className="login-btn btn-dark btn-lg btn-block" type="submit">
                        {isLoggedIn ? "Logout" : "Login"}
                        </button>
                      </div>
                      </form>
                      <a className="small text-muted" href="#!">
                        Forgot password?
                      </a>
                      <p className="mb-5 pb-lg-2" >
                        Don't have an account? <span className="signup-link" style={{ color: '#393f81', cursor:'pointer' }} onClick={handleSignup}>Register here</span>
                      </p>
                      <a href="#!" className="small text-muted">
                        Terms of use.
                      </a>
                      <a href="#!" className="small text-muted">
                        Privacy policy
                      </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Login;
