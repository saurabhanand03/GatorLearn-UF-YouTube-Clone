import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars, faBell, faVideo } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { useState } from "react";

import Searchbar from "./Searchbar";
// import Logo from "../../assets/youtube_logo.svg";
import Logo from "../../assets/Florida_Gators_gator_logo.svg";
import { toggleSidebar } from "../../app/slices/sidebarSlice";
import NotificationBox from "./NotificationBox";
import { Link, Navigate } from "react-router-dom";

export default function Header() {
  const dispatch = useDispatch();
  const [showCreate, setShowCreate] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [sidebarState, setSidebarState] = useState(true);

  const toggleCreate = () => {
    setShowCreate(!showCreate);
    setShowNotification(false);
  };

  const toggleNotification = () => {
    setShowNotification(!showNotification);
    setShowCreate(false);
  };

  const handleSidebarToggle = (e) => {
    dispatch(toggleSidebar());
    setSidebarState(!sidebarState);
  };

  const userTheme = localStorage.getItem("theme");
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [darkMode, setDarkMode] = useState(systemTheme);
  const root = document.documentElement;

  const themeCheck = () => {
    if(userTheme =='dark' || (!userTheme && systemTheme)) {
      root.classList.add("dark");
    }
  };

  const handleThemeSwitch = () =>
  {
    setDarkMode(!darkMode);
    if(root.classList.contains("dark"))
    {
      root.classList.remove("dark");
      root.style.setProperty("--redMain", "#e7890e"); // Light mode redMain color
      // root.style.setProperty("--blackMain", "#e7890e"); // Light mode blackMain color
      localStorage.setItem("theme","light");
      return;
    } else {
      root.classList.add("dark");
      root.style.setProperty("--redMain", "#8383fc"); // Dark mode redMain color
      // root.style.setProperty("--blackMain", "#8383fc"); // Dark mode blackMain color
      localStorage.setItem("theme","dark");
      return;
    }
  };


  themeCheck();

  return (
    <div className="py-1 px-6 flex justify-between items-center gap-4 bg-blackMain dark:bg-darkMain sticky top-0 left-0 z-20">
      <div className="flex items-center gap-4">
        <div className="flex justify-center items-center gap-1">
          <button
            className="group mr-4 flex justify-center items-center"
            onClick={(e) => handleSidebarToggle(e)}
          >
            {sidebarState ? (
              <FontAwesomeIcon
                className="p-2 text-lg group-hover:text-redMain"
                icon={faBars}
              />
            ) : (
              <FontAwesomeIcon
                className="p-2 text-lg opacity-80 group-hover:text-redMain"
                icon={faBars}
              />
            )}
          </button>

          <a>
            <img
              onClick={handleThemeSwitch}
              className="w-8 hover:opacity-80"
              alt="GatorLearn logo"
              src={Logo}
            />
          </a>

          <a onClick={handleThemeSwitch} className="font-secondary text-2xl hover:opacity-80 select-none">
            GatorLearn
            <sup className="text-sm opacity-80">{darkMode ? "Study" : "Learn"}</sup>
          </a>
        </div>

        <div className="ml-4 cursor-pointer">
          <Searchbar />
        </div>
      </div>

      <div className="flex items-center">
        <div className="p-2 flex items-center gap-2 relative">
          <FontAwesomeIcon
            className={`p-2 text-xl border-b-[2px] ${
              showCreate ? "border-redMain" : "border-transparent"
            } hover:border-redMain cursor-pointer`}
            icon={faVideo}
            id="create"
            onClick={() => toggleCreate()}
          />

          <FontAwesomeIcon
            className={`p-2 text-xl border-b-[2px] ${
              showNotification ? "border-redMain" : "border-transparent"
            } hover:border-redMain cursor-pointer`}
            icon={faBell}
            id="notification"
            onClick={() => toggleNotification()}
          />

          {showCreate && <NotificationBox value={"create"} />}
          {showNotification && <NotificationBox value={"notification"} />}
        </div>

        <div className="h-10 w-10 p-1 flex justify-center items-center rounded-full border-[1px] border-transparent hover:border-redMain">
         <a href='/login'>
          <FontAwesomeIcon className="text-xl" icon={faUser}/>
        </a>
        </div>
      </div>
    </div>
  );
}
