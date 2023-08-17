import React from "react";
import "../App.css";
import { useLocation } from "react-router-dom";

const OneProject = () => {
  const location = useLocation();
  const element=location.state.element
  const owner=location.state.owner
  console.log("🚀 ~ file: OneProject.jsx:9 ~ OneProject ~ owner:", owner)
  return (
    <div class="card-client">
      <div class="user-picture">
        <img src={element.sreenshotLink} alt={element.name} />
      </div>
      <p class="name-client"> {element.name}</p>
      <p>{element.description} </p>
      <button><a href={element.viewlink}> Open the website</a></button>
      <br />
      <a href={element.githubLinkRepo}>Open repo on github</a>
    </div>
  );
};

export default OneProject;
