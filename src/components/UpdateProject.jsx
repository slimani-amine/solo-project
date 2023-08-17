import React from "react";
import "../App.css";
import { useNavigate ,useLocation} from "react-router-dom";
import axios from "axios"

const UpdateProject = (props) => {
  const navigate = useNavigate();
  const location=useLocation();
  const updateproject = (id, obj) => {
    axios
      .put(`http://localhost:4000/api/projects/updateproject/${location.state.id}`, obj)
      .then((result) => {
        navigate("/myprojects");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="add-box">
      <div class="input-wrapper">
        <input
          id="name"
          type="text"
          placeholder="name of the project"
          name="text"
          class="input"
        />
      </div>
      <div class="input-wrapper">
        <input
          id="desc"
          type="text"
          placeholder="description"
          name="text"
          class="input"
        />
      </div>
      <div class="input-wrapper">
        <input
          id="viewLink"
          type="text"
          placeholder="view link "
          name="text"
          class="input"
        />
      </div>
      <div class="input-wrapper">
        <input
          id="repoLink"
          type="text"
          placeholder="github Link Repo"
          name="text"
          class="input"
        />
      </div>
      <div class="input-wrapper">
        <input
          id="scLink"
          type="text"
          placeholder="sreenshot Link"
          name="text"
          class="input"
        />
      </div>

      <button
        class="button"
        onClick={(e) => {
          e.preventDefault()
          updateproject({
            name: document.getElementById("name").value,
            description: document.getElementById("desc").value,
            viewlink: document.getElementById("viewLink").value,
            githubLinkRepo: document.getElementById("repoLink").value,
            sreenshotLink: document.getElementById("scLink").value,
            owner: props.userName,
          });
          navigate("/myprojects/addproject");
        }}
      >
        Create Project
      </button>
    </div>
  );
};
export default UpdateProject;
