import { useContext } from "react";
import UserContext from "../context/userContext";
import { useDispatch } from "react-redux";
import { addToWishList } from "../store/wishListSlice";
import { useLocation } from "react-router";

const AccordionItem = ({ item = [] }) => {
  const { pathname } = useLocation();

  /*checking condition of context api 
  since if we had to pass anything from app to this component 
  props drilling scenario would arise*/
  const { loggedInUser } = useContext(UserContext);

  //dispatching an action - rtk
  const dispatch = useDispatch();

  const handleAddToWishList = (e, item) => {
    //stop bubbling
    e.stopPropagation();
    dispatch(addToWishList(item));
  };

  return item.map((info, idx) => {
    return (
      <div
        key={idx}
        className="mb-1.5 flex justify-between items-center pl-1 pr-1"
      >
        <div>
          <h6 className="text-2xl text-gray-800">{`${info.name} - ₹${info.price / 100}`}</h6>
          <p className="text-gray-500">{`${info.description}`}</p>
        </div>
        <div>
          {pathname === "/wishlist" ? (
            <div className="flex gap-3">
              <button className="bg-green-500 w-10 h-10 rounded-2xl cursor-pointer text-white">
                ➕
              </button>
              <button className="bg-red-500 w-10 h-10 rounded-2xl cursor-pointer text-white">
                ➖
              </button>
            </div>
          ) : (
            <button
              onClick={(e) => handleAddToWishList(e, info)}
              className="bg-amber-500 w-30 h-10 rounded-2xl cursor-pointer text-amber-100"
            >
              Add to WishList
            </button>
          )}
        </div>

        {/* checking context data */}
        {/* <p>{loggedInUser}</p> */}
      </div>
    );
  });
};

export default AccordionItem;
