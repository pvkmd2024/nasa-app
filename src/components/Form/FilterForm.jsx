import React, { useState } from "react";
import "./FilterForm.css";

const FilterForm = ({ onFilterChange }) => {
  const [rover, setRover] = useState("curiosity");
  const [sol, setSol] = useState(1000);

  const handleSubmit = (e) => {
    e.preventDefault();
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
