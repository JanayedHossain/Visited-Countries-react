import { Suspense } from "react";
import Countries from "./components/Countries";

const fetchCountries = async () => {
  const fetchurl = await fetch("https://restcountries.com/v3.1/all?fields=name,independent,capital,region,area,population,flags");
  return fetchurl.json();
};
const App = () => {
  return (
    <div className=" bg-[#00000009] max-w-[1800px] mx-auto min-h-screen">
      <Suspense fallback={<h1 className="text-xl h-screen w-full flex items-center justify-center">Loading...</h1>}>
        <Countries countries={fetchCountries()} />
      </Suspense>
    </div>
  );
};

export default App;
