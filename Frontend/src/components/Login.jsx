import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [userLogin, setUserLogin] = useState({});

  const checkLogin = async () => {
    const response = await axios.post(
      "http://localhost:5000/users/login",
      userLogin
    );
    if (response.data) {
      localStorage.setItem("auth-token", response.data.token);
    }
  };
  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            onChange={(e) =>
              setUserLogin({ ...userLogin, email: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            onChange={(e) =>
              setUserLogin({ ...userLogin, password: e.target.value })
            }
          />
        </div>
      </form>

      <button className="btn btn-primary" onClick={checkLogin}></button>
    </div>
  );
};

export default Login;
