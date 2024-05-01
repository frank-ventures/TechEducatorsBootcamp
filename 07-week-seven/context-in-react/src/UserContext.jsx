// The things you need to import to make it work
import { createContext, useState } from "react";

// Declaring a context for other components to use:
export const UserContext = createContext();

// This is the wrapper which surrounds whatever components we want to be able to use our states:
export function UserProvider({ children }) {
  console.log(UserContext);
  const [username, setUsername] = useState("frank");

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
}
