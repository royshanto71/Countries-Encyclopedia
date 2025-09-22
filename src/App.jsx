import "./App.css";
import React, { Suspense } from "react";
import Countries from "./Components/Countries/Countries";

const countriesPromise = fetch(
  "https://openapi.programming-hero.com/api/all"
).then((response) => response.json());

function App() {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Countries countriesPromise={countriesPromise} />
      </Suspense>
    </>
  );
}

export default App;
