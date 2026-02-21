//Understanding Context Api

import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "Default User Context",
});

export default UserContext;
