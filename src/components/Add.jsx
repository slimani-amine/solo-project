import React from "react";
import "../App.css";
import { useNavigate ,useLocation} from "react-router-dom";
import axios from "axios"

const Add = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const owner=4
  const addproject = (obj) => {
    axios.get()
    axios
      .post(`http://localhost:4000/api/projects/addproject/${owner}`, obj)
      .then((result) => {
        navigate('/myprojects')
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
        class=""
        onClick={() => {
          addproject({
            name: document.getElementById("name").value,
            description: document.getElementById("desc").value,
            viewlink: document.getElementById("viewLink").value,
            githubLinkRepo: document.getElementById("repoLink").value,
            sreenshotLink: document.getElementById("scLink").value,
          });
          navigate("/allproject");
        }}
      >
        Create Project
      </button>
    </div>
  );
};
export default Add;
