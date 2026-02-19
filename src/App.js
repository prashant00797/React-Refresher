import { Outlet } from "react-router";
import { Dummy } from "./components/Dummy";
import Filter from "./components/Filter";
import { Iterator, Iterator2 } from "./components/Iterator";
import { Toggle } from "./components/Toggle";
import Navbar from "./components/Navbar";
import { infoList } from "./components/utils";

const Title = () => <h1>React Refresher</h1>;

export const App = () => {
  const arr = ["a", "b", "c"]; // this gets converted to a string when printed inside an HTML element
  const random = Math.random().toFixed(1);

  return (
    <div>
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
      <Outlet />
      {/* Outlet -  Renders the matching child route of a parent route or nothing if no child route matches. */}
    </div>
  );
};

export default App;
