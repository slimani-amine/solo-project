import { React, useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();
  const [message, setmessage] = useState("");
  const [res, setres] = useState(0);
  const emailsaved = (email) => {
    axios
      .get(`http://localhost:4000/api/users/getbyemail/${email}`)
      .then((result) => {
        setres(result.data.length)
      })
      .catch((error) => {
        console.log(error);
      });
      console.log(res);
      if (res>0) {
        return true
      }else{
        return false
      }
  };
  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };
  const verif = (obj) => {
    console.log(obj, "heloo");
    if (obj["userName"].length === 0 || obj.userName.includes("123456789")) {
    } else if (obj.email.length === 0 || !validateEmail(obj.email)) {
      setmessage("Invalid Email. Please enter a valid email address.");
    } else if (obj.password.length < 8) {
      setmessage(
        "Invalid Password. Please enter a password with a minimum of 8 characters."
      );
    } else if (obj.password !== obj.confirmpass) {
      setmessage("confirm your password correctly");
    }else if (emailsaved(obj.email)){
      setmessage("email already exist");
    } 
    else {
      axios
        .post(`http://localhost:4000/api/users/adduser`, {
          userName: obj.userName,
          email: obj.email,
          password: obj.password,
          imageUrl: obj.imageUrl,
          githubLink: obj.githubLink,
        })
        return true
    }
  };

  return (
    <form class="form">
      <p class="title">Register </p>
      <p class="message">Signup now and get full access to our app. </p>
      <div class="flex">
        <label>
          <input
            id="fName"
            required=""
            placeholder=""
            type="text"
            class="input"
          />
          <span>Firstname</span>
        </label>

        <label>
          <input
            id="lName"
            required=""
            placeholder=""
            type="text"
            class="input"
          />
          <span>Lastname</span>
        </label>
      </div>

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
      <label>
        <input
          id="cpass"
          required=""
          placeholder=""
          type="password"
          class="input"
        />
        <span>Confirm password</span>
      </label>
      <label>
        <input
          id="img"
          required=""
          placeholder=""
          type="password"
          class="input"
        />
        <span>your image Url</span>
      </label>
      <label>
        <input
          id="git"
          required=""
          placeholder=""
          type="password"
          class="input"
        />
        <span>your github Link</span>
      </label>
      <p>{message}</p>
      <button
        class="submit"
        onClick={(e) => {
          e.preventDefault();
          if (
            verif({
              userName:
                document.getElementById("fName").value +
                "_" +
                document.getElementById("lName").value,
              email: document.getElementById("email").value,
              password: document.getElementById("pass").value,
              confirmpass: document.getElementById("cpass").value,
              imageUrl: document.getElementById("img").value,
              githubLink: document.getElementById("git").value,
            }) === true
          ) {
            navigate("/");
          }
        }}
      >
        Submit
      </button>
      <p class="signin">
        Already have an acount ?
        <a
          onClick={() => {
            navigate("/");
          }}
        >
          LOGIN
        </a>
      </p>
    </form>
  );
};

export default SignUp;
