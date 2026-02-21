// i checked my custom hooks also in this component

import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { BASE_URL, FILTER_LIST } from "../utils/utils";
import Shimmer from "./Shimmer";
import { useFetchData } from "../utils/useFetchData";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import AccordionCard from "./AccordionCard";

const DynamicCard = () => {
  const [title, setTitle] = useState("");
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

  const { overallData, groupedData } = useFetchData(id);
  const status = useOnlineStatus();

  if (status === false) return <div>Opps connection lost</div>;
  /* the above code is not good basically this 
   should be handled with a global level context
   and a separate component must be loaded in case of network failure 
   rather than modifying shimmer itself */

  return (
    <div>
      <div>
        <p>This is the main restaurant data: {JSON.stringify(overallData)}</p>
        {groupedData.length === 0 ? (
          <Shimmer />
        ) : (
          groupedData.map((item) => (
            <AccordionCard
              key={item.title}
              groupedData={item}
              conditionForCollapse={item.title === title} // important condition for opening and close
              setCollapse={
                () =>
                  item.title === title ? setTitle("") : setTitle(item.title) // important condtion for toggling or resetting the value
              }
            />
          ))
        )}
      </div>
    </div>
  );
};

export default DynamicCard;
