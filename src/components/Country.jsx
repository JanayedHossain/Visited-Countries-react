import { useState } from "react";

const Country = ({ info, handleVisited }) => {
  const [isVisited, setIsVisted] = useState(false);
  const handleClick = (info) => {
    handleVisited(info);
    setIsVisted(true);
  };
  return (
    <div className="border border-gray-400 p-4 rounded-lg">
      <img
        src={info?.flags?.svg}
        alt=""
        className="h-48 sm:h-52 lg:h-48 w-full rounded-lg"
      />
      <h1 className="text-xl py-4 text-center font-bold">
        {info?.name?.common}
      </h1>
      <i className="block pb-2">
        Independent : {info?.independent ? "✔" : "❌"}
      </i>
      <i>Capital : {info?.capital}</i>
      <br />
      <i>Region: {info?.region}</i>
      <br />
      <i>Area : {info?.area}</i>
      <br />
      <i>Population : {info?.population}</i>
      <br />
      <button
        disabled={isVisited}
        className="rounded-md mt-4 px-3 text-sm py-2  bg-black text-white disabled:bg-gray-300 disabled:text-gray-500"
        onClick={() => handleClick(info)}
      >
        {isVisited ? "Visited" : "Not Visited"}
      </button>
    </div>
  );
};

export default Country;
