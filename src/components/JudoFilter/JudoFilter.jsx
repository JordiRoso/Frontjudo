import React from "react";

function JudoFilter({ genderOptions, categoryOptions, yearOptions, onFilterChange }) {
  const handleGenderChange = (event) => {
    onFilterChange({
      gender: event.target.value,
    });
  };

  const handleCategoryChange = (event) => {
    onFilterChange({
      category: event.target.value,
    });
  };

  const handleYearChange = (event) => {
    onFilterChange({
      year: event.target.value,
    });
  };

  return (
    <div>
      <label>
        Gender:
        <select onChange={handleGenderChange}>
          <option value="">All</option>
          {genderOptions.map((gender) => (
            <option key={gender} value={gender}>
              {gender}
            </option>
          ))}
        </select>
      </label>

      <label>
        Category:
        <select onChange={handleCategoryChange}>
          <option value="">All</option>
          {categoryOptions.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>

      <label>
        Year:
        <select onChange={handleYearChange}>
          <option value="">All</option>
          {yearOptions.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default JudoFilter;
