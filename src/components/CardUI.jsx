import { Link } from "react-router";

const CardUI = ({ item, isVeg = false }) => {
  return (
    <Link
      style={{
        backgroundColor: "lightcoral",
        borderRadius: "2vmin",
        display: "grid",
        margin: "1vmin",
        padding: "3vmin",
        listStyle: "none",
        textDecoration: "none",
        color: "black",
        height: "100%",
      }}
      to={`listRestaurantMenu/${item.info.id}`}
    >
      {isVeg && <p>🟢Veg</p>}
      <p>{item.info.name}</p>
      <p>{item.info.costForTwo}</p>
      <p>{item.info.locality}</p>
      <p>{item.info.cuisines.join(",")}</p>
      <p>{item.info.avgRating}</p>
    </Link>
  );
};

export default CardUI;
