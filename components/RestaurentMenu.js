import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../src/config";
import useRestaurent from "../utils/useRestroMenu";
import ShimmerUi from "./ShimmerUi";

const RestauRentMenu = () => {
  const params = useParams();
  const { id } = params;
  const restaurent = useRestaurent(id);

  return !restaurent ? (
    <ShimmerUi />
  ) : (
    <div className="menu">
      <div>
        <h1>Restaurent id : {id}</h1>
        <h2>{restaurent.name}</h2>
        <img src={IMG_CDN_URL + restaurent.cloudinaryImageId} />
        <h3>{restaurent.area}</h3>
        <h3>{restaurent.city}</h3>
        <h3>{restaurent.avgRating}</h3>
        <h3>{restaurent.costforTwoMsg}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        {Object.values(restaurent?.menu?.items).map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </div>
    </div>
  );
};

export default RestauRentMenu;
