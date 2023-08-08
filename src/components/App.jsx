import {useState} from "react";

import Login from "./Login/Login";
import Homepage from "./Homepage";


export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
    {isLoggedIn ?(
      <Homepage />
    ) : (
      <Login setIsLoggedIn={setIsLoggedIn} />
    ) }
    </>
  );
}


