import React, { useEffect, useState } from "react";
import "./ResturantContainer.css";
import ResturantCard from "./ResturantCard";
const ResturantContainer = () => {
  const [data, setData] = useState([]);
  const apicall = async () => {
    try {
      const res = await fetch("https://namastedev.com/api/v1/listRestaurants");

      const resdata = await res.json();
      const restaurants =
        resdata?.data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];

      setData(restaurants);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    apicall();
  }, []);
  const filterBtn = () => {
    const filterdata = data.filter(
      (val) => Number(val.info.avgRatingString) >= 4.5,
    );

    setData(filterdata);
  };

  return (
    <div className="resturantConteiner-section">
      <div className="searchbar_section">
        <button onClick={filterBtn}>Top Rated Resturants</button>
      </div>
      <div className="card-section">
        {data.map((val, index) => {
          const value = val.info;
          return (
            <>
              <ResturantCard value={value} />;
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ResturantContainer;
