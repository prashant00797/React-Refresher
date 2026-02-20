// i checked my custom hooks also in this component

import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { BASE_URL, FILTER_LIST } from "../utils/utils";
import Shimmer from "./Shimmer";
import { useFetchData } from "../utils/useFetchData";
import { useOnlineStatus } from "../utils/useOnlineStatus";

const DynamicCard = () => {
  const { id } = useParams();

  /* 
    Since now we have our own custom hook to fetch api data we dont need this logic
    to fetch api data
    
    const handleCardDetails = async () => {
    const { data } = await (
      await fetch(`${BASE_URL}${FILTER_LIST}${id}`)
    ).json();

    --->Remember this type of chaining
    const filteredRestaurantData = data?.cards.find(
      (item) => item?.card?.card?.info,
    )?.card?.card?.info;

    setResDetails(filteredRestaurantData);
  };

  useEffect(() => {
    handleCardDetails();
  }, []);

  */

  const resDetails = useFetchData(id);
  const status = useOnlineStatus();
  // console.log(status);

  if (status === false) return <div>Opps connection lost</div>;
  /* the above code is not good basically this 
   should be handled with a global level context
   and a separate component must be loaded in case of network failure 
   rather than modifying shimmer itself */

  return Object.keys(resDetails).length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <h2>{`Just use this data to populate ${JSON.stringify(resDetails)}`}</h2>
    </div>
  );
};

export default DynamicCard;
