import React from "react";
import "./Login.css";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";

function Login() {
  const handleSubmit = async () => {
    await signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
    <div className="head"><h1>Doubt Solver</h1></div>
    <div className="login-container">
      <div className="login-content">
        <img
          src="https://i1.wp.com/blog.doubtbuddy.com/wp-content/uploads/2021/10/doubttt.jpg?resize=970%2C667&ssl=1"
          alt="logo"
        />
        <button onClick={handleSubmit} className="btn-login">
          Login/Register to continue
        </button>
      </div>
    </div>
    </>
  );
}

export default Login;