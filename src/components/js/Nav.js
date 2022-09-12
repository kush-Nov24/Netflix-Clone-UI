import React, { useState, useEffect } from "react";
import "../css/Nav.css";

const Nav = () => {
  const [show, setShow] = useState(false);
  function handleBlackBg() {
    if (window.scrollY > 100) setShow(true);
    else setShow(false);
  }
  useEffect(() => {
    window.addEventListener("scroll", handleBlackBg);
    return () => window.removeEventListener("scroll", handleBlackBg);
  }, []);

  return (
    <div className={`nav ${show && "nav-black"}`}>
      <div className="nav-content">
        <img
          className="nav-logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="logo"
        />
        <img
          className="nav-avatar"
          src="https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default Nav;
