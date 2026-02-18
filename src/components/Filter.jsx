import { useEffect, useState } from "react";

//Understanding hooks in the component

//avoid writing handler function outside if not lifting state or something

// for this code please see GPT explaination of the flaws i made . i am marking them here commenting would be repeating same code and comments
const Filter = ({ infoList }) => {
  const [filerData, setfilterData] = useState(infoList);

  const handleFilter = () => {
    console.log("w");

    const ageFilteredData = infoList.filter((item) => item.age > 23); //use infoList rather than filtered data
    setfilterData(ageFilteredData);
    console.log(ageFilteredData);
  };

  const handleReset = () => {
    setfilterData(infoList);
  };

  return (
    <div style={{ backgroundColor: "rebeccapurple" }}>
      {filerData.map((item) => {
        return (
          <div
            key={item.name}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              padding: "0px 2vmin",
              border: "1px solid black ",
            }}
          >
            <p>{item.name}</p>
            <p>{item.age}</p>
            <p>{item.place}</p>
          </div>
        );
      })}
      <button
        style={{
          textDecoration: "none",
          border: "none",
          width: "10vmin",
          height: "5vmin",
          backgroundColor: "lightblue",
          borderRadius: "1vmin",
          margin: "1vmin 1vmin",
        }}
        /* onClick={handleFilter(filerData,setfilterData)} 
         above code - I was writing in this pattern 
         this will execute it on the fly 
         which we dont want we want to act it as an callback 
         so that when the button is pressed it should response 
         and then the function must be called */
        //correct way below -
        // onClick={() => handleFilter()}
        onClick={handleFilter}
      >
        Filter
      </button>
      <button
        style={{
          textDecoration: "none",
          border: "none",
          width: "10vmin",
          height: "5vmin",
          backgroundColor: "lightblue",
          borderRadius: "1vmin",
          margin: "1vmin 1vmin",
        }}
        //onClick={() => handleReset()} // better to pass like this if we are passing any args. gpt
        onClick={handleReset} // since react expects a reference best practice when no args are passed
      >
        Reset
      </button>
    </div>
  );
};

export default Filter;
