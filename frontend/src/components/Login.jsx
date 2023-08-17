import React, { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Login = (props) => {
  const navigate = useNavigate();
  const [message, setmessage] = useState("");
  const [res, setres] = useState(0);
  const [userData,setUserdata]=useState({})
  const emailsaved = (email) => {
    axios
      .get(`http://localhost:4000/api/users/getbyemail/${email}`)
      .then((result) => {
        setres(result.data.length);
      })
      .catch((error) => {
        console.log(error);
      })
    if (res > 0) {
      return true;
    } else {
      return false;
    }
  };
  const verifuser = (email, password) => {
    if (email.length === 0 || password < 8) {
      setmessage("ivalid inputs");
    } else if (emailsaved(email) === true) {
      axios
        .get(
          `http://localhost:4000/api/users/getbyemailandpassword/${email}/${password}`
        )
        .then((result) => {
          if (result.data.length === 0) {
            setmessage("password invalid ");
          } else {
            setUserdata(result.data[0]);
            props.userIn(userData)
            navigate("/allprojects");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <form class="form">
      <p class="title">Login </p>
      <p class="message">Login now and get full access to our app. </p>

      <label>
        <input
          id="email"
          required=""
          placeholder=""
          type="email"
          class="input"
        />
        <span>Email</span>
      </label>
      <label>
        <input
          id="pass"
          required=""
          placeholder=""
          type="password"
          class="input"
        />
        <span>Password</span>
      </label>
      <p>{message}</p>
      <button
        class="submit"
        onClick={(e) => {
          e.preventDefault();
          verifuser(
            document.getElementById("email").value,
            document.getElementById("pass").value
          )
          
        }}
      >
        Login
      </button>
      <p class="signin">
        have'nt an acount ?
        <a
          onClick={() => {
            navigate("/signup");
          }}
        >
          SIGN UP
        </a>
      </p>
    </form>
  );
};

export default Login;
