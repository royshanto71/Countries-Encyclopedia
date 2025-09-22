import React, { use } from "react";
import Country from "../Country";

function Countries({ countriesPromise }) {
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  console.log(countries);

  return (
    <div>
      <h2>Countries List</h2>
      <br />
      <div className="countries-container">
        {countries.map((country) => (
          <Country country={country} />
        ))}
      </div>
    </div>
  );
}

export default Countries;
