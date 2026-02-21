import { useContext } from "react";
import UserContext from "../context/userContext";

const AccordionItem = ({ item = [] }) => {
  /*checking condition of context api 
  since if we had to pass anything from app to this component 
  props drilling scenario would arise*/
  const { loggedInUser } = useContext(UserContext);

  return item.map((data) => {
    return (
      <div key={data.card.info.id} className="mb-1.5">
        <p>{JSON.stringify(data.card.info)}</p>

        {/* checking context data */}
        <p>{loggedInUser}</p>
      </div>
    );
  });
};

export default AccordionItem;
