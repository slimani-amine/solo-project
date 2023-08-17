import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SideBar from "./sidebar/SideBar.jsx"
import NavBar from "./content/Navbar.jsx"

const AllProject = () => {
  const navigate = useNavigate();
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/projects/")
      .then((result) => {
        setdata(result.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  const [owner, setowner] = useState("");

  const theOwner = (e) => {
    axios
      .get(`http://localhost:4000/api/users/${e.owner}`)
      .then((result) => {
        setowner(result.data[0].userName);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>

    <div className='products-details'>
      {data &&
        data.map((e, i) => {
          
          return (<div class="card">
          <div >
            <img class="img" src={e.sreenshotLink} onClick={() => {
                    navigate("/allproject/oneproject", {
                      state: { element: e, owner: theOwner(e) },
                    });
                  }} />
          </div>
          <span> {e.name}</span>
          <button><a href={e.viewlink}> Open the website</a></button>
        </div>)
        })}
    </div>
</div>
  );
};
export default AllProject;
