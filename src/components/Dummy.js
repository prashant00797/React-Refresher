export const Dummy = (
  args /* or {name} - this is destructing on fly basic js*/,
) => {
  //   destruction syntax.
  const { name, arr } = args;
  return (
    <div style={{ display: "none" }}>
      {/* <h1>testing props : {args.name}</h1> */}
      <h1>testing props : {name}</h1>
      <h1>{arr.join(",")}</h1>
    </div>
  );
};
