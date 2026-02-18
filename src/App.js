import { Dummy } from "./components/Dummy";
import Filter from "./components/Filter";
import { Iterator, Iterator2 } from "./components/Iterator";
import { infoList } from "./components/utils";

const Title = () => <h1>React Refresher</h1>;

export const App = () => {
  const arr = ["a", "b", "c"]; // this gets converted to a string when printed inside an HTML element
  const random = Math.random().toFixed(1);

  return (
    <div>
      <h1 style={{ backgroundColor: "red" }}>Test {random}</h1>
      {Title()} {/* Ultimate its a js arrow function and we are invoking it */}
      {/* <Title></Title> All this three syntax mean the same  */}
      {/* <Title /> */}
      <Dummy name={"check props"} arr={arr} />
      {/* understanding how props are sent in Dummy Component */}
      <Iterator infoList={infoList} />
      {/* Understanding the role of map in rendering multiple data in an single component - Iterator Js */}
      <Iterator2 infoList={infoList} />
      <Filter infoList={infoList} />
    </div>
  );
};

export default App;
