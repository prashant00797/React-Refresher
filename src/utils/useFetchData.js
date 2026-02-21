import { useParams } from "react-router";
import { BASE_URL, FILTER_LIST } from "./utils";
import { useEffect, useState } from "react";

export const useFetchData = (id) => {
  const [apiData, setApiData] = useState({
    overallData: {},
    groupedData: [],
  });

  useEffect(() => {
    handleCardDetails();
  }, []);

  const handleCardDetails = async () => {
    const { data } = await (
      await fetch(`${BASE_URL}${FILTER_LIST}${id}`)
    ).json();

    //remember this type of chaining
    const _restaurantOverallData = data?.cards.find(
      (item) => item?.card?.card?.info,
    )?.card?.card?.info;

    //use ?. condtional chaining to not through error
    //Boolean removes undefined, null, false, 0 or ""
    const _restaurantCategoryData = data?.cards
      .find((item) => item?.groupedCard?.cardGroupMap?.REGULAR?.cards)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards.map(
        (item) => item?.card?.card,
      )
      .filter(Boolean); // this filter just checks for the map value fetched out is true or not if it finds any value as undefined or null it wont add.

    setApiData({
      overallData: _restaurantOverallData,
      groupedData: _restaurantCategoryData,
    });
  };

  return apiData;
};
