export const withPromoted = (Component) => {
  return (props) => {
    const isVeg = props.item.info.veg;
    return (
      <>
        <Component {...props} isVeg={isVeg} />
      </>
    );
  };
};

//for understanding
function withPromoted2(Component) {
  function EnhancedComponent(props) {
    const isVeg = props.item.info.veg;

    return <Component {...props} isVeg={isVeg} />;
  }

  return EnhancedComponent;
}
