import React, { useEffect, useState } from "react";

const ResturantCard = () => {
  const [data, setData] = useState([]);
  const apicall = async () => {
    try {
      const res = await fetch("https://namastedev.com/api/v1/listRestaurants");

      const resdata = await res.json();

      console.log("API Response:", resdata);

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

  console.log("data", data);
  return (
    <>
      {" "}
      {data.map((val, index) => {
        const value = val.info;

        return (
          <div className="cards" key={index.id}>
            {console.log("value", value)}
            <img
              src={`https://media-assets.swiggy.com/${value.cloudinaryImageId}`}
              alt="item_img"
            />

            <section>
              <h4>{value.name}</h4>
              <h4>{value.costForTwoMessage}</h4>
              <h4>{value.cuisines}</h4>
              <h4>{value.avgRatingString}</h4>
              <h4>{value.totalRatingsString}</h4>
            </section>
          </div>
        );
      })}
    </>
  );
};

export default ResturantCard;
