//redux implementation

import { useDispatch, useSelector } from "react-redux";
import AccordionItem from "./AccordionItem";
import { clearWishList } from "../store/wishListSlice";

const Wishlist = () => {
  const cartItems = useSelector((state) => state.wishList.item);

  console.log(cartItems);

  const dispatch = useDispatch();

  const handleClearCart = (e) => {
    e.stopPropagation();
    dispatch(clearWishList());
  };

  return (
    <div>
      <h1>Cart</h1>
      <div>
        <AccordionItem item={cartItems} />
      </div>
      <button
        onClick={(e) => handleClearCart(e, cartItems)}
        className="bg-black cursor-pointer text-white"
      >
        Clear Cart
      </button>
      {cartItems.length === 0 && (
        <h3>Oops!! sorry to see that please add some mouthilicious food😋🍴</h3>
      )}
    </div>
  );
};

export default Wishlist;
