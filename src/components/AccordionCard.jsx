import React, { useState } from "react";
import AccordionItem from "./AccordionItem";

const AccordionCard = ({
  groupedData = {},
  conditionForCollapse = false,
  setCollapse = null,
}) => {
  // if we want each accordion to maintain its own state
  // const [open, setOpen] = useState(false);

  const { title, itemCards } = groupedData;

  const handleOpen = () => {
    setCollapse();
  };

  return (
    <React.Fragment>
      <div onClick={() => handleOpen()}>
        <div className="bg-amber-500 rounded h-10 mb-1.5 cursor-pointer pl-1.5">
          <p className="text-2xl">{title}</p>
        </div>
        <div>
          {conditionForCollapse && (
            <AccordionItem key={title} item={itemCards} />
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default AccordionCard;
