import { Dummy } from "./Dummy";
import { Iterator } from "./Iterator";

const Title = () => <h1>React Refresher</h1>;

export const App = () => {
  const arr = ["a", "b", "c"]; // this gets converted to a string when printed inside an HTML element
  const random = Math.random().toFixed(1);
  const infoList = [
    { id: 1, name: "Aarav", age: 24, place: "Delhi" },
    { id: 2, name: "Priya", age: 22, place: "Mumbai" },
    { id: 3, name: "Rohan", age: 26, place: "Bangalore" },
    { id: 4, name: "Sneha", age: 23, place: "Pune" },
    { id: 5, name: "Kabir", age: 25, place: "Hyderabad" },
    { id: 6, name: "Ananya", age: 21, place: "Chennai" },
  ];

  return (
    <div>
      <h1 style={{ backgroundColor: "red" }}>Test {random}</h1>
      {Title()} {/* Ultimate its a js arrow function and we are invoking it */}
      <Title></Title> {/* All this three syntax mean the same  */}
      <Title />
      <Dummy name={"check props"} arr={arr} />
      <Iterator infoList={infoList} />
    </div>
  );
};
