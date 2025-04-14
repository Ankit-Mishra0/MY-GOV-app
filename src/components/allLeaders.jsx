import React, { useState } from "react";
import Leader from "./leader";
import Card from "./card";

function AllLeaders() {
  const [search, setSearch] = useState("");
  return (
    <div>
      <div className="searchContainer">
        <input
          type="text"
          value={search}
          placeholder="Search for a Leader..."
          onChange={(e) => setSearch(e.target.value)}
          className="searchBox"
        />
      </div>
      <div className="all-card1">
        {Leader.filter((leader) => {
          return leader.name.toLowerCase().includes(search.toLocaleLowerCase());
        }).map((leader) => (
          <Card
            key={leader.key}
            name={leader.name}
            about={leader.about}
            image={leader.image}
            variant="all"
          />
        ))}
      </div>
    </div>
  );
}
export default AllLeaders;
