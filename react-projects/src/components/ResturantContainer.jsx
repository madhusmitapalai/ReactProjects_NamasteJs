import React from "react";
import "./ResturantContainer.css";
import ResturantCard from "./ResturantCard";
const ResturantContainer = () => {
  return (
    <div className="resturantConteiner-section">
      <div className="card-section">
        <ResturantCard />
      </div>
    </div>
  );
};

export default ResturantContainer;
