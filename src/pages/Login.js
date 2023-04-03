import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import Logo from "../img/logo.png";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="form-container">
      <div className="form-wrapper">
        <form onSubmit={handleSubmit}>
          <img src={Logo} className="logo" alt="logo" />

          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />

          <button className="login-btn">Sing in</button>
          {err && <span className="error">something went wrong</span>}
          <p>
            you do have an account?{" "}
            <Link className="link" to="/register">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
