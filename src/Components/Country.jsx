import React from "react";
import { useState } from "react";

function Country({ country, handleVisitedCountries, handleVisitedFlags }) {
  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
    handleVisitedCountries(country);
  };

  return (
    <div className={`country-card ${visited && "visited-country"}`}>
      <h2>{country.name.common}</h2>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
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
      <button onClick={handleVisited}>
        {visited ? "Visited" : "Not Visited"}
      </button>
      <br />
      <button onClick={() => handleVisitedFlags(country.flags.flags.png)}>
        Add Country Flags
      </button>
    </div>
  );
}

export default Country;
