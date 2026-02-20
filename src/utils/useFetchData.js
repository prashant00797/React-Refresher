import { useParams } from "react-router";
import { BASE_URL, FILTER_LIST } from "./utils";
import { useEffect, useState } from "react";

export const useFetchData = (id) => {
  const [apiData, setApiData] = useState({});

  useEffect(() => {
    handleCardDetails();
  }, []);

  const handleCardDetails = async () => {
    const { data } = await (
      await fetch(`${BASE_URL}${FILTER_LIST}${id}`)
    ).json();

    //remember this type of chaining
    const filteredRestaurantData = data?.cards.find(
      (item) => item?.card?.card?.info,
    )?.card?.card?.info;
    setApiData(filteredRestaurantData);
  };

  return apiData;
};
