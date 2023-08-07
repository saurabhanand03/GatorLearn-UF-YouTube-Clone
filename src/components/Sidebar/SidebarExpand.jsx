import {
  faHouse,
  faSquareCheck,
  faGear,
  faCirclePlay,
  faClapperboard,
  faPlay,
  faPhotoFilm,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SidebarExpand() {
  // For future use: URL Path -> window.location.pathname
  return (
    <div className="w-1/6 p-2 sticky top-20 left-0">
      <ul className="px-4 flex flex-col items-start border-b-2 border-blackSecondary">
        <a
          href="/"
          className="mb-4 flex justify-start items-center gap-2 border-l-2 border-transparent hover:border-redMain"
        >
          <div className="h-8 w-8 flex justify-center items-center">
            <FontAwesomeIcon className="text-lg" icon={faHouse} />
          </div>
          <p>Home</p>
        </a>

        <a
          href="/"
          className="w-full mb-4 flex items-center gap-2 border-l-2 border-transparent hover:border-redMain"
        >
          <div className="h-8 w-8 flex justify-center items-center">
            <FontAwesomeIcon className="text-lg" icon={faSquareCheck} />
          </div>
          <p>Subscriptions</p>
        </a>

        <a
          href="/"
          className="w-full mb-4 flex items-center gap-2 border-l-2 border-transparent hover:border-redMain"
        >
          <div className="h-8 w-8 flex justify-center items-center">
            <FontAwesomeIcon className="text-lg" icon={faClapperboard} />
          </div>
          <p>Questions</p>
        </a>

        <a
          href="/"
          className="w-full mb-4 flex items-center gap-2 border-l-2 border-transparent hover:border-redMain"
        >
          <div className="h-8 w-8 flex justify-center items-center">
            <FontAwesomeIcon className="text-lg" icon={faPhotoFilm} />
          </div>
          <p>Saved Videos</p>
        </a>
      </ul>

      <ul className="py-2 px-4 flex flex-col items-start  border-b-2 border-blackSecondary cursor-pointer">
        <div className="w-full mb-4 flex justify-start items-center gap-2 border-l-2 border-transparent hover:border-redMain">
          <div className="h-8 w-8 flex justify-center items-center">
            <FontAwesomeIcon className="text-lg" icon={faGear} />
          </div>
          <p>Settings</p>
        </div>

        <div className="w-full mb-4 flex items-center gap-2 border-l-2 border-transparent hover:border-redMain">
          <div className="h-8 w-8 flex justify-center items-center">
            <FontAwesomeIcon
              className="text-lg text-redMain"
              icon={faCirclePlay}
            />
          </div>
          <p>Study Music</p>
        </div>
      </ul>

      <p className="p-2 text-sm opacity-80">
        Team 6:<br />
        <div className="ml-2">
          Saurabh Anand<br />
          Cristian Huerta<br />
          Devin Rodriguez<br />
          Torie Russell<br />
          Nicholas Sardinia
        </div>
      </p>

      <p className="p-2 text-sm opacity-40">
        <a href="https://github.com/piyush2108/youtube-clone" target="_blank" className="">
          Adapted from <br />
          &copy; 2023 Devsigner
        </a>
      </p>

    </div>
  );
}
