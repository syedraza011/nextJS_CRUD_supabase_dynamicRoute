

import { useState } from "react";

const Sort = ({ handleSort }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [sortOption, setSortOption] = useState(null);

  const handleClick = (option) => {
    setSortOption(option);
    handleSort(option);
  };

  const handleClearSorts = () => {
    setSortOption(null);
    handleSort(null);
  };

  return (
    <div className="sort">
      <button className="sort-hamburger" onClick={() => setIsOpen(!isOpen)}>
        Sort <span className="sort-hamburger-icon">&#8801;</span>
      </button>
      {isOpen && (
        <div className="sort-dropdown">
          <button
            className={sortOption === "depart" ? "active" : ""}
            onClick={() => handleClick("depart")}
          >
            Depart
          </button>
          <button
            className={sortOption === "destination" ? "active" : ""}
            onClick={() => handleClick("destination")}
          >
            Destination
          </button>
          <button
            className={sortOption === "departime" ? "active" : ""}
            onClick={() => handleClick("departime")}
          >
            Depart Time
          </button>
          <button
            className={sortOption === "depardate" ? "active" : ""}
            onClick={() => handleClick("depardate")}
          >
            Depart Date
          </button>
          <button
            className={sortOption === "returntime" ? "active" : ""}
            onClick={() => handleClick("returntime")}
          >
            Return Time
          </button>
          <button
            className={sortOption === "returndate" ? "active" : ""}
            onClick={() => handleClick("returndate")}
          >
            Return Date
          </button>
          <button
            className={sortOption === "price" ? "active" : ""}
            onClick={() => handleClick("price")}
          >
            Price
          </button>
          {sortOption && (
            <button className="clear-sorts" onClick={handleClearSorts}>
              Clear Sorts
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Sort;
