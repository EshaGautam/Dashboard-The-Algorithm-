import React from "react";
import "./SearchBar.css";
import { IoIosNotifications } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <div id="search-dropdown-div">
        <div className="dropdown-container">
          <select className="dropdown">
            <option value="all">Default</option>
            <option value="videos">Videos</option>
            <option value="channels">Channels</option>
            <option value="playlists">Playlists</option>
          </select>
          <MdOutlineKeyboardArrowUp color="#969BAC" />
        </div>
        <div className="search-input-container">
          <button className="search-btn">
            <CiSearch size={20} />
          </button>
          <input
            type="text"
            placeholder="Search by Doctor's name/speciality etc"
            className="search-input"
          />
        </div>
      </div>
      <div id="profile-div">
        <div className="notification-icon">
          <IoIosNotifications size={25} color="#969BAC" />
          <span className="notification-dot"></span>
        </div>
        <div className="divider"></div>
        <img
          src="/src/assets/1-intro-photo-final.jpg"
          alt="User"
          className="user-icon"
        />
        <MdKeyboardArrowDown size={24} color="#969BAC" />
      </div>
    </div>
  );
};

export default SearchBar;
