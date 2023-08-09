import { RouterProvider, createBrowserRouter } from "react-router-dom";

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
  return (
    <div className="hidden md:block bg-blackMain text-white font-primary cursor-default">
      <Header />
      <div className="min-h-screen flex items-start relative">
        <Sidebar />
        <RouterProvider router={appRouter} />
      </div>
    </div>
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
  