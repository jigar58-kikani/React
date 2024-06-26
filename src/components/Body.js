import { restaurantList } from "../constant.js"
import RestaurantCard from "./RestaurantCard.js"
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js"

//what is state? when we need to create local variable in react that needs to use state variable and those are created by useState hooks
//what is React hooks? just a normal function
//what is useState? returns an array and the first elemnet of array is local variable 


function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    );
    return filterData;
  }

const Body = () => {
    
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState(); //returns= [variavle name, function to update the variable]
  // empty dependency array => once after render
  // dep arry [searchText] => once after initial render + everytime after redern (my searchText changes)
  useEffect(() => {
    // API call
    getRestaurants();
  }, []);
  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    // Optional Chaining
    setAllRestaurants(json?.data?.cards[2]?.card?.card);
    setFilteredRestaurants(json?.data?.cards[2]?.card?.card);
  }
  console.log("render");
  // not render component (Early return)
  if (!allRestaurants) return null;
  if (filteredRestaurants?.length === 0)
    return <h1>No Restraunt match your Filter!!</h1>;
  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
                                                                      
        <>
        <div className="search-container">
            <input
             type="text"
             className="search-input"
             placeholder="Search"
             value={searchText}
             onChange= {(e) => {
                //e.target.value => whatever you write in input
                setSearchText(e.target.value)
             }}
            />
           <button
          className="search-btn"
          onClick={() => {
            //need to filter the data
            const data = filterData(searchText, allRestaurants);
            // update the state - restaurants
            setFilteredRestaurants(data);

          }}
        >
          Search
        </button>
        </div>
        <div className="restaurant-list">
            {/* You have to write logic for NO restraunt fount here */}
            {filteredRestaurants.map((restaurant) => {
                    return <RestaurantCard {...restaurant.data}  key={restaurant.data.id}/>
                })
            }

        </div>
        </>
    )
 
}

export  default Body