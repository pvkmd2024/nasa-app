import React from "react";
import "./FilterForm.css";

const FilterForm = ({ onFilterChange }) => {
  const [rover, setRover] = React.useState("curiosity");
  const [sol, setSol] = React.useState(1000);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call onFilterChange which will dispatch the actions in MarsRoverList component
    onFilterChange({ rover, sol });
  };

  return (
    <form className="filter-form" onSubmit={handleSubmit}>
      <label>
        Rover:
        <select value={rover} onChange={(e) => setRover(e.target.value)}>
          <option value="curiosity">Curiosity</option>
          <option value="opportunity">Opportunity</option>
          <option value="spirit">Spirit</option>
        </select>
      </label>
      <label>
        Sol (Mars Day):
        <input
          type="number"
          value={sol}
          onChange={(e) => setSol(e.target.value)}
        />
      </label>
      <button type="submit">Apply Filters</button>
    </form>
  );
};

export default FilterForm;
// import React, { useState } from "react";
// import "./FilterForm.css";

// const FilterForm = ({ onFilterChange }) => {
//   const [rover, setRover] = useState("curiosity");
//   const [sol, setSol] = useState(1000);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onFilterChange({ rover, sol });
//   };

//   return (
//     <form className="filter-form" onSubmit={handleSubmit}>
//       <label>
//         Rover:
//         <select value={rover} onChange={(e) => setRover(e.target.value)}>
//           <option value="curiosity">Curiosity</option>
//           <option value="opportunity">Opportunity</option>
//           <option value="spirit">Spirit</option>
//         </select>
//       </label>
//       <label>
//         Sol (Mars Day):
//         <input
//           type="number"
//           value={sol}
//           onChange={(e) => setSol(e.target.value)}
//         />
//       </label>
//       <button type="submit">Apply Filters</button>
//     </form>
//   );
// };

// export default FilterForm;
