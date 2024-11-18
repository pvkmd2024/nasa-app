import React, { useReducer } from "react";
import useFetch from "../../hooks/useFetch";
import SingleMarsPhoto from "./SingleMarsPhoto";
import FilterForm from "../Form/FilterForm";
import "./MarsRover.css";

const initialState = {
  rover: "curiosity",
  sol: 1000,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_ROVER":
      return { ...state, rover: action.payload };
    case "SET_SOL":
      return { ...state, sol: action.payload };
    default:
      return state;
  }
}

const MarsRoverList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { data, loading, error } = useFetch(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/${state.rover}/photos?sol=${state.sol}&api_key=bRWokBa8OpXxYIzZ6OKfCx3AI56JEdz9Jy7Gnhw9`
  );

  const handleFilterChange = (newFilters) => {
    dispatch({ type: "SET_ROVER", payload: newFilters.rover });
    dispatch({ type: "SET_SOL", payload: newFilters.sol });
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
// import React from "react";
// import useFetch from "../../hooks/useFetch";
// import SingleMarsPhoto from "./SingleMarsPhoto";
// import FilterForm from "../Form/FilterForm";
// import "./MarsRover.css";

// const MarsRoverList = () => {
//   const [filters, setFilters] = React.useState({
//     rover: "curiosity",
//     sol: 1000,
//   });
//   const { data, loading, error } = useFetch(
//     `https://api.nasa.gov/mars-photos/api/v1/rovers/${filters.rover}/photos?sol=${filters.sol}&api_key=bRWokBa8OpXxYIzZ6OKfCx3AI56JEdz9Jy7Gnhw9
// `
//   );

//   const handleFilterChange = (newFilters) => {
//     setFilters(newFilters);
//   };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div className="mars-rover">
//       <FilterForm onFilterChange={handleFilterChange} />
//       <div className="mars-rover-list">
//         {data.photos &&
//           data.photos.map((photo) => (
//             <SingleMarsPhoto key={photo.id} photo={photo} />
//           ))}
//       </div>
//     </div>
//   );
// };

// export default MarsRoverList;
