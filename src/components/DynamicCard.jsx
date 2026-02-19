import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { BASE_URL, FILTER_LIST } from "./utils";
import Shimmer from "./Shimmer";

const DynamicCard = () => {
  const [resDetails, setResDetails] = useState([]);
  const { id } = useParams();

  const handleCardDetails = async () => {
    const { data } = await (
      await fetch(`${BASE_URL}${FILTER_LIST}${id}`)
    ).json();

    //remember this type of chaining
    const filteredRestaurantData = data?.cards.find(
      (item) => item?.card?.card?.info,
    )?.card?.card?.info;

    setResDetails(filteredRestaurantData);
  };

  useEffect(() => {
    handleCardDetails();
  }, []);
  return Object.keys(resDetails).length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <h2>{`Just use this data to populate ${JSON.stringify(resDetails)}`}</h2>
    </div>
  );
};

export default DynamicCard;
