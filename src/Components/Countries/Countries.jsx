import React, { use } from "react";
import Country from "../Country";
import { useState } from "react";

function Countries({ countriesPromise }) {
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;

  const [visitedCountries, setVisitedCountries] = useState([]);
  const handleVisitedCountries = (country) => {
    console.log(country.name.common);
    setVisitedCountries([...visitedCountries, country]);
  };

  return (
    <div>
      <h2
        style={{ textAlign: "center", fontSize: "52px", fontFamily: "Times" }}
      >
        Countries List
      </h2>
      <br />
      <h2
        style={{ textAlign: "center", fontSize: "52px", fontFamily: "Times" }}
      >
        Total Visited Countries: {visitedCountries.length}
      </h2>
      <br />
      <div
        style={{
          margin: "0 auto",
          width: "26%",
          border: "1px dashed black",
          textAlign: "center",
        }}
      >
        <h3>Visited Countries</h3>
        <ol>
          {visitedCountries.map((country) => (
            <li key={country.cca3.cca3}>{country.name.common}</li>
          ))}
        </ol>
      </div>

      <div className="countries-container">
        {countries.map((country) => (
          <Country
            key={country.cca3.cca3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
          />
        ))}
      </div>
    </div>
  );
}

export default Countries;
