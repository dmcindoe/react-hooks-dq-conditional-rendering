import React from "react"

  const MenuBar = ({ MenuItem, onClick }) => {
    return (
      <div className="ui four item menu">
        <span
          className={MenuItem === "Profile" ? "item active" : "item"}
          onClick={() => onClick("Profile")}
        >
          <i className="user large icon" />
        </span>
  
        <span
          className={MenuItem === "Photo" ? "item active" : "item"}
          onClick={() => onClick("Photos")}
        >
          <i className="photo large icon" />
        </span>
  
        <span
          className={MenuItem === "Cocktail" ? "item active" : "item"}
          onClick={() => onClick("Cocktails")}
        >
          <i className="cocktail large icon" />
        </span>
  
        <span
          className={MenuItem === "Pokemon" ? "item active" : "item"}
          onClick={() => onClick("Pokemon")}
        >
          <i className="themeisle large icon" />
        </span>
      </div>
    );
  }

export default MenuBar
