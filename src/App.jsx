import { Suspense } from "react";
import Countries from "./components/Countries";

const fetchCountries = async () => {
  const fetchurl = await fetch("https://restcountries.com/v3.1/all");
  return fetchurl.json();
};
const App = () => {
  return (
    <div className=" bg-[#00000009] max-w-[1440px] mx-auto min-h-screen">
      <Suspense>
        <Countries countries={fetchCountries()} />
      </Suspense>
    </div>
  );
};

export default App;
