import { useEffect } from "react";

import Classy from "./Classy.jsx";
export const Dummy = (
  args /* or {name} - this is destructing on fly basic js*/,
) => {
  //   destruction syntax.
  const { name, arr } = args;

  //for checking render cycle
  console.log("--->1.intitally parent called");
  useEffect(() => {
    console.log(
      "--->6.parent mounted hence parents useffect or componentDidMount called",
    );
  }, []);

  return (
    <div>
      {/* <h1>testing props : {args.name}</h1> */}
      {/* <h1>testing props : {name}</h1> */}
      {/* <h1>{arr.join(",")}</h1> */}
      <p>{console.log("-->2.parent return or render called")}</p>
      <Classy name={"prashant"} arr={[1, 2, 3]} />{" "}
      {/*Testing class based component */}
      {/* <Classy name={name} arr={arr} /> Creating duplicate to check the life cycle methods */}
    </div>
  );
};
