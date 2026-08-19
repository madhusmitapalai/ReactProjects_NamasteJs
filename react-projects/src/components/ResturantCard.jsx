import React from "react";

const ResturantCard = ({ value }) => {
  const {
    name,
    costForTwoMessage,
    cuisines,
    avgRatingString,
    totalRatingsString,
  } = value;
  return (
    <>
      <div className="cards" key={value.id}>
        {console.log("value", value)}
        <img
          src={`https://media-assets.swiggy.com/${value.cloudinaryImageId}`}
          alt="item_img"
        />

        <section>
          <h4>{name}</h4>
          <h4>{costForTwoMessage}</h4>
          <h4>{cuisines}</h4>
          <h4>{avgRatingString}</h4>
          <h4>{totalRatingsString}</h4>
        </section>
      </div>
    </>
  );
};

export default ResturantCard;
