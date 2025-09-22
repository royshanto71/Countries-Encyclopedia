import React, { use } from "react";

function Countries({ countriesPromise }) {
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  console.log(countries);

  return (
    <div>
      <h2>Countries List</h2>
      {countries.map((country) => (
        <ul>
          <li>
            {country.name.common}
            <div>
              <img src={country.flags.flags.png} />
            </div>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default Countries;
