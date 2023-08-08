import {useState} from "react";

import Login from "./Login/Login";
import Homepage from "./Homepage";

import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Body from "./Body/Body";
import Home from "./Body/Home";
import Error from "./Error/Error";
import Live from "./Live/Live";
import VideoShowcase from "./Body/Showcase/VideoShowcase";
import SearchResults from "./Body/SearchResults/SearchResults";
import Questions from "./Body/Questions/Questions";

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


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/watch",
        element: <VideoShowcase />,
      },
    ],
  },
  {
    path: "/results",
    errorElement: <Error />,
    element: <SearchResults />,
  },
  {
    path: "/live",
    errorElement: <Error />,
    element: <Live />,
  },
  {
    path: "/questions",
    errorElement: <Error />,
    element: <Questions />,
  },
]);
