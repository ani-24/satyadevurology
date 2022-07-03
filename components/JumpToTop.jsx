import React from "react";
import { useState, useEffect } from "react";

const JumpToTop = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scroll = document.documentElement.scrollTop;
    if (scroll >= 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  });
  return (
    <div
      className={`jump-to-top ${visible ? "show" : "hide"}`}
      onClick={scrollTop}
    >
      <i className="fas fa-caret-up jump-to-top__icon"></i>
    </div>
  );
};

export default JumpToTop;
