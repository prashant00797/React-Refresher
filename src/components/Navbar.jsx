//Routing Logic + checking custom hooks
import { Link } from "react-router";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import UserContext from "../context/userContext";
import { useContext } from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  //custom hook
  const status = useOnlineStatus();

  //just using usercontext here and there to its effect
  const { loggedInUser } = useContext(UserContext);

  //using selector to fetch from wishListSlice of redux = subscribing store using selector
  const wishListItems = useSelector((store) => store.wishList.item);

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "beige",
        height: "3rem",
        borderRadius: "1vmin",
        padding: "0 1vmin",
        marginBottom: "1vmin",
      }}
    >
      <Link to={"/"}>
        <img
          src="https://www.clipartmax.com/png/small/36-365828_navbar-toggle-icon-menu-hamburger-png-white.png"
          alt="icon"
          style={{ width: "1vmax", padding: "1px 0px" }}
        />
      </Link>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          listStyle: "none",
          gap: "3vmin",
        }}
      >
        {/* just using usercontext here and there to its effect */}
        <li>{loggedInUser} </li>

        {/* custom hook use below */}
        <li>Online Status : {status ? "🟢" : "😡"} </li>

        <Link
          to={"/deals"}
          style={{
            cursor: "pointer",
            textDecoration: "none",
            color: "black",
            padding: "3px 0px",
          }}
        >
          Deals
        </Link>
        <Link
          style={{
            cursor: "pointer",
            textDecoration: "none",
            color: "black",
            padding: "3px 0px",
          }}
          to={"/wishlist"}
        >
          {`Wishlist ${wishListItems.length}`}
        </Link>
        <Link
          to={"/account"}
          style={{
            cursor: "pointer",
            textDecoration: "none",
            color: "black",
            padding: "3px 0px",
          }}
        >
          Account
        </Link>
        <Link
          to={"/about"}
          style={{
            cursor: "pointer",
            textDecoration: "none",
            color: "black",
            padding: "3px 0px",
          }}
        >
          About
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
