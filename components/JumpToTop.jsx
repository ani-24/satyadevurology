import React, { useRef } from "react";
import { useState, useEffect } from "react";

const JumpToTop = () => {
  const jumpBtn = useRef(null);
  const addClick = () => {
    jumpBtn.current.style.transform = "scale(0.8)";
  };
  const removeClick = () => {
    jumpBtn.current.style.transform = "scale(1)";
  };
  console.log(jumpBtn);
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
      ref={jumpBtn}
      onMouseDown={addClick}
      onMouseUp={removeClick}
      onMouseLeave={removeClick}
    >
      <i className="fas fa-caret-up jump-to-top__icon"></i>
    </div>
  );
};

export default JumpToTop;
