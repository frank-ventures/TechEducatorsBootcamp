import { UserContext } from "./UserContext";
import { useContext } from "react";

export function Home() {
  let me = useContext(UserContext);
  console.log("me is ", me);
  console.log(me.username);
  console.log(me.setUsername);
  return (
    <>
      <h1>You are Home</h1>
    </>
  );
}
