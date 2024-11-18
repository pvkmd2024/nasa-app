import React from "react";
import useFetch from "../../hooks/useFetch";
import SingleMarsPhoto from "./SingleMarsPhoto";
import FilterForm from "../Form/FilterForm";
import "./MarsRover.css";

const MarsRoverList = () => {
  const [filters, setFilters] = React.useState({
    rover: "curiosity",
    sol: 1000,
  });
  const { data, loading, error } = useFetch(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/${filters.rover}/photos?sol=${filters.sol}&api_key=YOUR_API_KEY`
  );

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="mars-rover">
      <FilterForm onFilterChange={handleFilterChange} />
      <div className="mars-rover-list">
        {data.photos &&
          data.photos.map((photo) => (
            <SingleMarsPhoto key={photo.id} photo={photo} />
          ))}
      </div>
    </div>
  );
};

export default MarsRoverList;
