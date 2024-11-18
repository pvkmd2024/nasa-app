import React from "react";
import useFetch from "../../hooks/useFetch";
import SingleAPOD from "./SingleAPOD";
import "./APOD.css";

const APODList = () => {
  const { data, loading, error } = useFetch(
    "https://api.nasa.gov/planetary/apod?api_key=YOUR_API_KEY"
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="apod-container">
      {data.map((apod, index) => (
        <SingleAPOD key={index} apod={apod} />
      ))}
    </div>
  );
};

export default APODList;
