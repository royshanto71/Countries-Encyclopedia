import React from "react";

function Country({ country }) {
  const handleVisited = () => {
    console.log("Visited");
  };

  return (
    <div className="country-card">
      <h2>{country.name.common}</h2>
      <img src={country.flags.flags.svg} alt={country.flags.flags.alt} />
      <br />
      <p>Capital: {country.capital.capital[0]}</p>
      <p>Population: {country.population.population}</p>
      <p>
        Area: {country.area.area} Sq.Km <br />
        <span>
          {country.area.area > 1000000 ? "Large Country" : "Small Country"}
        </span>
      </p>
      <p>Region: {country.region.region}</p>
      <br />
      <button onClick={handleVisited}>Not Visited</button>
    </div>
  );
}

export default Country;
