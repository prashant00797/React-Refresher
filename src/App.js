import { Outlet } from "react-router";
import { Dummy } from "./components/Dummy";
import Filter from "./components/Filter";
import { Iterator, Iterator2 } from "./components/Iterator";
import { Toggle } from "./components/Toggle";
import Navbar from "./components/Navbar";
import { infoList } from "../src/utils/utils";
import UserContext from "./context/userContext";
import { useEffect, useState } from "react";

const Title = () => <h1>React Refresher</h1>;

export const App = () => {
  const arr = ["a", "b", "c"]; // this gets converted to a string when printed inside an HTML element
  const random = Math.random().toFixed(1);

  // understanding context api provider logic

  const [fname, setfName] = useState("");
  useEffect(() => {
    //suppose api call and we are getting some data and setting it here
    const obj = { fname: "prashant" };
    setfName(obj.fname);
  }, []);
  return (
    <>
      <Navbar />
      <div>
        {/* <h1 style={{ backgroundColor: "red" }}>Test {random}</h1> */}
        {/* <Toggle /> */}
      </div>
      {/* {Title()} Ultimate its a js arrow function and we are invoking it */}
      {/* <Title></Title> All this three syntax mean the same  */}
      {/* <Title /> */}
      {/* <Dummy name={"check props"} arr={arr} /> */}
      {/* understanding how props are sent in Dummy Component */}
      {/* <Iterator infoList={infoList} /> */}
      {/* Understanding the role of map in rendering multiple data in an single component - Iterator Js */}
      {/* <Iterator2 infoList={infoList} /> */}
      {/* <Filter infoList={infoList} /> */}

      {/* I PUT IT HERE SINCE I DONT WANT MY NAV BAR TO GET THE UPDATED PROVIDER VALUE REST ALL CHILDRENS WILL GET UNDER THE APP */}
      <UserContext.Provider value={{ loggedInUser: fname, setfName }}>
        <Outlet />
        {/* Outlet -  Renders the matching child route of a parent route or nothing if no child route matches. */}
      </UserContext.Provider>
    </>
  );
};

export default App;
