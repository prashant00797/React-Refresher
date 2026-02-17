const Title = () => <h1>React Refresher</h1>;

export const App = () => {
  const random = Math.random().toFixed(1);
  return (
    <div>
      <h1>Test {random}</h1>
      {Title()} {/* Ultimate its a js arrow function and we are invoking it */}
      <Title></Title> {/* All this three syntax mean the same  */}
      <Title />
    </div>
  );
};
