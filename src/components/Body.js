import { restaurantList } from "../constant.js"
import RestaurantCard from "./RestaurantCard.js"
import {useState} from "react"

//what is state? when we need to create local variable in react that needs to use state variable and those are created by useState hooks
//what is React hooks? just a normal function
//what is useState? returns an array and the first elemnet of array is local variable 


function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((restaurant) =>
      restaurant.data.name.includes(searchText)
    );
    return filterData;
  }

const Body = () => {
    //let searchTxt = "KFC"
    
    const [restaurants, setRestaurants] = useState(restaurantList)
    const [searchText, setSearchText] = useState("KFC"); //returns= [variavle name, function to update the variable]
    return(                                                                    
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
            const data = filterData(searchText, restaurants);
            // update the state - restaurants
            setRestaurants(data);
          }}
        >
          Search
        </button>
        </div>
        <div className="restaurant-list">
            {
                restaurantList.map((restaurant) => {
                    return <RestaurantCard {...restaurant.data}  key={restaurant.data.id}/>
                })
            }

        </div>
        </>
    )
 
}

export  default Body