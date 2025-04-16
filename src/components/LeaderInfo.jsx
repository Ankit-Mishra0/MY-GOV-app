import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

function LeaderInfo() {
  const location = useLocation();
  const { name, image } = location.state || {};

  const [bio, setBio] = useState("");

  useEffect(() => {
    if (name) {
      axios
        .post("http://localhost:5000/api/gemini/leader-info", { name })
        .then((res) => setBio(res.data.info))
        .catch((err) => console.error("Error fetching Gemini data:", err));
    }
  }, [name]);

  return (
    <div className="Leader-Info">
      <div className="Leader-Image">
        <img src={image} alt={name} />
      </div>
      <div className="Leader-Name">
        {" "}
        <h1>{name}</h1>
      </div>
      <div className="Leader-Bio">
        <p>{bio || "Loading leader information..."}</p>
      </div>
    </div>
  );
}

export default LeaderInfo;
