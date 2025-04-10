import React, { useState } from "react";
import Parties from "./AllParties";

function NationalParties() {
  const [search, setSearch] = useState("");
  return (
    <div>
      <div>
        <h1 className="NationalHeading">National Parties</h1>
        <p className="NationalPara">
          National parties are those parties that have a presence in multiple
          states and have a significant following across the country. These
          parties play a crucial role in shaping the political landscape of
          India.
        </p>
        <div className="searchContainer">
        <input
          type="text"
          value={search}
          placeholder="Search for a party..."
          onChange={(e) => setSearch(e.target.value)}
          className="searchBox"
        /></div>
        <div className="nationalParties">
          {Parties.filter((party) => {
            return (
              party.type === "National" &&
              party.name
                .toLocaleLowerCase()
                .includes(search.toLowerCase()) ||
              party.text
                .toLocaleLowerCase()
                .includes(search.toLowerCase())
            );
          }).map((party) => {
            if (party.type === "National") {
              return (
                <a
                  className="WebLink"
                  href={party.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div key={party.id} className="partyCard">
                    <div className="partySymbol">
                      <img src={party.symbol} alt="logo" />
                    </div>

                    <div className="PartyName">
                      <h2>{party.name}</h2>
                    </div>
                    <div className="PartyMotto">
                      <h3>{party.text}</h3>
                    </div>
                  </div>
                </a>
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
}

export default NationalParties;
