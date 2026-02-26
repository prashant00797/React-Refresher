import React from "react";
import AccordionItem from "./AccordionItem";

const AccordionCard = ({
  groupedData = {},
  conditionForCollapse = false,
  setCollapse = null,
}) => {
  // if we want each accordion to maintain its own state
  // const [open, setOpen] = useState(false);

  const { title, itemCards } = groupedData;

  const handleOpen = (e) => {
    e.stopPropagation();
    setCollapse();
  };

  //extracting array from nested objs
  const accordData = itemCards.map((i) => i.card.info);

  return (
    <React.Fragment>
      <div onClick={(e) => handleOpen(e)}>
        <div className="bg-amber-500 rounded h-10 mb-1.5 cursor-pointer pl-1.5">
          <p className="text-2xl">{`${title} (${groupedData.itemCards.length})👇🏼`}</p>
        </div>
        <div>
          {conditionForCollapse && (
            <AccordionItem key={title} item={accordData} />
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default AccordionCard;
