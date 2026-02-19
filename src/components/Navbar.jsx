//Routing Logic
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "beige",
        width: "100%",
        height: "5vmin",
        borderRadius: "1vmin",
        padding: "0 1vmin",
        marginBottom: "1vmin",
      }}
    >
      <Link to={"/"}>
        <img
          src="https://www.clipartmax.com/png/small/36-365828_navbar-toggle-icon-menu-hamburger-png-white.png"
          alt="icon"
          style={{ width: "1vmax" }}
        />
      </Link>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "20%",
          listStyle: "none",
          gap: "1vmin",
        }}
      >
        <Link
          to={"/deals"}
          style={{ cursor: "pointer", textDecoration: "none", color: "black" }}
        >
          Deals
        </Link>
        <Link
          style={{ cursor: "pointer", textDecoration: "none", color: "black" }}
          to={"/wishlist"}
        >
          Wishlist
        </Link>
        <Link
          to={"/account"}
          style={{ cursor: "pointer", textDecoration: "none", color: "black" }}
        >
          Account
        </Link>
        <Link
          to={"/about"}
          style={{ cursor: "pointer", textDecoration: "none", color: "black" }}
        >
          About
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
