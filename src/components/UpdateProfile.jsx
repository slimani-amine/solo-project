import React, { useState } from "react";
import "../App.css";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios"

const UpdateProfile = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userdata = location.state.userdata;
  var [message, setmessage] = useState("");

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };
  const verifandupdate = (id, obj) => {
    if (obj.name.length === 0 || obj.name.includes("123456789")) {
    } else if (obj.email.length === 0 || !validateEmail(obj.email)) {
      setmessage("Invalid Email. Please enter a valid email address.");
    } else if (obj.password.length < 8) {
      setmessage(
        "Invalid Password. Please enter a password with a minimum of 8 characters."
      );
    } else if (obj.password !== obj.confirmpass) {
      setmessage("confirm your password correctly");
    } else {
      axios
        .put(`http://localhost:4000/api/users/updateuser/${id}`, {
          userName: obj.userName,
          email: obj.email,
          password: obj.password,
          imageUrl: obj.imageUrl,
          CHAR: obj.CHAR,
        })
        .then((result) => {
          return true;
        })
        .catch((error) => {
          console.log(error);
        });
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
            defaultValue={userdata.userName.subString(
              0,
              userdata.userName.indexof("_")
            )}
            type="text"
            class="input"
          />
          <span>Firstname</span>
        </label>

        <label>
          <input
            id="lName"
            required=""
            defaultValue={userdata.userName.subString(
              userdata.userName.indexof("_"),
              userdata.userName.length - 1
            )}
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
          defaultValue={userdata.email}
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
        <span>old Password</span>
      </label>
      <label>
        <input
          id="pass"
          required=""
          placeholder=""
          type="password"
          class="input"
        />
        <span>New Password</span>
      </label>
      <label>
        <input
          id="cpass"
          required=""
          placeholder=""
          type="password"
          class="input"
        />
        <span>Confirm New password</span>
      </label>
      <label>
        <input
          id="img"
          required=""
          defaultValue={userdata.imageUrl}
          type="text"
          class="input"
        />
        <span>your image Url</span>
      </label>
      <label>
        <input
          id="git"
          required=""
          defaultValue={userdata.imageUrl}
          type="text"
          class="input"
        />
        <span>your github link</span>
      </label>
      <p>{message}</p>
      <button
        class="submit"
        onSubmit={() => {
          if (
            verifandupdate(userdata.idusers, {
              userName:
                document.getElementById("fName").value +
                "_" +
                document.getElementById("lName").value,
              email: document.getElementById("email").value,
              oldpassword: document.getElementById("opass"),
              password: document.getElementById("npass").value,
              confirmpass: document.getElementById("cpass").value,
              imageUrl: document.getElementById("img").value,
              CHAR: document.getElementById("git").value,
            })
          ) {
            navigate("/profile");
          }
        }}
      >
        UPDATE
      </button>
    </form>
  );
};

export default UpdateProfile;
