import React, { useEffect, useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Myprojects = (props) => {
  const userdata = {
    idusers: 3,
    userName: "amine_slimani",
    email: "aminslimani76@gmail.com",
    password: "A.m.i.n.e1",
    imageUrl: "https://www.instagram.com/p/ChMnZWAtBf2/",
    githubLink: "https://github.com/slimani-amine",
  };
  const navigate = useNavigate();
  const deleteproject = (id) => {
    axios
      .delete(`http://localhost:4000/api/projects/deleteproject/${id}`)
      .then((result) => {
        console.log("deleted");
        navigate("myprojects");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/projects/byowner/${userdata.idusers}`)
      .then((result) => {
        setData(result.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div className="products-details">
        {data &&
          data.map((e, i) => {
            return (
              <div class="card">
                <div>
                  <img class="img" src={e.sreenshotLink} />
                </div>
                <span> {e.name}</span>
                <span><a href={e.viewlink}> Open the website</a></span>
                <button
                  className=""
                  onClick={() => {
                    navigate("/myprojects/updateproject", {
                      state: { id: e.idprojects },
                    });
                  }}
                >
                  update
                </button>
                <button
                  className=""
                  onClick={() => {
                    deleteproject(e.idprojects);
                  }}
                >
                  delete
                </button>
              </div>
            );
          })}
        <br />
      </div>
      <div>
        
        <button
          onClick={() => {
            navigate("/myprojects/addproject");
          }}
        >
          Add Project
        </button>
      </div>
    </div>
  );
};

export default Myprojects;
