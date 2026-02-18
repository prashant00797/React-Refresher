import React, { useState } from "react";

export const Toggle = () => {
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <button onClick={handleToggle}>{toggle ? "Login" : "Logout"}</button>
    </div>
  );
};
