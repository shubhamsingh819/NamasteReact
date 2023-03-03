import React, { useState, useEffect } from "react";
import { restaurentList } from "../src/config";
import RestaurentCard from "./RestaurentCard";
import ShimmerUi from "./ShimmerUi";

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
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.3352337&lng=74.6157151&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setAllRestaurent(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  const filteredData = (searchText) => {
    const filterData = allRestaurent.filter((restaurant) =>
      restaurant?.data?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
    );
    return filterData;
  };

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
            <RestaurentCard {...restaurent.data} key={restaurent.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
