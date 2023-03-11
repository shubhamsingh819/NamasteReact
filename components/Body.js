import React, { useState, useEffect } from "react";
// import { restaurentList } from "../src/config";
import RestaurentCard from "./RestaurentCard";
import ShimmerUi from "./ShimmerUi";
import { Link } from "react-router-dom";
import { filteredData } from "../utils/Helper";

const Body = () => {
  //
  const [allRestaurent, setAllRestaurent] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  //empty dependency array => once affter render
  // dependency array [searchText] => once after render + everyTime after render (my searchtext changes)
  useEffect(() => {
    getRestaurents();
  }, []);

  async function getRestaurents() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setAllRestaurent(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  // conditional Rendring

  return allRestaurent?.length === 0 ? (
    <ShimmerUi />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            // need to filter data
            const data = filteredData(searchText, allRestaurent);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurent-list">
        {filteredRestaurants.length === 0 ? (
          <h1>No Restaurent match your filter!</h1>
        ) : (
          ""
        )}
        {filteredRestaurants.map((restaurent) => {
          return (
            <Link
              to={"/restaurent/" + restaurent.data.id}
              key={restaurent.data.id}
            >
              <RestaurentCard {...restaurent.data} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;

