import { useState, useEffect } from "react";
import { BASE_URL, FILTER_LIST } from "./utils";

export const Search = ({ cardData, setFilteredData }) => {
  const [searchText, setSearchText] = useState("");

  //if you want to hit an get menu api and filter the data below func
  /* const handleFilterData = async () => {
    const { data } = await (
      await fetch(`${BASE_URL}${FILTER_LIST}${search}`)
    ).json();

    const filteredRestaurantData =
      data?.cards.find((item) => item?.card?.card?.info)?.card?.card?.info ||
      cardData;
    setCardData([
      {
        info: filteredRestaurantData,
      },
    ]);
  };
*/
  const handleFilterData = () => {
    //normal search query - revise not took help
    const filteredList = cardData.filter((item) =>
      item.info.name.toLowerCase().includes(searchText.toLowerCase()),
    );

    setFilteredData(filteredList);
  };

  return (
    <div>
      <label htmlFor="search">Search</label>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button onClick={handleFilterData}>Search</button>
    </div>
  );
};
