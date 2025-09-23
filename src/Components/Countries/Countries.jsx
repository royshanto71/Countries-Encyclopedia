import React, { use } from "react";
import Country from "../Country";

function Countries({ countriesPromise }) {
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;

  return (
    <div>
      <h2
        style={{ textAlign: "center", fontSize: "52px", fontFamily: "Times" }}
      >
        Countries List
      </h2>
      <br />
      <div className="countries-container">
        {countries.map((country) => (
          <Country key={country.cca3.cca3} country={country} />
        ))}
      </div>
    </div>
  );
}

export default Countries;
