import React from "react";
import "./Nav.css";
const Nav = (props) => {
  return (
    <div>
      <div className="nav-container">
        <div className="logo-container">
          <h3>Bitwise Movie App </h3>
        </div>
        <div className="input-container">
          <input
            onChange={(e) => {
              props.setSearchInput(e.target.value);
            }}
            className="input-box"
            type="text"
            placeholder="i.e. The matrix"
          />
          <button onClick={() => props.movieSearch()} className="butn-Style">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
