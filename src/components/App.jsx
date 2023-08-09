import {useState} from "react";

import Login from "./Login/Login";
import Homepage from "./Homepage";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="hidden md:block bg-black  text-white font-primary cursor-default">
      <Header />
      <div className="min-h-screen flex items-start relative">
        <Sidebar />
        <RouterProvider router={appRouter} />
      </div>
    </div>
    <>
    {isLoggedIn ?(
      <Homepage />
    ) : (
      <Login setIsLoggedIn={setIsLoggedIn} />
    ) }
    </>
  );
}
