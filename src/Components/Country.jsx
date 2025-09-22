import React from "react";

function Country({ country }) {
  console.log(country.capital[0]);
  return (
    <div className="country-card">
      <h2>{country.name.common}</h2>
      <br />
      <p>Capital: {country.capital.capital[0]}</p>
      <p>Population: {country.population.population}</p>
      <p>Area: {country.area.area} Sq.Km</p>
      <br />
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
    </div>
  );
}

export default Country;
