import React from "react";
import Parties from "./AllParties";

function RegionalParties() {
  return (
    <div>
      <div>
        <h1 className="RegionalHeading">Regional Parties</h1>
        <p className="RegionalPara">
          Regional parties are political parties that operate primarily within a
          specific state or region of India. They play a significant role in
          representing the interests and aspirations of the people in their
          respective areas. These parties often focus on regional issues,
          culture, and development, and they can have a substantial impact on
          state politics and governance.
        </p>
        <div className="regionalParties">
          {Parties.map((party) => {
            if (party.type === "State") {
              return (
                <a
                  className="WebLink"
                  style={{ textDecoration: "none" }}
                  href={party.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    if (!party.link) {
                      e.preventDefault();
                      alert("No official website available");
                    }
                  }}
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

export default RegionalParties;
