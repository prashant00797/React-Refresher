export const Iterator = ({ infoList }) => {
  console.log(infoList);
  //syntax 1 auto return with ()
  return (
    <div>
      {infoList.map((items) => (
        <div key={items.id}>
          <p>{items.name}</p>
          <p>{items.age}</p>
          <p>{items.place}</p>
        </div>
      ))}
    </div>
  );
};

// Syntax 2 with return items inside map
export const Iterator2 = ({ infoList }) => {
  return (
    <div>
      {infoList.map((item) => {
        return (
          <div key={item.name}>
            <p>{item.name}</p>
            <p>{item.age}</p>
            <p>{item.place}</p>
          </div>
        );
      })}
    </div>
  );
};
