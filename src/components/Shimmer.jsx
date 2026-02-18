const Shimmer = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        gap: "10px",
      }}
    >
      {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
        <div
          key={index}
          style={{
            backgroundColor: "pink",
            width: "50vmin",
            height: "50vmin",
            borderRadius: "2vmin",
            display: "grid",
          }}
        ></div>
      ))}
    </div>
  );
};

export default Shimmer;
