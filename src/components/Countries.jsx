import { use, useState } from "react";
import Country from "./Country";
const Countries = ({ countries }) => {
  const allCountries = use(countries);
  const [visited, setVisited] = useState([]);

  const handleVisited = (visitedCountry) => {
    setVisited([...visited, visitedCountry]);
  };
  return (
    <div>
      <h1 className="text-4xl text-center pt-6 ">
        List Of Countries : {allCountries.length}
      </h1>
      <p className="text-center py-2">Visited : {visited?.length}</p>
      <div
        className={
          "grid grid-cols-5 lg:grid-cols-10 w-2/3 sm:w-1/2 mx-auto gap-3 p-2 border rounded-md"
        }
      >
        <h1
          className={`col-span-10 text-center text-gray-500 ${
            visited.length > 0 ? "hidden" : "block"
          }`}
        >
          No visited found
        </h1>
        {visited.map((item) => (
          <img className="w-16 h-8" src={item?.flags?.svg} />
        ))}
      </div>
      <div className="w-1/2 sm:w-1/3 mx-auto">

      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto gap-4 xl:gap-10 mt-10">
        {allCountries
          .map((item, index) => (
            <div key={index}>
              <Country info={item} handleVisited={handleVisited} />
            </div>
          ))}
      </div>
    </div>
  );
};
export default Countries;
