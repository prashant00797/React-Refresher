import { useState, useEffect, useContext } from "react";
import { BASE_URL, FILTER_LIST } from "../utils/utils";
import UserContext from "../context/userContext";

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

  //test context api
  const { loggedInUser, setfName } = useContext(UserContext);

  return (
    <div>
      <label htmlFor="search" className="text-1 ml-2 pr-6">
        Search
      </label>
      <input
        className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm"
        type="text"
        value={searchText}
        id="search"
        name="search"
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button
        className="bg-blue-700 text-white rounded-2xl w-20 h-10 ml-5"
        onClick={handleFilterData}
      >
        Search
      </button>

      {/* Start - to test context api */}
      <label htmlFor="searchForContext" className="text-1 ml-2 pr-6">
        Test Context
      </label>
      <input
        className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm"
        type="text"
        value={loggedInUser}
        id="contextSearch"
        name="contextSearch"
        onChange={(e) => setfName(e.target.value)}
      />
      {/* End */}
    </div>
  );
};
