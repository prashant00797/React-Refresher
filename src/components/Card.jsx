//learn about use effect hook
import { useEffect, useState } from "react";
import { BASE_URL, URL_GET_LIST } from "../utils/utils";
import Shimmer from "./Shimmer";
import React from "react";
import { Search } from "./Search";
import { Link } from "react-router";

const Card = () => {
  //use state variable always when data renders on state change
  const [cardData, setCardData] = useState([]);
  const [filteredData, setFilteredData] = useState(cardData);

  //effect
  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const { data } = await (await fetch(BASE_URL + URL_GET_LIST)).json();

    /*find logic do revise - it returns the whole object if true. difference from filter, it checks the first condition true 
    and then returns doesn't check for all */
    const restaurantCardValid = data?.data?.cards?.find(
      (c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants,
    );

    //since it return the object i again had to nest inside to get the array value
    const restaurants =
      restaurantCardValid?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ?? [];
    setCardData(restaurants); // imporant to set state data cant use restuarants outside since its a local variable we need a state variable here to render our data
    setFilteredData(restaurants);
  };

  return (
    <React.Fragment>
      <Search cardData={cardData} setFilteredData={setFilteredData} />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
        }}
      >
        {filteredData.length === 0 ? (
          <Shimmer /> //conditional rendering
        ) : (
          filteredData.map((item) => (
            <Link
              key={item.info.id}
              style={{
                backgroundColor: "lightcoral",
                width: "50vmin",
                height: "70vmin",
                borderRadius: "2vmin",
                display: "grid",
                margin: "1vmin",
                padding: "3vmin",
                listStyle: "none",
                textDecoration: "none",
                color: "black",
              }}
              to={`listRestaurantMenu/${item.info.id}`}
            >
              <p>{item.info.name}</p>
              <p>{item.info.costForTwo}</p>
              <p>{item.info.locality}</p>
              <p>{item.info.cuisines.join(",")}</p>
              <p>{item.info.avgRating}</p>
            </Link>
          ))
        )}
      </div>
    </React.Fragment>
  );
};

export default Card;
